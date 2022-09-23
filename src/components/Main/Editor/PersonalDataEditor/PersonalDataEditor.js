import React, { useState } from "react";
import styles from "./PersonalDataEditor.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import Input from "../../../General/Input/Input";
import Textarea from "../../../General/Textarea/Textarea";

function PersonalDataEditor(props) {
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
      <hr />
      <Input name="First Name" onInputChange={handleFirstName} color="grey" />
      <Input name="Last Name" onInputChange={handleLastName} color="grey" />
      <Input name="Occupation" onInputChange={handleOccupation} color="grey" />
      <Textarea name="About Me" onInputChange={handleAboutMe} color="grey" />
    </div>
  );
}

export default PersonalDataEditor;
