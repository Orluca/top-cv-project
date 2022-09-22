import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import Textarea from "../../../../General/Textarea/Textarea";
import styles from "./WorkCard.module.css";
import { v4 as uuidv4 } from "uuid";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";

function WorkCard(props) {
  const [workData, setWorkData] = useState({ id: uuidv4() });

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

  function test() {
    console.log("DELETEL");
  }

  return (
    <div className={styles["work-card"]}>
      <Input name="Role" onInputChange={handleRole} />
      <Input name="Company Name" onInputChange={handleCompany} />
      <Input name="Time Span" onInputChange={handleTimespan} />
      <Textarea name="Description" onInputChange={handleDescription} />
      <DeleteButton onClick={test} />
    </div>
  );
}

export default WorkCard;
