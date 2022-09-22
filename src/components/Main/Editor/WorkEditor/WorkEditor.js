import React from "react";
import styles from "./WorkEditor.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import WorkCard from "./WorkCard/WorkCard";
import AddButton from "../../../General/AddButton/AddButton";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function WorkEditor() {
  const workCard = <WorkCard key={uuidv4()} onInputChange={handleInputChanges} />;
  const [workCards, setWorkCards] = useState([workCard]);
  const [workData, setWorkData] = useState([]);

  function handleAddButton() {
    setWorkCards((prev) => [...prev, workCard]);
  }

  function handleInputChanges(val) {
    setWorkData((prev) => {
      const index = prev.findIndex((obj) => obj.id === val.id);
      if (index === -1) {
        return [...prev, val];
      } else {
        prev[index] = val;
        return [...prev];
      }
    });
  }

  useEffect(() => {
    console.log(workData);
  }, [workData]);

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
