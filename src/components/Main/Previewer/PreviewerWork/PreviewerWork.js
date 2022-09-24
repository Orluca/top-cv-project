import React from "react";
import Subheader from "../../../General/Subheader/Subheader";
import styles from "./PreviewerWork.module.css";
import WorkPreviewCard from "./WorkPreviewCard/WorkPreviewCard";

function PreviewerWork(props) {
  const workCards = props.data?.map((workData) => <WorkPreviewCard data={workData} key={workData.id} />);

  return (
    <div>
      <Subheader name="Work Experience" />
      {workCards}
    </div>
  );
}

export default PreviewerWork;
