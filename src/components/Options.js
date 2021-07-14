import React from "react";
import '../styles/options.css'
const Options = (props) => {
  return (
    <div className="options-cntr">
      <div clssName="moderation-cntr-left">
        <div>
          <h5
            style={{
              margin: "0px",
              padding: "0px",
              fontSize: "16px",
              marginBottom: "3px",
            }}
          >
            {props.heading}
          </h5>
        </div>
        <div>
          <p
            style={{
              margin: "0px",
              padding: "0px",
              fontSize: "14px",
              color: "gray",
              fontWeight: "500",
            }}
          >
            {props.text}
          </p>
        </div>
      </div>
      <div className="moderation-cntr-right">
        <input type="checkbox" id={`${props.labelId}`} />
        <label htmlFor={`${props.labelId}`} id={`label${props.labelId}`}></label>
      </div>
    </div>
  );
};


export default Options