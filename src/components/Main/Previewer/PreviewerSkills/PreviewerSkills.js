import React from "react";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./PreviewerSkills.module.css";

function PreviewerSkills(props) {
  const skillItems = props.data.map((skill) => <li>{skill.name}</li>);

  return (
    <div>
      <Subheader name="Skills" />
      <ul>{skillItems}</ul>
    </div>
  );
}

export default PreviewerSkills;
