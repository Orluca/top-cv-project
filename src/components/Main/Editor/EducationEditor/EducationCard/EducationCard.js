import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";
import styles from "./EducationCard.module.css";

function EducationCard(props) {
  const [id, _setId] = useState(props.id);
  const [educationData, setEducationData] = useState({ id: id });

  function handleDegree(val) {
    setEducationData((prev) => ({ ...prev, degree: val }));
  }

  function handleUniversity(val) {
    setEducationData((prev) => ({ ...prev, university: val }));
  }

  function handleTimespan(val) {
    setEducationData((prev) => ({ ...prev, timespan: val }));
  }

  function handleDelete() {
    props.onDelete(id);
  }

  React.useEffect(() => {
    props.onInputChange(educationData);
  }, [educationData]);

  return (
    <div>
      <Input name="Degree" onInputChange={handleDegree} />
      <Input name="University" onInputChange={handleUniversity} />
      <Input name="Time Span" onInputChange={handleTimespan} />
      <DeleteButton onClick={handleDelete} />
    </div>
  );
}

export default EducationCard;
