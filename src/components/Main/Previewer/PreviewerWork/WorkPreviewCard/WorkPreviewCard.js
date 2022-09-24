import React, { useState } from "react";
import styles from "./WorkPreviewCard.module.css";

function WorkPreviewCard(props) {
  return (
    <div className={styles["work-preview-card"]}>
      <div>
        {props.data.timeStart ? props.data.timeStart : "2020"} - {props.data.timeEnd ? props.data.timeEnd : "2022"}
      </div>
      <h4>{props.data.role ? props.data.role : "Role"}</h4>
      <div>{props.data.company ? props.data.company : "Company"}</div>
      <p>{props.data.description ? props.data.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mus venenatis nunc, cursus cursus velit."}</p>
    </div>
  );
}

export default WorkPreviewCard;
