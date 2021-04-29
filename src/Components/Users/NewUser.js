import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const NewUser = (props) => {
  const [userAdd, setUserAdd] = useState("");
  const [ageAdd, setAgeAdd] = useState("");

  const [showModal, setshowModal] = useState();

  const userNameHandler = (event) => {
    setUserAdd(event.target.value);
  };
  const ageHandler = (event) => {
    setAgeAdd(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userAdd.trim().length === 0 || ageAdd.trim().length === 0) {
      setshowModal({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+ageAdd < 1) {
      setshowModal({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    const formData = {
      userName: userAdd,
      age: +ageAdd,
      id: Math.random().toString(),

      //   key: id,
    };

    //Reset the values to blank
    props.onSaveUserData(formData);
    setUserAdd("");
    setAgeAdd("");
  };

  const modalHandler = () => {
    setshowModal(null);
  };
  return (
    <div>
      {showModal && (
        <ErrorModal
          title={showModal.title}
          message={showModal.message}
          onHandleModal={modalHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" onChange={userNameHandler} value={userAdd} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" onChange={ageHandler} value={ageAdd} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
