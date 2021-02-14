import React from 'react';

import './InfoBar.css'

const InfoBar = ({room, onClick}) => (
    <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <div onClick={onClick}>
        <i className="fas fa-info"></i>
      </div>
      <div>
        <a href="/">Leave</a>
      </div>      
    </div>
  </div>

  
)

export default InfoBar;