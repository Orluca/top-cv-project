import React, { useState, useEffect } from "react";
import Subheader from "../../../General/Subheader/Subheader";
import SkillsCard from "./SkillsCard/SkillsCard";
import AddButton from "../../../General/AddButton/AddButton";
import { v4 as uuidv4 } from "uuid";
import styles from "./EditorSkills.module.css";
import CardsContainer from "../../../General/CardsContainer/CardsContainer";

function EditorSkills(props) {
  const [skillCards, setSkillCards] = useState([createSkillCard()]);
  const [skillsData, setSkillsData] = useState([]);

  function createSkillCard() {
    const id = uuidv4();

    return <SkillsCard key={id} id={id} onInputChange={handleInputChanges} onDelete={handleDelete} />;
  }

  function handleAddButton() {
    setSkillCards((prev) => [...prev, createSkillCard()]);
  }

  function handleInputChanges(val) {
    setSkillsData((prev) => {
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
    setSkillCards((prev) => {
      const filteredCards = prev.filter((card) => card.key !== id);
      return [...filteredCards];
    });
  }

  useEffect(() => {
    props.onInputChange(skillsData);
  }, [skillsData]);

  return (
    <div>
      <Subheader name="Skills" />
      <CardsContainer gap="small">{skillCards}</CardsContainer>
      <AddButton onButtonClick={handleAddButton} />
    </div>
  );
}

export default EditorSkills;
