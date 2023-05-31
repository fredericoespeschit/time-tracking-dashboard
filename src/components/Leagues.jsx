import React from 'react';
import '../App.css';

// import axios from 'axios';

const Leagues = () => {
  
  return (
    <div className="info">
      <div className="header">
        <nav>
          <ul>
            <div>
              <li><img src="./image/icons/caret-circle-down-1.svg" alt="" /></li>
            </div>
            <div className="header-ul-li-search-notification">
              <li><input type="search" name="" id="search" placeholder="time" /></li>
              <li><input type="search" name="" id="search" placeholder="year" /></li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="section-add-new-question">
        <ul>
          <div>
            <li>Leagues List</li>
          </div>
        </ul>
      </div>
      <div className="dividing-line"></div>
      <div className="main">
       
      </div>
    </div>
  )
}

export default Leagues;

