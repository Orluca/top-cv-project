import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  //   const [value, setValue] = useState("");

  function test(e) {
    // setValue(e.target.value);
    props.onInputChange(e.target.value);
  }

  return (
    <div>
      <label htmlFor="">{props.name}</label>
      <input type="text" onChange={test} />
    </div>
  );
}

export default Input;
