import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";
import TextContainer from "./TextContainer";

import "./Chat.css";
import ErrorModal from "./ErrorModal";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const ENDPOINT = "https://react-app-chit-chat.herokuapp.com/";
  // const ENDPOINT = "http://localhost:5000/";

  const [info, setInfo] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // console.log(location);
    socket = io(ENDPOINT);
    console.log(socket);

    setRoom(room);
    setName(name);
    // console.log(room, name);

    socket.emit("join", { name, room }, (err) => {
      setError(err);
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    }, (err) => {
      setError(err);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  // useEffect(() => {

  // },[])

  const infoHandler = () => {
    setInfo((prevI) => !prevI);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);
  console.log(users);

  const clearError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          heading="Some Error Occured"
          message={error}
          onClick={clearError}
        />
      )}
      {!error && (
        <div className="outerContainer">
          <div className="innerContainer">
            <InfoBar room={room} onClick={infoHandler} />
            {!info && (
              <div className="chatBox">
                <Messages messages={messages} name={name} />
                <Input
                  message={message}
                  setMessage={setMessage}
                  sendMessage={sendMessage}
                />
              </div>
            )}
            {info && (
              <div>
                <TextContainer users={users} />
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Chat;
