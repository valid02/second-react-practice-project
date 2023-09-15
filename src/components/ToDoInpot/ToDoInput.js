import { useState } from 'react';
import './ToDoInput.css';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${props => (props.$invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    border: 1px solid ${props => (props.$invalid ? 'red' : '#afafaf')};
    background: ${props => (props.$invalid ? '#ffd7d7' : 'transparent')};
    width: 100%;
    padding: 0 0.25rem;
    font: inherit;
    line-height: 1.5rem;
  }

  & input:focus {
    outline: none;
  }
`;

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
      <FormControl $invalid={!isValid} >
        <label>To Do</label>
        <input
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler} 
        />
      </FormControl>
      <button type='submit' className="todo-input-btn">Add Todo</button>
    </form>
  );
}
 
export default ToDoInput;