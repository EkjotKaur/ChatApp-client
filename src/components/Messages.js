import React from "react";
import SrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

import './Messages.css'

const Messages = ({ messages, name }) => (
  <SrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </SrollToBottom>
);

export default Messages;
