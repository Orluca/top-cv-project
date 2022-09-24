import React, { useState } from "react";
import styles from "./EditorPersonal.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import Input from "../../../General/Input/Input";
import Textarea from "../../../General/Textarea/Textarea";
import InputsContainer from "../../../General/InputsContainer/InputsContainer";

function EditorPersonal(props) {
  const [personalData, setPersonalData] = useState({});

  function handleFirstName(val) {
    setPersonalData((prev) => ({ ...prev, firstName: val }));
  }

  function handleLastName(val) {
    setPersonalData((prev) => ({ ...prev, lastName: val }));
  }

  function handleOccupation(val) {
    setPersonalData((prev) => ({ ...prev, occupation: val }));
  }

  function handleAboutMe(val) {
    setPersonalData((prev) => ({ ...prev, aboutMe: val }));
  }

  React.useEffect(() => {
    props.onInputChange(personalData);
  }, [personalData]);

  return (
    <div>
      <Subheader name="Personal Data" />
      <InputsContainer>
        <Input name="First Name" onInputChange={handleFirstName} type="text" color="grey" />
        <Input name="Last Name" onInputChange={handleLastName} type="text" color="grey" />
        <Input name="Occupation" onInputChange={handleOccupation} type="text" color="grey" />
        <Textarea name="About Me" onInputChange={handleAboutMe} color="grey" />
      </InputsContainer>
    </div>
  );
}

export default EditorPersonal;
