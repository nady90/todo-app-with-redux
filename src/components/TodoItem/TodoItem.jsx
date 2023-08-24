import "./TodoItem.scss";
// Importing libraries
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodoItem,
  markItemAsCompleted,
  markItemAsNotCompleted,
  editItemTitle,
} from "../../store/todoSlice/todoSlice";

const TodoItem = ({ item }) => {
  const editContainerRef = useRef();
  const [editFieldString, setEditFiledString] = useState("");

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

  const handleEditIconClick = () => {
    if (editContainerRef.current.style.display === "none") {
      editContainerRef.current.style.display = "flex";
    } else {
      editContainerRef.current.style.display = "none";
    }
  };

  const handleEditFieldChange = (e) => {
    setEditFiledString(e.target.value);
  };

  const handleEdit = () => {
    dispatch(editItemTitle({ id: item.id, title: editFieldString }));
    editContainerRef.current.style.display = "none";
  };

  const handleEditFieldKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
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
      <div className="itme-title-container">
        <span>{item.title}</span>
        <div className="edit-container" ref={editContainerRef}>
          <input
            onChange={handleEditFieldChange}
            onKeyDown={handleEditFieldKeyDown}
            type="text"
            className="edit-input"
            placeholder={item.title}
          />
          <div className="edit-icon-container" onClick={handleEdit}>
            <svg viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
              <path d="M62 38.75H38.75V62H23.25V38.75H0V23.25H23.25V0H38.75V23.25H62V38.75Z" />
            </svg>
          </div>
        </div>
      </div>
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

      <svg
        onClick={handleEditIconClick}
        className="edit-icon"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4382 2L12.6907 5.8317C11.446 6.28826 10.288 6.95132 9.26585 7.79274L5.5648 6.52365L2 12.6638L4.96322 15.2272C4.72889 16.5249 4.72889 17.8538 4.96322 19.1515L2 21.7141L5.56554 27.8513L9.26138 26.5845C10.2837 27.4268 11.4433 28.0891 12.6899 28.5426L13.4382 32.375H20.5626L21.2959 28.5818C22.5363 28.0894 23.6957 27.4152 24.7356 26.5815L28.4352 27.8513L31.997 21.7141L29.0368 19.1485C29.2741 17.8531 29.2741 16.5256 29.0368 15.2302L32 12.6616L28.4345 6.52439L24.7386 7.79125C23.7159 6.94947 22.5564 6.2873 21.3101 5.83318L20.5618 2.00148L13.4382 2ZM16.936 12.5246C18.1802 12.5465 19.3661 13.0537 20.2382 13.9371C21.1103 14.8204 21.599 16.0092 21.599 17.2475C21.599 18.4858 21.1103 19.6746 20.2382 20.5579C19.3661 21.4413 18.1802 21.9485 16.936 21.9705C16.3127 21.9705 15.6955 21.8485 15.1196 21.6112C14.5437 21.374 14.0204 21.0262 13.5796 20.5877C13.1388 20.1492 12.7891 19.6286 12.5504 19.0556C12.3118 18.4826 12.189 17.8685 12.1889 17.2483V17.2475C12.1889 16.6272 12.3117 16.013 12.5502 15.4399C12.7888 14.8669 13.1385 14.3462 13.5793 13.9076C14.0201 13.469 14.5434 13.1212 15.1194 12.8839C15.6953 12.6466 16.3126 12.5245 16.936 12.5246Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default TodoItem;
