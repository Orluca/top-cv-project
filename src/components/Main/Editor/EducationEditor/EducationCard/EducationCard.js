import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";
import InputTimespan from "../../../../General/InputTimespan/InputTimespan";
import styles from "./EducationCard.module.css";
import Card from "../../../../General/Card/Card";

function EducationCard(props) {
  const [id, _setId] = useState(props.id);
  const [educationData, setEducationData] = useState({ id: id });

  function handleDegree(val) {
    setEducationData((prev) => ({ ...prev, degree: val }));
  }

  function handleUniversity(val) {
    setEducationData((prev) => ({ ...prev, university: val }));
  }

  function handleTimespanStart(val) {
    setEducationData((prev) => ({ ...prev, timeStart: val }));
  }

  function handleTimespanEnd(val) {
    setEducationData((prev) => ({ ...prev, timeEnd: val }));
  }

  function handleDelete() {
    props.onDelete(id);
  }

  React.useEffect(() => {
    props.onInputChange(educationData);
  }, [educationData]);

  return (
    <Card>
      <Input name="Degree" onInputChange={handleDegree} />
      <Input name="University" onInputChange={handleUniversity} />
      <InputTimespan name="Time Span" onStartChange={handleTimespanStart} onEndChange={handleTimespanEnd} />
      <DeleteButton onClick={handleDelete} />
    </Card>
  );
}

export default EducationCard;
