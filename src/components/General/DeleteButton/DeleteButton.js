import React from "react";
import styles from "./DeleteButton.module.css";

function DeleteButton(props) {
  function handleClick() {
    props.onClick();
  }

  return <button onClick={handleClick}>X</button>;
}

export default DeleteButton;
