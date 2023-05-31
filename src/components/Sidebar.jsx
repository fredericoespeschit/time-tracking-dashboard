import React, { useContext } from 'react';
import { AppContext } from './AppContext';

import '../App.css';

const Sidebar = () => {
  const {setActive} = useContext(AppContext);

  return (
        <div className="sidebar">
          <div className="logo">Api Football</div>
          <div className="navlinks">
            <nav>
              <ul>
                <li className="active"><img src="../image/icons/bookmark-1.svg" alt="" /><span>Home</span></li>
                <li><img src="./image/icons/bookmark-1.svg" alt="" /><span onClick={()=>setActive(false)}>Standings</span></li>
                <li><img src="./image/icons/graduation-cap-1.svg" alt="" /><span onClick={()=>setActive(true)}>Leagues</span></li>
              </ul>
            </nav>
            <div>
              <a href="http://">Logout</a>
            </div>
          </div>
        </div>
  )
}

export default Sidebar;