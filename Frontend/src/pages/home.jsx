/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/home.css";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Virtual Connect Hub</h2>
        </div>

        <div
          style={{ display: "flex", alignItems: "center" }}
          className="navActions"
        >
          <div className="historyBtn" onClick={() => navigate("/history")}>
            <RestoreIcon />
            <span>History</span>
          </div>

          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
            className="logoutBtn"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>

            <div style={{ display: "flex", gap: "10px" }} className="joinRow">
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
              />
              <Button
                onClick={handleJoinVideoCall}
                variant="contained"
                className="joinBtn"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <img srcSet="/logo35.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
