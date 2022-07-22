import React, { useState } from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    user1: "",
    user2: "",
  });

  const addUserData = () => {
      if(users.user1 && users.user2 !== ""){
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/game")
      } else{
          alert("Input fields can not be empty")
      }
  };

  return (
    <div className="main__conatiner">
      <div className="input__container">
        <h1 className="primary__text">Welcome to Dice game</h1>
        <input
          type="text"
          placeholder="user one"
          className="input__field"
          onChange={(e) => setUsers({ ...users, user1: e.target.value })}
        />
        <input
          type="text"
          placeholder="user two"
          className="input__field"
          onChange={(e) => setUsers({ ...users, user2: e.target.value })}
        />
          <button className="primary__btn" onClick={() => addUserData()}>
            Add users
          </button>
      </div>
    </div>
  );
}

export { Welcome };
