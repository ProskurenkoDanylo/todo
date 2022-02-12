import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TodoFilter from '../TodoFilter';

const Footer = ({
  activeTodoCount,
  filter,
  onFilterChange,
  onDoneTodosClear,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography>{activeTodoCount} items left</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <TodoFilter filter={filter} onFilterChange={onFilterChange} />
      </Box>
      <Box>
        <Button variant="outlined" color="error" onClick={onDoneTodosClear}>
          Clear done
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
