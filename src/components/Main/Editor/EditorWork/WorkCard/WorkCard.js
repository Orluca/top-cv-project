import React, { useState } from "react";
import Input from "../../../../General/Input/Input";
import Textarea from "../../../../General/Textarea/Textarea";
import DeleteButton from "../../../../General/DeleteButton/DeleteButton";
import InputTimespan from "../../../../General/InputTimespan/InputTimespan";
import Card from "../../../../General/Card/Card";
import InputsContainer from "../../../../General/InputsContainer/InputsContainer";

function WorkCard(props) {
  const [id, _setId] = useState(props.id);
  const [workData, setWorkData] = useState({ id: id });

  function handleRole(val) {
    setWorkData((prev) => ({ ...prev, role: val }));
  }

  function handleCompany(val) {
    setWorkData((prev) => ({ ...prev, company: val }));
  }

  function handleTimespanStart(val) {
    setWorkData((prev) => ({ ...prev, timeStart: val }));
  }

  function handleTimespanEnd(val) {
    setWorkData((prev) => ({ ...prev, timeEnd: val }));
  }

  function handleDescription(val) {
    setWorkData((prev) => ({ ...prev, description: val }));
  }

  function handleDelete() {
    props.onDelete(id);
  }

  React.useEffect(() => {
    props.onInputChange(workData);
  }, [workData]);

  return (
    <Card padding="big">
      <InputsContainer>
        <Input name="Role" onInputChange={handleRole} type="text" color="white" />
        <Input name="Company Name" onInputChange={handleCompany} type="text" color="white" />
        <InputTimespan name="Time Span" onStartChange={handleTimespanStart} onEndChange={handleTimespanEnd} />
        <Textarea name="Description" onInputChange={handleDescription} color="white" />
      </InputsContainer>
      <DeleteButton onClick={handleDelete} topRight="true" />
    </Card>
  );
}

export default WorkCard;
