import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Jessica.css";

function Jessica() {
  const [status, setStatus] = useState("");
  const [statusUpdates, setStatusUpdates] = useState([]);
  const [name, setName] = useState("Mgbemena Victor");
  const [bio, setBio] = useState("Full Stack || Mobile App Developer");
  const [profileImages, setProfileImages] = useState([
    "https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Male-Poses-Casual.jpg",
  ]);
  const [selectedProfileImage, setSelectedProfileImage] = useState(
    profileImages[0]
  );
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [backendError, setBackendError] = useState(null);
  const [notification, setNotification] = useState("");

  const handleCloseMessages = () => {
    setShowMessages(false);
  };

  const handleCloseNotification = () => {
    setShowNotifications(false);
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      axios
        .get("http://localhost:4000/messages", { 
         content: newMessage },
       )
        .then((response) => {
          setNewMessage("");

          // Display a notification that the message is sending
          setNotification("Sending message...",response);

          const message = {
            content: newMessage,
            sender: "You",
            timestamp: new Date().toISOString(),
          };

          setMessages([...messages, message]);
        })
        .catch((error) => {
          console.log("Error sending message:", error);
          setBackendError("Error sending message. Please try again.");
        });
    }
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePostStatus = () => {
    if (status.trim() !== "") {
      setStatusUpdates([status, ...statusUpdates]);
      setStatus(""); // Clear the input field
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleEnvelopeClick = () => {
    setShowMessages(!showMessages);
  };

  const handleProfileImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);

    if (selectedImages.length > 0) {
      const imageUrls = selectedImages.map((image) =>
        URL.createObjectURL(image)
      );
      setProfileImages(imageUrls);
      setSelectedProfileImage(imageUrls[0]);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/messages")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching messages:", error);
        setBackendError("Error fetching messages. Please try again.");
      });
  }, []);

  return (
    <section>
      <div className="jessica-container">
        <div className="jesica-image">
          <label htmlFor="profile-image" className="upload-button">
            Change pictures
          </label>
          <input
            type="file"
            id="profile-image"
            className="file-input"
            accept="image/*"
            onChange={handleProfileImageChange}
            multiple
          />
          <span className="file-name">{selectedProfileImage.name}</span>
          <img
            src={selectedProfileImage}
            alt="victor"
            className="profile-image"
          />
        </div>

        <div className="jesica-text">
          <h2>
            <input type="text" value={name} onChange={handleNameChange} />
          </h2>
          <p>
            <textarea value={bio} onChange={handleBioChange} />
          </p>
        </div>

        <div className="jessica-font">
          <FontAwesomeIcon icon={faBell} onClick={handleBellClick} />
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ marginLeft: "10px" }}
            onClick={handleEnvelopeClick}
          />
        </div>
      </div>

      {showNotifications && (
        <div className="notifications-dropdown">
          <h3>Notifications</h3>
          <button onClick={handleCloseNotification} className="close-note">
            X
          </button>
          <ul>
            <li>New message from your contact</li>
            <li>You have 3 new friend requests</li>
            <li>Appointment reminder: Tomorrow at 2 PM</li>
            {/* Add more notification items as needed */}
          </ul>
        </div>
      )}

      {showMessages && (
        <div className="messaging-modal">
          <div className="modal-header">
            <h3>Messages</h3>
            <button onClick={handleCloseMessages}>X</button>
          </div>
          <div className="message-list">{/* Render your messages here */}</div>
          <div className="message-input">
            <textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={handleNewMessageChange}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}

      {backendError && <div className="error-message">{backendError}</div>}

      {/* Notification */}
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}

      <Project />
    </section>
  );
}

export default Jessica;
