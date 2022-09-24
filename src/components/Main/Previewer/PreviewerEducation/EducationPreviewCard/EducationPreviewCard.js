import React from "react";
import styles from "./EducationPreviewCard.module.css";

function EducationPreviewCard(props) {
  return (
    <div className={styles["education-preview-card"]}>
      <div>
        {props.data.timeStart ? props.data.timeStart : "2018"} - {props.data.timeEnd ? props.data.timeEnd : "2020"}
      </div>
      <h4>{props.data.degree ? props.data.degree : "Degree Name"}</h4>
      <div>{props.data.university ? props.data.university : "University/School Name"}</div>
    </div>
  );
}

export default EducationPreviewCard;
