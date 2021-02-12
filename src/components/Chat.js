import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";
import TextContainer from "./TextContainer";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState('');
  const ENDPOINT = "http://localhost:5000/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // console.log(location);
    socket = io(ENDPOINT);
    console.log(socket);

    setRoom(room);
    setName(name);
    // console.log(room, name);

    socket.emit("join", { name, room }, () => {});
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    return () => {
      socket.off()
    }
    
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", ({users}) => {
      setUsers(users);
    });
  },[users])


  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
