import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";
import InputTimespan from "../../../../General/InputTimespan/InputTimespan";
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
    <Card padding="big">
      <InputsContainer>
        <Input name="Degree" onInputChange={handleDegree} type="text" color="white" autoFocus="true" />
        <Input name="University" onInputChange={handleUniversity} type="text" color="white" />
        <InputTimespan name="Time Span" onStartChange={handleTimespanStart} onEndChange={handleTimespanEnd} />
      </InputsContainer>
      <DeleteButton onClick={handleDelete} topRight="true" />
    </Card>
  );
}

export default EducationCard;
