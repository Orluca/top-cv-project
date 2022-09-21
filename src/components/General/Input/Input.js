import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  function sendData(e) {
    props.onInputChange(e.target.value);
  }

  const id = props.name.toLowerCase().replace(" ", "-");

  return (
    <div>
      <label htmlFor={id}>{props.name}</label>
      <input type="text" onChange={sendData} id={id} />
    </div>
  );
}

export default Input;
