import React from "react";
import styles from "./WorkEditor.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import WorkCard from "./WorkCard/WorkCard";
import AddButton from "../../../General/AddButton/AddButton";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function WorkEditor() {
  function handleAddButton() {
    setWorkCards((prev) => [...prev, <WorkCard key={uuidv4()} />]);
  }

  const [workCards, setWorkCards] = useState([<WorkCard key={uuidv4()} />, <WorkCard key={uuidv4()} />]);

  return (
    <div>
      <Subheader name="Work Experience" />
      <hr />
      {workCards}
      <AddButton onButtonClick={handleAddButton} />
    </div>
  );
}

export default WorkEditor;
