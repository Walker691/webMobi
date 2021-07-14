import React from "react";
import "../styles/rightbar.css";
const Rightbar = () => {
  return (
    <div className="rightbar-container">
      <div>
        <button
          style={{
            border: "none",
            background: "none",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <img
            src="./resource/user_profile.png"
            alt=" "
            height="30px"
            width="30px"
          ></img>
        </button>
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "none",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <img
            src="./resource/notifi.png"
            alt="Notifications"
            height="30px"
            width="30px"
          ></img>
        </button>
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "none",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <img
            src="./resource/msg.png"
            alt="Messages"
            height="30px"
            width="30px"
          ></img>
        </button>
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "none",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <img
            src="./resource/settings.png"
            alt="Settings"
            height="30px"
            width="30px"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
