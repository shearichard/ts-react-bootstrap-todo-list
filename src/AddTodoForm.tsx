import { useState } from 'react';

interface Props {
    addTodo: AddTodo;
}

/*
 1. Maintain internal `text` state using `useState`. This will allow us to maintain the state of the new todo item’s text.
 2. Bind `text` to the `input` value.
 3. Set text using `setText` in the input’s `onChange` handler. `e.target.value` contains the current value.
 4. Add an `onClick` handler to the submit button to submit the typed text.
 5. Make sure to cancel the default event of actually submitting the form.
 6. Add the todo using `addTodo` and passing it `text`.
 7. Clearing our form by setting `text` to an empty string.
*/

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {

  const [text, setText] = useState('');

  return (
    <form className="form-inline">
      <div className="form-group  mx-sm-3 mb-2">
        <input 
          type="text" 
          className="form-control"
          value={text}
          onChange={e => {
              setText(e.target.value);
          }}
        />
      </div>
      <button 
        type="submit"
        className="btn btn-outline-primary mb-2"
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
