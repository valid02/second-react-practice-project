import './ToDoList.css'
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = (props) => {
  return ( 
    <ul className="todo-list">
      {props.items.map(todo => (
        <ToDoItem 
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
   );
}
 
export default ToDoList;