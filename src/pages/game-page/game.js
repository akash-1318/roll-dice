import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./game.css";
import {Winner} from "../../components/index"

function Game() {
  const navigate = useNavigate();
  const [score, setScore] = useState({
    user1Score: 0,
    user2Score: 0,
  });
  const [activeUser, setActiveUser] = useState({
    activeUser1: true,
    activeUser2: false,
  });
  const [diceNumber, setDiceNumber] = useState(1);
  const [rollFlag, setRollFlag] = useState(false);

  let diceNumbers = [1, 2, 3, 4, 5, 6];
  let usersname = JSON.parse(localStorage.getItem("users"));
  let { user1, user2 } = usersname;
  let { user1Score, user2Score } = score;
  let { activeUser1, activeUser2 } = activeUser;

  function handleDiceRoll() {
    let randomNumber =
      diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
    setRollFlag(true);
    setTimeout(() => {
      setActiveUser({
        ...activeUser,
        activeUser1: !activeUser.activeUser1,
        activeUser2: !activeUser.activeUser2,
      });
      if (activeUser1 === true) {
        setScore({ ...score, user1Score: score.user1Score + randomNumber });
      } else {
        setScore({ ...score, user2Score: score.user2Score + randomNumber });
      }
      setDiceNumber(randomNumber);
      setRollFlag(false);
    }, 1500);
  }

  return (
    <div className="primary__container">
      <div className="game__container">
        <div className="left__user">
          <p className="user__name">{user1}</p>
          <p className="user__score">{user1Score}</p>
        </div>
        <div className="right__user">
          <p className="user__name">{user2}</p>
          <p className="user__score">{user2Score}</p>
        </div>
        <div className="middle__container">
          <p className="reset__game" onClick={() => {
              navigate("/")
              localStorage.removeItem("users")
          }}>
            {" "}
            <i class="bx bx-reset"></i> New game
          </p>
          <span
            className={`active__arrow ${
              activeUser2 ? "turn__right" : "turn__left"
            }`}
          >
            <i class="bx bx-arrow-back"></i>
          </span>
          <span className={`dice ${rollFlag ? "roll__dice-user1" : ""}`}>
            <i class={`bx bx-dice-${diceNumber}`}></i>
          </span>
          <div className="middle__container-bottom">
            <p className="roll__dice" onClick={() => handleDiceRoll()}>
              {" "}
              <i class="bx bx-rotate-left"></i> Roll
            </p>
          </div>
        </div>
      </div>
      {user1Score >= 15 || user2Score >= 15 ? (<Winner
      users = {usersname}
      scores = {score}
      />) : null}
    </div>
  );
}

export { Game };
