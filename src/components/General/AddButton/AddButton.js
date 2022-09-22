import React from "react";
import styles from "./AddButton.module.css";

function AddButton(props) {
  function handleButton() {
    props.onButtonClick();
  }

  return (
    <div className={styles["add-btn-wrapper"]}>
      <button onClick={handleButton}>+</button>
      <div>Add more</div>
    </div>
  );
}

export default AddButton;
