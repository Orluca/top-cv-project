import React from "react";
import styles from "./Previewer.module.css";

function Previewer(props) {
  return (
    <div className={styles["previewer"]}>
      <h2>{props.data}</h2>
      <h1>Orthmann</h1>
    </div>
  );
}

export default Previewer;
