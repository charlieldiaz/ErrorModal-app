import React from "react";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div className="backdrop" onClick={props.onHandleModal}>
      <div className="color-over">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
