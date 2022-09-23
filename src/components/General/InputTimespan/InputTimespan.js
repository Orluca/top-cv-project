import React from "react";
import styles from "./InputTimespan.module.css";

function InputTimespan(props) {
  function handleStart(e) {
    props.onStartChange(e.target.value);
  }

  function handleEnd(e) {
    props.onEndChange(e.target.value);
  }

  const id = props.name.toLowerCase().replace(" ", "-");

  return (
    <div>
      <label htmlFor={id}>{props.name}</label>
      <div>
        <input type="text" onChange={handleStart} id={id} />
        <div>to</div>
        <input type="text" onChange={handleEnd} id={id} />
      </div>
    </div>
  );
}

export default InputTimespan;
