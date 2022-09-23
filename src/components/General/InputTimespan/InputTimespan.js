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
  const idStart = id + "-start";
  const idEnd = id + "-end";

  return (
    <div className={styles["timespan-input-wrapper"]}>
      <label htmlFor={idStart}>{props.name}</label>
      <div className={styles["timespan-input-subwrapper"]}>
        <input type="text" onChange={handleStart} id={idStart} />
        <label htmlFor={idEnd}>to</label>
        <input type="text" onChange={handleEnd} id={idEnd} />
      </div>
    </div>
  );
}

export default InputTimespan;
