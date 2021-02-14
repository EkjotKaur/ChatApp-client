import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
        <div className="joinInnerInnerContainer">
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <button className="button" type="submit">
            <Link
              className="button-link"
              onClick={(event) =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/chat?name=${name}&room=${room}`}
            >
              Join Room
            </Link>
          </button>
        </div>
  );
};

export default Join;
