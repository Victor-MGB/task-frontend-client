import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Styles/AddTask.css";
import TaskCart from "./TaskCart";

function AddTask() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <section>
      <div className="AddTask-container">
        <div className="month">
          <h3>Task Management</h3>
          <h1>Today</h1>
        </div>

        <div className="add-sign">
          <button onClick={toggleDropdown}>
            + <span>Add tasks</span>
          </button>
          {isDropdownOpen && (
            <div className="task-input">
              <input
                type="text"
                placeholder="Add a task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
              />
              <button onClick={addTask}>Add</button>
            </div>
          )}
        </div>

        <div className="cart-icon" onClick={toggleCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="task-count">{tasks.length}</span>
        </div>

        {isCartOpen && <TaskCart tasks={tasks} onClose={toggleCart} />}
      </div>
    </section>
  );
}

export default AddTask;
