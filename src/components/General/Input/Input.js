import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  function sendData(e) {
    props.onInputChange(e.target.value);
  }

  const id = props.name.toLowerCase().replace(" ", "-");

  return (
    <div className={styles["input-wrapper"]}>
      <label htmlFor={id}>{props.name}</label>
      <input type={props.type} onChange={sendData} id={id} className={styles[`background-${props.color}`]} autoFocus={props.autoFocus === "true" ? true : false} />
    </div>
  );
}

export default Input;
