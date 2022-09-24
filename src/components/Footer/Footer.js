import React from "react";
import githubIcon from "./github-icon.svg";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/Orluca/top-cv-project">
        <img src={githubIcon} alt="The Github Logo" />
      </a>
    </footer>
  );
}

export default Footer;
