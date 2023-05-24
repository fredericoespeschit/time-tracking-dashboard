import React, { useContext } from "react";
import '../App.css';
import { AppContext } from "./AppContext";
import Standings from "./Standings";
import Leagues from "./Leagues";

const Main = () => {
  const {active} = useContext(AppContext);
  return (
    <div className="info">
      { active ? <Leagues /> : <Standings />}
    </div>
  )
}

export default Main;