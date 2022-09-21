import React from "react";
import styles from "./Previewer.module.css";

function Previewer(props) {
  return (
    <div className={styles["previewer"]}>
      <h2>{props.data.firstName}</h2>
      <h1>{props.data.lastName}</h1>
      <h3>{props.data.occupation}</h3>
      <p>{props.data.aboutMe}</p>
    </div>
  );
}

export default Previewer;
