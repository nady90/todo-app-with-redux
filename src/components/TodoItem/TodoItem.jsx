import "./TodoItem.scss";
// Importing libraries
import { useDispatch } from "react-redux";
import { removeTodoItem } from "../../store/todoSlice/todoSlice";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleItemClick = (e) => {
    dispatch(removeTodoItem(item.id));
  };

  return (
    <div
      onClick={handleItemClick}
      className="todo-item"
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <span
        style={{
          marginRight: "2rem",
        }}
      >
        todo title:
      </span>
      <span>{item.title}</span>
      <span>{item.id}</span>
      <span>{item.completed ? "completed" : "not completed"}</span>
    </div>
  );
};

export default TodoItem;
