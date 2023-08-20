import "./Home.scss";
// Importing components
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const Home = () => {
  return (
    <div className="home-container">
      <TodoContainer />
    </div>
  );
};

export default Home;
