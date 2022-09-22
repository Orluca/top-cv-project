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

  React.useEffect(() => {
    props.onInputChange(data);
  }, [data]);

  return (
    <div className={styles["editor"]}>
      <PersonalDataEditor onInputChange={handlePersonalData} />
      <ContactEditor onInputChange={handleContactData} />
      <WorkEditor />
    </div>
  );
}

export default Editor;
