import React from "react";
import styles from "./Previewer.module.css";

function Previewer(props) {
  const work = props.data.workExperience?.map((work) => (
    <div key={work.id}>
      <div>{work.role}</div>
      <div>{work.company}</div>
      <div>{work.timeStart}</div>
      <div>{work.timeEnd}</div>
      <div>{work.description}</div>
    </div>
  ));

  const education = props.data.education?.map((education) => (
    <div key={education.id}>
      <div>{education.degree}</div>
      <div>{education.university}</div>
      <div>{education.timeStart}</div>
      <div>{education.timeEnd}</div>
    </div>
  ));

  const skills = props.data.skills?.map((skill) => <div key={skill.id}>{skill.name}</div>);

  return (
    <div className={styles["previewer"]}>
      <h2>{props.data.firstName ? props.data.firstName : "First Name"}</h2>
      <h1>{props.data.lastName ? props.data.lastName : "Last Name"}</h1>
      <h3>{props.data.occupation ? props.data.occupation : "Occupation"}</h3>
      <p>{props.data.aboutMe}</p>
      <p>{props.data.phoneNumber}</p>
      <p>{props.data.email}</p>
      <p>{props.data.street}</p>
      <p>{props.data.streetNumber}</p>
      <p>{props.data.city}</p>
      <p>{props.data.postalCode}</p>
      {work}
      {education}
      {skills}
    </div>
  );
}

export default Previewer;
