import './App.css';
import ToDoInput from './components/ToDoInpot/ToDoInput';
import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {
  const Todos = [
    {text: 'go to gem.', id:'g1'},
    {text: 'buy a milk.', id:'g2'}
  ];

  return (
    <div>
      <section className='todo-input-section'>
        <ToDoInput />
      </section>
      <section className="todo-list-section">
        <ToDoList items={Todos} />
      </section>
    </div>
  );
}

export default App;