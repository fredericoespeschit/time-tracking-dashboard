import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const Leagues = () => {
  const [data, setData] = useState([]);
  return (
    <div className="info">
    <div class="header">
      <nav>
        <ul>
          <div>
            <li><img src="./image/icons/caret-circle-down-1.svg" alt="" /></li>
          </div>
          <div class="header-ul-li-search-notification">
            <li><input type="search" name="" id="search" placeholder="time" /></li>
            <li><input type="search" name="" id="search" placeholder="year" /></li>
          </div>
        </ul>
      </nav>
    </div>
    <div class="section-add-new-question">
      <ul>
        <div>
          <li>Leagues List</li>
        </div>
      </ul>
    </div>
    <div class="dividing-line"></div>
    <div class="main">
    </div>
  </div>
  )
}

export default Leagues;