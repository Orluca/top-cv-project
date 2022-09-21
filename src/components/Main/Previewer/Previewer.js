import React from "react";
import styles from "./Previewer.module.css";

function Previewer(props) {
  return (
    <div className={styles["previewer"]}>
      <h2>{props.data.firstName}</h2>
      <h1>{props.data.lastName}</h1>
      <h3>{props.data.occupation}</h3>
      <p>{props.data.aboutMe}</p>
      <p>{props.data.phoneNumber}</p>
      <p>{props.data.email}</p>
      <p>{props.data.street}</p>
      <p>{props.data.streetNumber}</p>
      <p>{props.data.city}</p>
      <p>{props.data.postalCode}</p>
    </div>
  );
}

export default Previewer;
