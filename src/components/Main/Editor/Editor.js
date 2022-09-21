import React, { useState } from "react";
import styles from "./Editor.module.css";
import PersonalDataEditor from "./PersonalDataEditor/PersonalDataEditor";

function Editor(props) {
  const [data, setData] = useState({});

  function handlePersonalData(val) {
    setData((prev) => ({ ...prev, ...val }));
  }

  React.useEffect(() => {
    props.onInputChange(data);
  }, [data]);

  return (
    <div className={styles["editor"]}>
      <PersonalDataEditor onInputChange={handlePersonalData} />
    </div>
  );
}

export default Editor;
