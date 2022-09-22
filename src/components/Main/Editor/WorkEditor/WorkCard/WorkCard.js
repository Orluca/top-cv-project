import React from "react";
import Input from "../../../../General/Input/Input";
import Textarea from "../../../../General/Textarea/Textarea";
import styles from "./WorkCard.module.css";

function WorkCard() {
  return (
    <div className={styles["work-card"]}>
      <Input name="Role" />
      <Input name="Company Name" />
      <Input name="Time Span" />
      <Textarea name="Description" />
    </div>
  );
}

export default WorkCard;
