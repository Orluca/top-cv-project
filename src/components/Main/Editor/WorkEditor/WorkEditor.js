import React from "react";
import styles from "./WorkEditor.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import WorkCard from "./WorkCard/WorkCard";
import AddButton from "../../../General/AddButton/AddButton";

function WorkEditor() {
  return (
    <div>
      <Subheader name="Work Experience" />
      <hr />
      <WorkCard />
      <AddButton />
    </div>
  );
}

export default WorkEditor;
