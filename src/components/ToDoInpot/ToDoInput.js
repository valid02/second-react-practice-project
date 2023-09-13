import { useState } from 'react';
import './ToDoInput.css';

const ToDoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const todoInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="todo-input">
        <label>To Do</label>
        <input type="text" onChange={todoInputChangeHandler} />
      </div>
      <button type='submit' className="todo-input-btn">Add Todo</button>
    </form>
  );
}
 
export default ToDoInput;