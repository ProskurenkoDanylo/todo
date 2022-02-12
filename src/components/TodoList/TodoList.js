import React from 'react';
import TodoListItem from '../TodoListItem';
import { Reorder } from 'framer-motion';

export const TodoList = ({ todos, setTodos, ...props }) => (
  <>
    <Reorder.Group
      className="todo-list"
      axis="y"
      values={todos}
      onReorder={setTodos}
      style={{ listStyle: 'none', padding: 0 }}
    >
      {todos.map((element, index) => (
        <Reorder.Item key={element.id} value={element}>
          <TodoListItem index={index} {...element} {...props} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  </>
);

export default TodoList;
