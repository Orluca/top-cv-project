import React from "react";
import styles from "./Editor.module.css";
import PersonalDataEditor from "./PersonalDataEditor/PersonalDataEditor";

function Editor(props) {
  function handleInputChange(inputVal) {
    props.onInputChange(inputVal);
  }

  return (
    <div className={styles["editor"]}>
      <PersonalDataEditor onInputChange={handleInputChange} />
    </div>
  );
}

export default Editor;
