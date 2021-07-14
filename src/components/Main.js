import React from "react";
import "../styles/main.css";
import Options from "./Options.js";
const Main = () => {
  const handleClick = () => {};

  return (
    <div className="main-container">
      <div className="heading-container">
        <div>
          <button
            id="adheading"
            onClick={handleClick}
            style={{ height: "20px", width: "20px" }}
          >
            <img
              src="./resource/admin_icon.png"
              alt="Icon"
              height="20px"
              width="20px"
            ></img>
          </button>
        </div>
        <div>
          <h1 id="adheading">Admin Dashboard</h1>
        </div>
        <div className="preview-container">
          <div className="preview-inner-container">
            <div>Preview on : </div>
            <div
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                borderRadius: "10px",
              }}
            >
              <i className="fas fa-desktop"></i>
            </div>
            <div style={{ marginLeft: "5px" }}>
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-main-contaier">
        <div className="inner-main-container">
          <div className="main-left-container">
            <div>
              <div
                style={{
                  paddingTop: "10px",
                  marginLeft: "20px",
                  marginBottom: "20px",
                }}
              >
                <h5 id="eset">Event Settings</h5>
              </div>
              <div style={{ borderBottom: "1px solid lightgray" }}></div>
            </div>
            <div
              style={{
                marginTop: "10px",
                marginLeft: "20px",
              }}
            >
              <h5 id="oset">General</h5>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <h5 id="oset">Privacy</h5>
            </div>
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "#f4ebfc",
                borderLeft: "5px solid #b749eb",
              }}
            >
              <h5 id="oset" style={{ paddingLeft: "20px" }}>
                Features
              </h5>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <h5 id="oset">Customization</h5>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <h5 id="oset">Integration</h5>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <h5 id="oset">Session Settings</h5>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <h5 id="oset">My Plans</h5>
            </div>
          </div>
          <div className="main-right-container">
            <div className="main-right-inner-container">
            <div className="main-cross-contanier">
              <div style={{marginLeft : "auto"}}>
                <img src="./resource/cross.png" alt="Exit" height="30px" width="30px"></img>
              </div>
            </div>
              <div className="main-heading-container">
                <div>
                  <img
                    src="./resource/qa_icon.png"
                    alt="Icon"
                    height="20px"
                    width="20px"
                  ></img>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <h2 id="mainheading">Audience Q&A</h2>
                </div>
                <div className="heading-toggle-container">
                  <input type="checkbox" id="customCheckbox" />
                  <label htmlFor="customCheckbox" id="headtoggle"></label>
                </div>
                <div>
                  <button id="arrow">
                    <i className="fa fas fa-chevron-up fa-2x"></i>
                  </button>
                </div>
              </div>
              <div style={{ border: "1px solid lightgray", marginRight: "200px" }}> </div>
            </div>
            <div className="center-container">
              <div className="moderation-cntr">
                <Options
                  heading="Moderation"
                  text="Easily review all questions before they go live"
                  labelId="l1"
                />
                <Options
                  heading="Labels"
                  text="Categorize and filter questions"
                  labelId="l2"
                />
                <Options
                  heading="Downvotes"
                  text="Enable downvoting of questions"
                  labelId="l3"
                />
                <Options
                  heading="Replies"
                  text="Allow participants to reply to or comment on questions"
                  labelId="l4"
                />
                <Options
                  heading="Annonymous Questions"
                  text="Let your participants send annonymous questions"
                  labelId="l5"
                />
                <Options
                  heading="Maximum Question Length"
                  text="Show number of votes instead of percentage"
                  labelId="l6"
                />
                <div className="btn-container">
                  <div
                    style={{
                      marginRight: "15px",
                    }}
                  >
                    <button id="wrdcnt">160</button>
                  </div>
                  <div
                    style={{
                      marginRight: "15px",
                    }}
                  >
                    <button id="wrdcnt">240</button>
                  </div>
                  <div>
                    <button
                      id="wrdcnt"
                      style={{ backgroundColor: "#9445bf", color: "white" }}
                    >
                      300
                    </button>
                  </div>
                </div>
                <Options
                  heading="Close Questions"
                  text="Prevent the participants from sending new questions to your event."
                  labelId="l7"
                />
                <div className="btn-submit-container">
                  <div>
                    <button id="btn-submit-container">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;