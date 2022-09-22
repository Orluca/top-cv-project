import React from "react";
import styles from "./AddButton.module.css";

function AddButton() {
  return (
    <div className={styles["add-btn-wrapper"]}>
      <button>+</button>
      <div>Add more</div>
    </div>
  );
}

export default AddButton;
