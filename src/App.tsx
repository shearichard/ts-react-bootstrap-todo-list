import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import 'bootstrap/dist/css/bootstrap.css';


const initialTodos: Todo[] = [
  {
    text: 'Weed the garden',
    complete: false,
  },
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: false,
  },
];


function App() {
 const [todos, setTodos] = useState(initialTodos);

 const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

 const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  /*let customStyle = {
      'width': '18rem',
    };*/
 return( 
    <>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Todos using TS/React and Bootstrap</h5>
                </div>
                <div className="card-body">
                    <TodoList todos={todos} toggleTodo={toggleTodo} />
                </div>
                <div className="card-footer">
                    <AddTodoForm addTodo={addTodo} />
                </div>
              </div>
        </div>
    </>
    );


}

export default App;
