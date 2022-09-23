import React from "react";
import styles from "./CardsContainer.module.css";

function CardsContainer(props) {
  return <div className={styles["cards-container"]}>{props.children}</div>;
}

export default CardsContainer;
