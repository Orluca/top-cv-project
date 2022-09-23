import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import Editor from "./Editor/Editor";
import Previewer from "./Previewer/Previewer";

function Main() {
  const [data, setData] = useState({});

  function handleInputChange(val) {
    setData(val);
  }

  function handleDeleteWorkCard(id) {
    setData((prev) => {
      const workExperienceFiltered = prev.workExperience.filter((work) => work.id !== id);
      return { ...prev, workExperience: workExperienceFiltered };
    });
  }

  function handleDeleteEducationCard(id) {
    setData((prev) => {
      const educationFiltered = prev.education.filter((education) => education.id !== id);
      return { ...prev, education: educationFiltered };
    });
  }

  function handleDeleteSkillCard(id) {
    setData((prev) => {
      const skillsFiltered = prev.skills.filter((skill) => skill.id !== id);
      return { ...prev, skills: skillsFiltered };
    });
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main>
      <Editor onInputChange={handleInputChange} onDeleteWorkCard={handleDeleteWorkCard} onDeleteEducationCard={handleDeleteEducationCard} onDeleteSkillCard={handleDeleteSkillCard} />
      <Previewer data={data} />
    </main>
  );
}

export default Main;
