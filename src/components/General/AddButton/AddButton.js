import React from "react";
import styles from "./AddButton.module.css";
import plusIcon from "./plus-icon.svg";

function AddButton(props) {
  function handleButton() {
    props.onButtonClick();
  }

  return (
    <div className={styles["add-btn-wrapper"]}>
      <button onClick={handleButton} className={styles["add-btn"]}>
        <img src={plusIcon} alt="A plus symbol" />
      </button>
      <div>Add more</div>
    </div>
  );
}

export default AddButton;
