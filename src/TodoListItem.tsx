import React from 'react';

interface Props {
  todo: Todo;    
  toggleTodo: ToggleTodo;
}
export const TodoListItem: React.FC<Props> = ({
    todo, 
    toggleTodo
  })=> {
  return (
    <li className="list-group-item">
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
};
