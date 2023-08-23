import "./Home.scss";
// Importing libraries
import { useSelector } from "react-redux";
// Importing components
import TodoContainer from "../../components/TodoContainer/TodoContainer";
import Theme from "../../components/Theme/Theme";

const Home = () => {
  const numberOfTasks = useSelector((state) => state.todo.todoList.length);
  const completedTasks = useSelector(
    (state) =>
      state.todo.todoList.filter((item) => item.completed === true).length
  );

  return (
    <div className="home-container">
      <h1>What to do?</h1>
      <TodoContainer />
      <div className="tasks-number">Number of tasks: {numberOfTasks}</div>
      <div className="completed-number">completed tasks: {completedTasks}</div>
      <Theme />
    </div>
  );
};

export default Home;
