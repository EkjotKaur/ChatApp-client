import React from "react";
import SrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const Messages = ({ messages, name }) => (
  <SrollToBottom>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </SrollToBottom>
);

export default Messages;
