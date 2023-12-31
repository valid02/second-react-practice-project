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

  const deleteItemHandler = todoId => {
    setTodo(prevTodo => {
      const updatedTodo = prevTodo.filter(todo => todo.id !== todoId);
      return updatedTodo;
    });
  }

  let content = (
    <p style={{ textAlign: 'center' }} >No goals found.</p>
  );

  if (todo.length > 0) {
    content = (
      <ToDoList items={todo} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section className='todo-input-section'>
        <ToDoInput onAddTodo={addTodoHandler} />
      </section>
      <section className="todo-list-section">
        {content}
      </section>
    </div>
  );
}

export default App;