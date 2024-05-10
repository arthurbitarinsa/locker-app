import React from 'react';
import './Lobby.css'; // Import CSS file for styling

const Lobby = () => {
  return (
    <div className="lobby-container">
      <h1>Welcome to the Lobby</h1>
      <div className="user-list">
        <h2>User List</h2>
        {/* Display list of users */}
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          {/* Add more users here */}
        </ul>
      </div>
      <div className="chat-room">
        <h2>Chat Room</h2>
        {/* Chat messages */}
        <div className="chat-messages">
          {/* Display chat messages */}
          <div className="message">User 1: Hello</div>
          <div className="message">User 2: Hi there!</div>
          {/* Add more messages here */}
        </div>
        {/* Chat input */}
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Lobby;
