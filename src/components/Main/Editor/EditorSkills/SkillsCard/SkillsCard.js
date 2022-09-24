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
    <Card padding="small">
      <div className={styles["skill-input-wrapper"]}>
        <input type="text" onChange={handleInput} className={styles["skill-input"]} />
        <DeleteButton onClick={handleDelete} />
      </div>
    </Card>
  );
}

export default SkillsCard;
