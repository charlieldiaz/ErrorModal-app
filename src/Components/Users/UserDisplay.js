import React from "react";

const UserDisplay = (props) => {
  return (
    <ul>
      {props.onDisplayUserData.map((user) => (
        <li key={user.id}>
          {user.userName} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserDisplay;
