import React from "react";
import styles from "./Textarea.module.css";

function Textarea(props) {
  function sendData(e) {
    props.onInputChange(e.target.value);
  }

  const id = props.name.toLowerCase().replace(" ", "-");

  return (
    <div className={styles["textarea-wrapper"]}>
      <label htmlFor={id}>{props.name}</label>
      <textarea onChange={sendData} id={id}></textarea>
    </div>
  );
}

export default Textarea;
