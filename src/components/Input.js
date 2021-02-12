import React from "react";

const Input = ({message, setMessage, sendMessage}) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={event => sendMessage(event)} >b</button>
  </form>
);

export default Input;
