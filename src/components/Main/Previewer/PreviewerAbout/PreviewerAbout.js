import React from "react";
import styles from "./PreviewerAbout.module.css";
import Subheader from "../../../General/Subheader/Subheader";

function PreviewerAbout(props) {
  return (
    <div>
      <Subheader name="About Me" />
      <p>{props.data?.aboutMe ? props.data.aboutMe : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum massa adipiscing vel scelerisque. Vulputate magna aliquam et id erat mattis morbi. Pellentesque risus, gravida dui condimentum. Id sit sit id sed tempor duis erat convallis turpis."}</p>
    </div>
  );
}

export default PreviewerAbout;
