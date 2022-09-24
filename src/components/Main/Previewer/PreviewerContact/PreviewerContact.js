import React from "react";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./PreviewerContact.module.css";

function PreviewerContact(props) {
  return (
    <div>
      <Subheader name="Contact" />
      <div className={styles["contact-item"]}>{props.data?.phoneNumber ? props.data.phoneNumber : "+01 2345 6789"}</div>
      <div className={styles["contact-item"]}>
        {props.data?.street ? props.data.street : "Street Name"} {props.data?.streetNumber ? props.data.streetNumber : "42"}, {props.data?.postalCode ? props.data.postalCode : "01234"} {props.data?.city ? props.data.city : "City Name"}
      </div>
      <div className={styles["contact-item"]}>{props.data?.email ? props.data.email : "email@provider.com"}</div>
    </div>
  );
}

export default PreviewerContact;
