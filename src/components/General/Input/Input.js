import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <div>
      <label htmlFor="">{props.name}</label>
      <input type="text" />
    </div>
  );
}

export default Input;
