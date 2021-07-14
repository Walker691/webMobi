import React from "react";
import "../styles/leftbar.css";
const Leftbar = () => {
  return (
    <div className="leftbar-container">
      <div>
        <img src="./resource/webmobi.png" alt="Logo" height="60px" width="55px" style={{borderRadius : "5px"}}></img>
      </div>
      <div className="event-container">
        <div>
          <i className=" fa far fa-calendar-alt fa-2x"></i>
        </div>
        <div style={{fontSize : "15px"}}>Events</div>
      </div>
      <div className="team-container">
        <div>
          <i className=" fa fas fa-users fa-2x"></i>
        </div>
        <div style={{fontSize : "15px"}}>Teams</div>
      </div>
      <div className="analytics-container">
        <div>
        <i className="fa fas fa-chart-line fa-2x"></i>
        </div>
        <div style={{fontSize : "15px" ,paddingRight: "5px"}}>Analytics</div>
      </div>
      <div className="results-container">
        <div><i className="fa fas fa-envelope-open-text fa-2x"></i></div>
        <div style={{fontSize : "15px"}}>Results</div>
      </div>
    </div>
  );
};

export default Leftbar;
