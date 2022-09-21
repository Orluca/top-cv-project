import React from "react";
import styles from "./PersonalDataEditor.module.css";
import Input from "../../../General/Input/Input";

function PersonalDataEditor() {
  return (
    <div>
      <h3>Personal Data</h3>
      <hr />
      <Input name="First Name" />
      <Input name="Last Name" />
      <Input name="Occupation" />
    </div>
  );
}

export default PersonalDataEditor;
