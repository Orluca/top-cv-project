import React from "react";
import styles from "./PreviewerHead.module.css";

function PreviewerHead(props) {
  return (
    <div>
      <h2 className={styles["first-name-preview"]}>{props.data?.firstName ? props.data.firstName : "First Name"}</h2>
      <h1 className={styles["last-name-preview"]}>{props.data?.lastName ? props.data.lastName : "Last Name"}</h1>
      <h2 className={styles["occupation-preview"]}>{props.data?.occupation ? props.data.occupation : "Occupation"}</h2>
    </div>
  );
}

export default PreviewerHead;
