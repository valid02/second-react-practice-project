import { useState } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInpot/ToDoInput';
import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {
  const [todo, setTodo] = useState([
    {text: 'go to gem.', id:'g1'},
    {text: 'buy a milk.', id:'g2'}
  ]);

  const addTodoHandler = enteretText => {
    setTodo(prevTodo => {
      const updatedTodo = [ {text: enteretText, id: Math.random().toString() }, ...prevTodo ];
      return updatedTodo
    });
  }

  return (
    <div>
      <section className='todo-input-section'>
        <ToDoInput onAddTodo={addTodoHandler} />
      </section>
      <section className="todo-list-section">
        <ToDoList items={todo} />
      </section>
    </div>
  );
}

export default App;