import React, { useState } from "react";
import styles from "./PersonalDataEditor.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import Input from "../../../General/Input/Input";
import Textarea from "../../../General/Textarea/Textarea";

// const personalData = {
//   firstName: "",
//   lastName: "",
//   occupation: "",
//   aboutMe: "",
// };

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
    console.log(personalData);
  }, [personalData]);

  return (
    <div>
      <Subheader name="Personal Data" />
      <hr />
      <Input name="First Name" onInputChange={handleFirstName} />
      <Input name="Last Name" onInputChange={handleLastName} />
      <Input name="Occupation" onInputChange={handleOccupation} />
      <Textarea name="About Me" onInputChange={handleAboutMe} />
    </div>
  );
}

export default PersonalDataEditor;
