import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputForm = ({ onAddTodoItem }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (value) {
      onAddTodoItem(value);
    } else {
      e.target[0].blur();
    }
    setValue('');
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => onFormSubmit(e)}
    >
      <TextField
        value={value}
        fullWidth
        label="Type here to add todo"
        variant="outlined"
        autoFocus
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default InputForm;
