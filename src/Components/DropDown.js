import React, { useState } from "react";
import "../Styles/DropDown.css";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "Github",
    "Instagram",
    "Facebook",
    "Whatsapp",
    "Badoo",
    "Tinder",
    "TikTok",
  ];

  return (
    <main>
      <section>
        <div className={`dropdown-container ${isOpen ? "active" : ""}`}>
          <div className="dropdown-header" onClick={toggleDropdown}>
            <span className="header-text">{selectedOption || "Choose"}</span>
            <span className="chevron">&#x25BE;</span>
          </div>

          <ul className="dropdown-list">
            {options.map((option, index) => (
              <li
                className="list-item"
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                <span className="item-name">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default DropDown;
