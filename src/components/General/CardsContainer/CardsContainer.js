import React from "react";
import styles from "./CardsContainer.module.css";

function CardsContainer(props) {
  return <div className={`${styles["cards-container"]} ${styles[`${`gap-${props.gap}`}`]}`}>{props.children}</div>;
}

export default CardsContainer;
