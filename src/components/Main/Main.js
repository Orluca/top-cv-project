import React from "react";
import styles from "./Main.module.css";
import Editor from "./Editor/Editor";
import Previewer from "./Previewer/Previewer";

function Main() {
  return (
    <main>
      <Editor />
      <Previewer />
    </main>
  );
}

export default Main;
