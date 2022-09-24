import React from "react";
import styles from "./EducationPreviewCard.module.css";

function EducationPreviewCard(props) {
  return (
    <div className={styles["education-preview-card"]}>
      <div className={styles["education-preview-card__timespan"]}>
        {props.data.timeStart ? props.data.timeStart : "2018"} - {props.data.timeEnd ? props.data.timeEnd : "2020"}
      </div>
      <h4 className={styles["education-preview-card__degree"]}>{props.data.degree ? props.data.degree : "Degree Name"}</h4>
      <div className={styles["education-preview-card__university"]}>{props.data.university ? props.data.university : "University/School Name"}</div>
    </div>
  );
}

export default EducationPreviewCard;
