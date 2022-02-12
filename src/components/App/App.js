import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from '../Header';
import TodoList from '../TodoList';
import InputForm from '../InputForm';
import Footer from '../Footer';

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleDone = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    const todoItem = todos[idx];
    const newTodos = [
      ...todos.slice(0, idx),
      { ...todoItem, done: !todoItem.done },
      ...todos.slice(idx + 1),
    ];
    setTodos(newTodos);
  };

  const editTodo = (id, text) => {
    const idx = todos.findIndex((el) => el.id === id);
    const todoItem = todos[idx];
    const newTodos = [
      ...todos.slice(0, idx),
      { ...todoItem, text },
      ...todos.slice(idx + 1),
    ];
    setTodos(newTodos);
  };

  const deleteTodoItem = (id) => {
    const idx = todos.findIndex((el) => el.id === id);
    setTodos(todos.filter((el, index) => index !== idx));
  };

  const addTodoItem = (text) => {
    const newItem = {
      id: (todos.length ? todos[todos.length - 1].id : 99) + 1,
      text,
      done: false,
      editing: false,
    };
    setTodos([...todos, newItem]);
  };

  const changeFilter = (name) => {
    setFilter(name);
  };

  const doneTodosClear = () => {
    setTodos(todos.filter((el) => !el.done));
  };

  const filterItems = (items, filter) => {
    if (filter === 'all') return items;
    else if (filter === 'done') return items.filter((el) => el.done);
    else if (filter === 'active') return items.filter((el) => !el.done);
  };

  const visibleItems = filterItems(todos, filter);

  return (
    <Container maxWidth="md">
      <Header />
      <InputForm onAddTodoItem={addTodoItem} />
      <TodoList
        todos={visibleItems}
        setTodos={setTodos}
        onEditTodo={editTodo}
        onToggleDone={toggleDone}
        onDelete={deleteTodoItem}
      />
      <Footer
        activeTodoCount={todos.filter((el) => !el.done).length}
        onDoneTodosClear={doneTodosClear}
        onFilterChange={changeFilter}
        filter={filter}
      />
    </Container>
  );
};

export default App;
