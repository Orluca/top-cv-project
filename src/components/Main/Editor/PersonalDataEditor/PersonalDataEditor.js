import React, { useState } from "react";
import styles from "./PersonalDataEditor.module.css";
import Subheader from "../../../General/Subheader/Subheader";
import Input from "../../../General/Input/Input";
import Textarea from "../../../General/Textarea/Textarea";

function PersonalDataEditor(props) {
  //   const [test, setTest] = useState("");

  function testy(inputVal) {
    // setTest(inputVal);
    props.onInputChange(inputVal);
  }

  return (
    <div>
      <Subheader name="Personal Data" />
      <hr />
      <Input name="First Name" onInputChange={testy} />
      <Input name="Last Name" />
      <Input name="Occupation" />
      <Textarea name="About Me" />
    </div>
  );
}

export default PersonalDataEditor;
