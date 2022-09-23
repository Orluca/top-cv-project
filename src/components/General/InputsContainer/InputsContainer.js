import React from "react";
import styles from "./InputsContainer.module.css";

function InputsContainer(props) {
  return <div className={styles["inputs-container"]}>{props.children}</div>;
}

export default InputsContainer;
