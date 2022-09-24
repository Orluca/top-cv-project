import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1 }}>
      <div className={`${styles["card"]} ${styles[`${`padding-${props.padding}`}`]}`}>{props.children}</div>
    </motion.div>
  );
}

export default Card;
