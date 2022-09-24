import React from "react";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./PreviewerEducation.module.css";
import EducationPreviewCard from "./EducationPreviewCard/EducationPreviewCard";

function PreviewerEducation(props) {
  const educationCards = props.data?.map((educationData) => <EducationPreviewCard data={educationData} key={educationData.id} />);

  return (
    <div className={styles["previewer-education"]}>
      <Subheader name="Education" />
      {educationCards}
    </div>
  );
}

export default PreviewerEducation;
