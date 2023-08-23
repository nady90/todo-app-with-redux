import "./TodoContainer.scss";
// Importing libraries
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoItem, clearTodoList } from "../../store/todoSlice/todoSlice";
// Importing components
import TodoItem from "../TodoItem/TodoItem";

const TodoContainer = () => {
  const [itemTitle, setItemTitle] = useState("");

  // Redux:
  const state = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setItemTitle(e.target.value);
  };

  const handleAddItem = () => {
    dispatch(addTodoItem(itemTitle));
  };

  return (
    <div className="todo-container">
      <label htmlFor="add-todo"></label>
      <input
        type="text"
        id="add-todo"
        value={itemTitle}
        onChange={handleInputChange}
      />

      <button
        onClick={() => {
          handleAddItem();
        }}
      >
        add item
      </button>

      <button
        onClick={() => {
          dispatch(clearTodoList());
        }}
      >
        clear list
      </button>

      <div
        className="items-container"
        style={{
          margin: "3rem 2rem",
          border: "4px solid #ccc",
        }}
      >
        {state.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
