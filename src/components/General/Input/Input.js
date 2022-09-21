import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  function sendData(e) {
    props.onInputChange(e.target.value);
  }

  return (
    <div>
      <label htmlFor="">{props.name}</label>
      <input type="text" onChange={sendData} />
    </div>
  );
}

export default Input;
