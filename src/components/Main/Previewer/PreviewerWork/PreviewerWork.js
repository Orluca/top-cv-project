import React from "react";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./PreviewerWork.module.css";
import WorkPreviewCard from "./WorkPreviewCard/WorkPreviewCard";

function PreviewerWork(props) {
  const workCards = props.data?.map((workData) => <WorkPreviewCard data={workData} key={workData.id} />);

  return (
    <div className={styles["previewer-work"]}>
      <Subheader name="Work Experience" />
      <ul>{workCards}</ul>
    </div>
  );
}

export default PreviewerWork;
