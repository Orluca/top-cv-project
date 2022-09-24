import React, { useState, useEffect } from "react";
import Subheader from "../../../General/Subheader/Subheader";
import EducationCard from "./EducationCard/EducationCard";
import AddButton from "../../../General/AddButton/AddButton";
import { v4 as uuidv4 } from "uuid";
import styles from "./EditorEducation.module.css";
import CardsContainer from "../../../General/CardsContainer/CardsContainer";

function EditorEducation(props) {
  const [educationCards, setEducationCards] = useState([]);
  const [educationData, setEducationData] = useState([]);

  function createEducationCard() {
    const id = uuidv4();

    return <EducationCard key={id} id={id} onInputChange={handleInputChanges} onDelete={handleDelete} />;
  }

  function handleAddButton() {
    setEducationCards((prev) => [...prev, createEducationCard()]);
  }

  function handleInputChanges(val) {
    setEducationData((prev) => {
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
    setEducationCards((prev) => {
      const filteredCards = prev.filter((card) => card.key !== id);
      return [...filteredCards];
    });
  }

  useEffect(() => {
    props.onInputChange(educationData);
  }, [educationData]);

  return (
    <div>
      <Subheader name="Education" />
      <CardsContainer gap="big">{educationCards}</CardsContainer>
      <AddButton onButtonClick={handleAddButton} />
    </div>
  );
}

export default EditorEducation;
