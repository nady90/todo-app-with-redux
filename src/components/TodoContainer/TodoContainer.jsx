import { useEffect, useRef } from "react";
import "./TodoContainer.scss";
// Importing libraries
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoItem, clearTodoList } from "../../store/todoSlice/todoSlice";
// Importing components
import TodoItem from "../TodoItem/TodoItem";
import TodoEmptyPlaceholder from "../TodoEmptyPlaceholder/TodoEmptyPlaceholder";

const TodoContainer = () => {
  const [itemTitle, setItemTitle] = useState("");
  const inputRef = useRef(null);

  // Redux:
  const state = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setItemTitle(e.target.value);
  };

  const handleInputEnterDown = (e) => {
    if (e.key === "Enter") {
      event.preventDefault();
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    if (itemTitle === "") return;
    dispatch(addTodoItem(itemTitle));
    setItemTitle("");
  };

  return (
    <>
      <div className="todo-container">
        <div className="add-new-container">
          <input
            ref={inputRef}
            autoFocus
            type="text"
            id="add-todo"
            value={itemTitle}
            onChange={handleInputChange}
            onKeyDown={handleInputEnterDown}
            placeholder="Add a new item"
          />

          <button
            className="add-btn"
            onClick={() => {
              handleAddItem();
            }}
          >
            <svg viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
              <path d="M62 38.75H38.75V62H23.25V38.75H0V23.25H23.25V0H38.75V23.25H62V38.75Z" />
            </svg>
          </button>
        </div>

        <div className="items-container">
          {state.length > 0 ? (
            state.map((item) => {
              return <TodoItem key={item.id} item={item} />;
            })
          ) : (
            <TodoEmptyPlaceholder inputRef={inputRef} />
          )}
        </div>
      </div>
      <div
        className="clear-all-container"
        onClick={() => {
          dispatch(clearTodoList());
        }}
      >
        <div className="del">
          <svg
            viewBox="0 0 167 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.672 7.198H66.7734V74.8762H100.672M66.7734 41.0371H87.9601M126.096 7.198V74.8762H159.995M7.4505 7.198V74.8762H24.3999C28.8952 74.8762 33.2063 73.0936 36.3849 69.9206C39.5636 66.7476 41.3493 62.444 41.3493 57.9567V24.1176C41.3493 19.6302 39.5636 15.3267 36.3849 12.1536C33.2063 8.98059 28.8952 7.198 24.3999 7.198H7.4505Z"
              stroke="black"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="clear-all-text">CLEAR ALL</div>
      </div>
    </>
  );
};

export default TodoContainer;
