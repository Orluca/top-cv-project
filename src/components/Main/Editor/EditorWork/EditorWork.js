import React, { useState, useEffect } from "react";
import styles from "./EditorWork.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import WorkCard from "./WorkCard/WorkCard";
import AddButton from "../../../General/AddButton/AddButton";
import { v4 as uuidv4 } from "uuid";
import CardsContainer from "../../../General/CardsContainer/CardsContainer";

function EditorWork(props) {
  const [workCards, setWorkCards] = useState([createWorkCard()]);
  const [workData, setWorkData] = useState([]);

  function createWorkCard() {
    const id = uuidv4();

    return <WorkCard key={id} id={id} onInputChange={handleInputChanges} onDelete={handleDelete} />;
  }

  function handleAddButton() {
    setWorkCards((prev) => [...prev, createWorkCard()]);
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

  function handleDelete(id) {
    props.onDelete(id);
    setWorkCards((prev) => {
      const filteredCards = prev.filter((card) => card.key !== id);
      return [...filteredCards];
    });
  }

  useEffect(() => {
    props.onInputChange(workData);
  }, [workData]);

  return (
    <div>
      <Subheader name="Work Experience" />
      <CardsContainer>{workCards}</CardsContainer>
      <AddButton onButtonClick={handleAddButton} />
    </div>
  );
}

export default EditorWork;
