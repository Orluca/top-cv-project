import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import Textarea from "../../../../General/Textarea/Textarea";
import styles from "./WorkCard.module.css";

function WorkCard(props) {
  const [workData, setWorkData] = useState({});

  function handleRole(val) {
    setWorkData((prev) => ({ ...prev, role: val }));
  }

  function handleCompany(val) {
    setWorkData((prev) => ({ ...prev, company: val }));
  }

  function handleTimespan(val) {
    setWorkData((prev) => ({ ...prev, timespan: val }));
  }

  function handleDescription(val) {
    setWorkData((prev) => ({ ...prev, description: val }));
  }

  React.useEffect(() => {
    props.onInputChange(workData);
  }, [workData]);

  return (
    <div className={styles["work-card"]}>
      <Input name="Role" onInputChange={handleRole} />
      <Input name="Company Name" onInputChange={handleCompany} />
      <Input name="Time Span" onInputChange={handleTimespan} />
      <Textarea name="Description" onInputChange={handleDescription} />
    </div>
  );
}

export default WorkCard;
