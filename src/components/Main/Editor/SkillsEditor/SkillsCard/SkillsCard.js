import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";
import styles from "./SkillsCard.module.css";
import Card from "../../../../General/Card/Card";

function SkillsCard(props) {
  const [id, _setId] = useState(props.id);
  const [skillsData, setSkillsData] = useState({ id: id });

  function handleInput(e) {
    setSkillsData((prev) => ({ ...prev, name: e.target.value }));
  }

  function handleDelete() {
    props.onDelete(id);
  }

  React.useEffect(() => {
    props.onInputChange(skillsData);
  }, [skillsData]);

  return (
    <Card>
      <input type="text" onChange={handleInput} />
      <DeleteButton onClick={handleDelete} />
    </Card>
  );
}

export default SkillsCard;
