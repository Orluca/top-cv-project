import React from "react";
import styles from "./Textarea.module.css";

function Textarea(props) {
  return (
    <div>
      <label htmlFor="">{props.name}</label>
      <textarea></textarea>
    </div>
  );
}

export default Textarea;
