import React, { useState, useEffect } from "react";
import Subheader from "../../../General/Subheader/Subheader";
import WorkCard from "./WorkCard/WorkCard";
import AddButton from "../../../General/AddButton/AddButton";
import { v4 as uuidv4 } from "uuid";
import CardsContainer from "../../../General/CardsContainer/CardsContainer";

function EditorWork(props) {
  const [workCards, setWorkCards] = useState([]);
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
    setWorkCards((prev) => {
      const filteredCards = prev.filter((card) => card.key !== id);
      return [...filteredCards];
    });
    setWorkData((prev) => {
      const filteredData = prev.filter((work) => work.id !== id);
      return [...filteredData];
    });
  }

  useEffect(() => {
    console.log(workData);
    props.onInputChange(workData);
  }, [workData]);

  return (
    <div>
      <Subheader name="Work Experience" />
      <CardsContainer gap="big">{workCards}</CardsContainer>
      <AddButton onButtonClick={handleAddButton} />
    </div>
  );
}

export default EditorWork;
