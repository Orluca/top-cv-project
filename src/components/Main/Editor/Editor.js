import React, { useState } from "react";
import styles from "./Editor.module.css";
import EditorContact from "./EditorContact/EditorContact";
import EditorEducation from "./EditorEducation/EditorEducation";
import EditorPersonal from "./EditorPersonal/EditorPersonal";
import EditorSkills from "./EditorSkills/EditorSkills";
import EditorWork from "./EditorWork/EditorWork";

function Editor(props) {
  const [data, setData] = useState({});

  function handlePersonalData(val) {
    setData((prev) => ({ ...prev, ...val }));
  }

  function handleContactData(val) {
    setData((prev) => ({ ...prev, ...val }));
  }

  function handleWorkData(val) {
    setData((prev) => ({ ...prev, workExperience: [...val] }));
  }

  function handleEducationData(val) {
    setData((prev) => ({ ...prev, education: [...val] }));
  }

  function handleSkillsData(val) {
    setData((prev) => ({ ...prev, skills: [...val] }));
  }

  function handleDeleteWorkCard(id) {
    props.onDeleteWorkCard(id);
  }

  function handleDeleteEducationCard(id) {
    props.onDeleteEducationCard(id);
  }

  function handleDeleteSkillCard(id) {
    props.onDeleteSkillCard(id);
  }

  React.useEffect(() => {
    props.onInputChange(data);
  }, [data]);

  return (
    <div className={styles["editor"]}>
      <EditorPersonal onInputChange={handlePersonalData} />
      <EditorContact onInputChange={handleContactData} />
      <EditorWork onInputChange={handleWorkData} onDelete={handleDeleteWorkCard} />
      <EditorEducation onInputChange={handleEducationData} onDelete={handleDeleteEducationCard} />
      <EditorSkills onInputChange={handleSkillsData} onDelete={handleDeleteSkillCard} />
    </div>
  );
}

export default Editor;
