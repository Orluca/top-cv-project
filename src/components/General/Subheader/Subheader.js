import React from "react";
import styles from "./Subheader.module.css";

function Subheader(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <hr />
    </>
  );
}

export default Subheader;
