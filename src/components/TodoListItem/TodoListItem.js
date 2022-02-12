import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TodoListItem = ({
  id,
  text,
  done,
  onEditTodo,
  onToggleDone,
  onDelete,
}) => {
  const [hover, setHover] = useState(false);
  const [editing, setEditing] = useState(null);

  const editingFormSubmit = (e) => {
    e.preventDefault();
    onEditTodo(id, editing.value);
    setEditing(null);
  };

  return (
    <>
      <ListItem
        // As Reorder.Item creates a li element, I've made it in a div component
        component="div"
        sx={{ paddingLeft: 0, paddingRight: 0 }}
        secondaryAction={
          <IconButton
            sx={{ visibility: hover ? 'visible' : 'hidden' }}
            onClick={() => onDelete(id)}
          >
            <CloseIcon color="error" />
          </IconButton>
        }
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Checkbox
          checked={done}
          onChange={() => onToggleDone(id)}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
          color="success"
        />
        {editing ? (
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => editingFormSubmit(e)}
          >
            <TextField
              value={editing.value}
              onChange={(e) => setEditing({ value: e.target.value })}
              autoFocus
              onBlur={() => setEditing(null)}
            />
          </Box>
        ) : (
          <ListItemText onDoubleClick={() => setEditing({ value: text })}>
            <Typography
              sx={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                textDecoration: done ? 'line-through' : 'none',
              }}
            >
              {text}
            </Typography>
          </ListItemText>
        )}
      </ListItem>
      <Divider component="div" />
    </>
  );
};

export default TodoListItem;
