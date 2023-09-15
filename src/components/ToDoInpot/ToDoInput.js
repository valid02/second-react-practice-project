import { useState } from 'react';
import styles from './ToDoInput.module.css';

const ToDoInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddTodo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['todo-input']} ${!isValid ? styles.invalid : ''}`}>
        <label>To Do</label>
        <input
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler} 
        />
      </div>
      <button type='submit' className={ styles['todo-input-btn'] }>Add Todo</button>
    </form>
  );
}
 
export default ToDoInput;