import React from "react";
import styles from "./Textarea.module.css";

function Textarea(props) {
  function sendData(e) {
    props.onInputChange(e.target.value);
  }

  return (
    <div>
      <label htmlFor="">{props.name}</label>
      <textarea onChange={sendData}></textarea>
    </div>
  );
}

export default Textarea;
