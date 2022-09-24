import React from "react";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./PreviewerContact.module.css";
import emailIcon from "./email-icon.svg";
import locationIcon from "./location-icon.svg";
import phoneIcon from "./phone-icon.svg";

function PreviewerContact(props) {
  return (
    <div>
      <Subheader name="Contact" />
      <div className={styles["contact-item"]}>
        <img src={phoneIcon} alt="A symbol of a phone" className={styles["contact-icon"]} />
        {props.data?.phoneNumber ? props.data.phoneNumber : "+01 2345 6789"}
      </div>
      <div className={styles["contact-item"]}>
        <img src={locationIcon} alt="A location pin symbol" className={styles["contact-icon"]} />
        {props.data?.street ? props.data.street : "Street Name"} {props.data?.streetNumber ? props.data.streetNumber : "42"}, {props.data?.postalCode ? props.data.postalCode : "01234"} {props.data?.city ? props.data.city : "City Name"}
      </div>
      <div className={styles["contact-item"]}>
        <img src={emailIcon} alt="An email symbol" className={styles["contact-icon"]} />
        {props.data?.email ? props.data.email : "email@provider.com"}
      </div>
    </div>
  );
}

export default PreviewerContact;
