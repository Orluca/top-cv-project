import React from "react";
import styles from "./WorkEditor.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import WorkCard from "./WorkCard/WorkCard";

function WorkEditor() {
  return (
    <div>
      <Subheader name="Work Experience" />
      <hr />
      <WorkCard />
    </div>
  );
}

export default WorkEditor;
