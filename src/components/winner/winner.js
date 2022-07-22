import React from "react";
import "./winner.css";
import { useNavigate } from "react-router-dom";

function Winner({ users, scores }) {
  const navigate = useNavigate();
  let { user1, user2 } = users;
  let { user1Score, user2Score } = scores;
  return (
    <div className="winner__main-container center">
      <div className="winner__sub-container center">
        <p className="winner">
          {user1Score > user2Score ? user1 : user2} is Winner!
        </p>
        <p className="icons">🥳🎉✨🎊🪅</p>
        <p className="winner">⚡️Total Score⚡️</p>
        <p className="score">
          {user1Score > user2Score ? user1Score : user2Score}
        </p>
        <hr/>
        <p
          className="reset__game"
          onClick={() => {
            navigate("/");
            localStorage.removeItem("users");
          }}
        >
          {" "}
          <i class="bx bx-reset"></i> New game
        </p>
      </div>
    </div>
  );
}

export { Winner };
