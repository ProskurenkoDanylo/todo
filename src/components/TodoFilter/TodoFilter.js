import Button from '@mui/material/Button';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' },
];

const TodoFilter = ({ filter, onFilterChange }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;

    return (
      <Button
        key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        variant={isActive ? 'outlined' : 'text'}
        color="error"
      >
        {label}
      </Button>
    );
  });

  return buttons;
};

export default TodoFilter;
