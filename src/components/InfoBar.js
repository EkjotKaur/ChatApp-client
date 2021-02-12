import React from 'react';

import closeIcon from '../icon/closeIcon.png';
import onlineIcon from '../icon/onlineIcon.png';

import './InfoBar.css'

const InfoBar = ({room}) => (
    <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online img" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close img" /> </a>
    </div>
  </div>

  
)

export default InfoBar;