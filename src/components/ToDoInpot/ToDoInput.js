import './ToDoInput.css';

const ToDoInput = () => {
  return (
    <form>
      <div className="todo-input">
        <label>To Do</label>
        <input type="text" />
      </div>
      <button type='submit' className="todo-input-btn">Add Todo</button>
    </form>
  );
}
 
export default ToDoInput;