import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
  let isSentByCurrentuser = false;
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentuser = true;
  }

  return(
      isSentByCurrentuser ? (
        <div>
          <div>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>{trimmedName}</p>
          <div>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
          <p>{user}</p>
        </div>
      )
  )
}

export default Message;

