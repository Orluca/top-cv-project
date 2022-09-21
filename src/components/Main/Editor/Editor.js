import React from "react";
import styles from "./Editor.module.css";
import PersonalDataEditor from "./PersonalDataEditor/PersonalDataEditor";

function Editor() {
  return (
    <div className={styles["editor"]}>
      <PersonalDataEditor />
    </div>
  );
}

export default Editor;
