import React from "react";
import styles from "./Previewer.module.css";
import PreviewerAbout from "./PreviewerAbout/PreviewerAbout";
import PreviewerEducation from "./PreviewerEducation/PreviewerEducation";
import PreviewerHead from "./PreviewerHead/PreviewerHead";
import PreviewerSkills from "./PreviewerSkills/PreviewerSkills";
import PreviewerWork from "./PreviewerWork/PreviewerWork";

function Previewer(props) {
  return (
    <div className={styles["previewer"]}>
      <PreviewerHead data={props.data} />
      <PreviewerAbout data={props.data} />
      <PreviewerWork data={props.data.workExperience} />
      <PreviewerEducation data={props.data.education} />
      <PreviewerSkills data={props.data.skills} />
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
