import React from "react";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./PreviewerSkills.module.css";

function PreviewerSkills(props) {
  const skillItems = props.data?.map((skill) => <li key={skill.id}>{skill.name}</li>);

  return (
    <div className={styles["previewer-skills"]}>
      <Subheader name="Skills" />
      <ul>{skillItems}</ul>
    </div>
  );
}

export default PreviewerSkills;
