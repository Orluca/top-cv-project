import React, { useState } from "react";
import Input from "../../../General/Input/Input";
import InputsContainer from "../../../General/InputsContainer/InputsContainer";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./EditorContact.module.css";

function EditorContact(props) {
  const [contactData, setContactData] = useState({});

  function handlePhone(val) {
    setContactData((prev) => ({ ...prev, phoneNumber: val }));
  }

  function handleEmail(val) {
    setContactData((prev) => ({ ...prev, email: val }));
  }

  function handleStreet(val) {
    setContactData((prev) => ({ ...prev, street: val }));
  }

  function handleStreetNumber(val) {
    setContactData((prev) => ({ ...prev, streetNumber: val }));
  }

  function handleCity(val) {
    setContactData((prev) => ({ ...prev, city: val }));
  }

  function handlePostalCode(val) {
    setContactData((prev) => ({ ...prev, postalCode: val }));
  }

  React.useEffect(() => {
    props.onInputChange(contactData);
  }, [contactData]);

  return (
    <div>
      <Subheader name="Contact" />
      <InputsContainer>
        <Input name="Phone Number" onInputChange={handlePhone} color="grey" />
        <Input name="Email" onInputChange={handleEmail} color="grey" />
        <Input name="Street" onInputChange={handleStreet} color="grey" />
        <Input name="Street Number" onInputChange={handleStreetNumber} color="grey" />
        <Input name="City" onInputChange={handleCity} color="grey" />
        <Input name="Postal Code" onInputChange={handlePostalCode} color="grey" />
      </InputsContainer>
    </div>
  );
}

export default EditorContact;