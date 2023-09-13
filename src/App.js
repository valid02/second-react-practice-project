import './App.css';
import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {
  const Todos = [
    {text: 'go to gem.', id:'g1'},
    {text: 'buy a milk.', id:'g2'}
  ];

  return (
    <div>
      <section className="todo-list-section">
        <ToDoList items={Todos} />
      </section>
    </div>
  );
}

export default App;