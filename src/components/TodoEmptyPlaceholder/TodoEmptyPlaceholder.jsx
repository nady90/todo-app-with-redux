import "./TodoEmptyPlaceholder.scss";

const TodoEmptyPlaceholder = ({ inputRef }) => {
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="empty-placeholder-container">
      <div className="inner-container" onClick={handleClick}>
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M62 38.75H38.75V62H23.25V38.75H0V23.25H23.25V0H38.75V23.25H62V38.75Z"
            fill="white"
          />
        </svg>
        <p>Add Items</p>
      </div>
    </div>
  );
};

export default TodoEmptyPlaceholder;
