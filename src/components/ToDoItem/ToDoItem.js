import './ToDoItem.css';

const ToDoItem = (props) => {
  return <li className="todo-item">{props.text}</li>;
}
 
export default ToDoItem;