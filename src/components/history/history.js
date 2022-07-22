import React from "react";
import { useState } from "react";
import "./history.css";

function History({ showHistory, setShowHistory }) {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  return (
    <div className={`history__main-container ${showHistory ? "show" : ""}`}>
      <div className="history__header">
        <p
          onClick={() => {
            setHistory([]);
            localStorage.removeItem("history")
          }}
        >
          Clear history
        </p>
        <p onClick={() => setShowHistory(!showHistory)}>
          <i class="bx bx-x"></i>
        </p>
      </div>
      {history.length === 0 ? (
        <p className="history__para">No history!🥱</p>
      ) : (
        <>
          {history.map((data) => {
            return (
              <div className="history__data">
                <p>
                  {data.usersname.user1} vs {data.usersname.user2}
                </p>
                <p>
                  {data.score.user1Score} vs {data.score.user2Score}
                </p>
                <p>
                  {data.score.user1Score > data.score.user2Score
                    ? data.usersname.user1
                    : data.usersname.user2}{" "}
                  Won
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export { History };
