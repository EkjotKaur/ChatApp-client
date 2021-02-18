import React from 'react';

import ReactEmoji from 'react-emoji';

import './Message.css';

const Message = ({message: {user, text}, name}) => {
  let isSentByCurrentuser = false;
  const trimmedName = name;

  if(user === trimmedName) {
    isSentByCurrentuser = true;
  }

  return(
      isSentByCurrentuser ? (
        <div className="message myMessage">
          <div className="innerMessageContainer myMessageInner">
            <p className="name">{trimmedName}</p>
            <p className="para paraMy">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div className="message">
          <div className="innerMessageContainer otherMessageInner">
            <p className="name">{user}</p>
            <p className="para paraOther">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
  )
}

export default Message;

