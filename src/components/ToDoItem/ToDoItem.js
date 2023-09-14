import './ToDoItem.css';

const ToDoItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return <li className="todo-item" onClick={deleteHandler} >{props.text}</li>;
}
 
export default ToDoItem;