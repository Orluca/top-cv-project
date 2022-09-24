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
    setData((prev) => ({ ...prev, personal: { ...val } }));
  }

  function handleContactData(val) {
    setData((prev) => ({ ...prev, contact: { ...val } }));
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

  React.useEffect(() => {
    props.onInputChange(data);
  }, [data]);

  return (
    <div className={styles["editor"]}>
      <EditorPersonal onInputChange={handlePersonalData} />
      <EditorContact onInputChange={handleContactData} />
      <EditorWork onInputChange={handleWorkData} />
      <EditorEducation onInputChange={handleEducationData} />
      <EditorSkills onInputChange={handleSkillsData} />
    </div>
  );
}

export default Editor;
