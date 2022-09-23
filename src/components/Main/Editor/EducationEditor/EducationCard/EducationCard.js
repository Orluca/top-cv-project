import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";
import InputTimespan from "../../../../General/InputTimespan/InputTimespan";
import styles from "./EducationCard.module.css";
import Card from "../../../../General/Card/Card";
import InputsContainer from "../../../../General/InputsContainer/InputsContainer";

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
      <InputsContainer>
        <Input name="Degree" onInputChange={handleDegree} color="white" />
        <Input name="University" onInputChange={handleUniversity} color="white" />
        <InputTimespan name="Time Span" onStartChange={handleTimespanStart} onEndChange={handleTimespanEnd} />
      </InputsContainer>
      <DeleteButton onClick={handleDelete} />
    </Card>
  );
}

export default EducationCard;
