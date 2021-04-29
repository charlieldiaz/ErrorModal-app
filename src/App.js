import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import NewUser from "./Components/Users/NewUser";
import UserDisplay from "./Components/Users/UserDisplay";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserDataHandler = (userData) => {
    console.log(userData);
    setUserData((prev) => {
      return [userData];
    });
  };
  return (
    <div>
      <NewUser onSaveUserData={addUserDataHandler} />
      <UserDisplay onDisplayUserData={userData} />
    </div>
  );
}

export default App;
