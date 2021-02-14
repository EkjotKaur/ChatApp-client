import React from "react";

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="users">
    <h3 className="head">USERS</h3>
    {users ? users.map(({ name }, i) => <div className="user"  key={i}><i class="fas fa-user"></i>{name}</div>) : null}
  </div>
);

export default TextContainer;
