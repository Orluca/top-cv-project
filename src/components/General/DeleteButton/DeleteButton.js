import React from "react";
import styles from "./DeleteButton.module.css";
import deleteIcon from "./delete-icon.svg";

function DeleteButton(props) {
  function handleClick() {
    props.onClick();
  }

  return (
    <button onClick={handleClick} className={styles["delete-btn"]}>
      <img src={deleteIcon} alt="A delete icon" />
    </button>
  );
}

export default DeleteButton;
