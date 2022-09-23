import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";
import styles from "./SkillsCard.module.css";

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
    <div>
      <input type="text" onChange={handleInput} />
      <DeleteButton onClick={handleDelete} />
    </div>
  );
}

export default SkillsCard;
