import React from "react";
import PropTypes from "prop-types";
import "../Styles/TaskCart.css";

function TaskCart({ tasks, onClose }) {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={handleCloseClick}>Close</button>
    </div>
  );
}

TaskCart.propTypes = {
  tasks: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskCart;
