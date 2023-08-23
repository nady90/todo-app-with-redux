import "./Home.scss";
// Importing components
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const Home = () => {
  return (
    <div className="home-container">
      <h1>What to do?</h1>
      <TodoContainer />
    </div>
  );
};

export default Home;
