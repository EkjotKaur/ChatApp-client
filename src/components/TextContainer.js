import React from "react";

const TextContainer = ({users }) => (
  <div>
    {users ? (users.map(({name}) => (
      <div>{name}</div>
    ))) : (null)}
  </div>
);

export default TextContainer;
