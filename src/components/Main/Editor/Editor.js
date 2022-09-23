import React, { useState } from "react";
import ContactEditor from "./ContactEditor/ContactEditor";
import styles from "./Editor.module.css";
import PersonalDataEditor from "./PersonalDataEditor/PersonalDataEditor";
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

  function handleDeleteWorkCard(id) {
    props.onDeleteWorkCard(id);
  }

  React.useEffect(() => {
    props.onInputChange(data);
  }, [data]);

  return (
    <div className={styles["editor"]}>
      <PersonalDataEditor onInputChange={handlePersonalData} />
      <ContactEditor onInputChange={handleContactData} />
      <WorkEditor onInputChange={handleWorkData} onDelete={handleDeleteWorkCard} />
    </div>
  );
}

export default Editor;
