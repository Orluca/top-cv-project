import React from "react";
import styles from "./Previewer.module.css";
import PreviewerAbout from "./PreviewerAbout/PreviewerAbout";
import PreviewerContact from "./PreviewerContact/PreviewerContact";
import PreviewerEducation from "./PreviewerEducation/PreviewerEducation";
import PreviewerHead from "./PreviewerHead/PreviewerHead";
import PreviewerSkills from "./PreviewerSkills/PreviewerSkills";
import PreviewerWork from "./PreviewerWork/PreviewerWork";

function Previewer(props) {
  return (
    <div className={styles["previewer"]}>
      <PreviewerHead data={props.data.personal} />
      <PreviewerAbout data={props.data.personal} />
      <PreviewerWork data={props.data.workExperience} />
      <PreviewerEducation data={props.data.education} />
      <PreviewerSkills data={props.data.skills} />
      {/* <PreviewerContact /> */}
    </div>
  );
}

export default Previewer;
