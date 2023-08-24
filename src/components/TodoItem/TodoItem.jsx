import "./TodoItem.scss";
// Importing libraries
import { useDispatch } from "react-redux";
import {
  removeTodoItem,
  markItemAsCompleted,
  markItemAsNotCompleted,
} from "../../store/todoSlice/todoSlice";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleCancelClick = (e) => {
    dispatch(removeTodoItem(item.id));
  };

  const handleCompletedClick = (e) => {
    dispatch(markItemAsCompleted(item.id));
  };

  const handleNotCompletedClick = () => {
    dispatch(markItemAsNotCompleted(item.id));
  };

  return (
    <div className="todo-item">
      {item.completed ? (
        <svg
          onClick={handleNotCompletedClick}
          className="completed-icon"
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="33.5" cy="33.5" r="33" fill="#3CE239" stroke="black" />
        </svg>
      ) : (
        <svg
          onClick={handleCompletedClick}
          title="Not Completed"
          className="not-completed-icon"
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="33.5" cy="33.5" r="33" fill="#9F9F9F" stroke="black" />
        </svg>
      )}
      <span>{item.title}</span>
      <svg
        onClick={handleCancelClick}
        className="cancel-icon"
        width="85"
        height="85"
        viewBox="0 0 85 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M42.5 0C18.9975 0 0 18.9975 0 42.5C0 66.0025 18.9975 85 42.5 85C66.0025 85 85 66.0025 85 42.5C85 18.9975 66.0025 0 42.5 0ZM63.75 57.7575L57.7575 63.75L42.5 48.4925L27.2425 63.75L21.25 57.7575L36.5075 42.5L21.25 27.2425L27.2425 21.25L42.5 36.5075L57.7575 21.25L63.75 27.2425L48.4925 42.5L63.75 57.7575Z" />
      </svg>
    </div>
  );
};

export default TodoItem;
