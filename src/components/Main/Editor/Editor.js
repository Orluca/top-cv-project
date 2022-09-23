import React, { useState } from "react";
import ContactEditor from "./ContactEditor/ContactEditor";
import styles from "./Editor.module.css";
import EducationEditor from "./EducationEditor/EducationEditor";
import PersonalDataEditor from "./PersonalDataEditor/PersonalDataEditor";
import SkillsEditor from "./SkillsEditor/SkillsEditor";
import WorkEditor from "./WorkEditor/WorkEditor";

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
      <PersonalDataEditor onInputChange={handlePersonalData} />
      <ContactEditor onInputChange={handleContactData} />
      <WorkEditor onInputChange={handleWorkData} onDelete={handleDeleteWorkCard} />
      <EducationEditor onInputChange={handleEducationData} onDelete={handleDeleteEducationCard} />
      <SkillsEditor onInputChange={handleSkillsData} onDelete={handleDeleteSkillCard} />
    </div>
  );
}

export default Editor;
