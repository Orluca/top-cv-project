import React from "react";
import styles from "./Main.module.css";
import Editor from "./Editor/Editor";
import Previewer from "./Previewer/Previewer";
import { useState } from "react";

function Main() {
  const [data, setData] = useState("");

  function handleInputChange(inputVal) {
    setData(inputVal);
  }

  return (
    <main>
      <Editor onInputChange={handleInputChange} />
      <Previewer data={data} />
    </main>
  );
}

export default Main;
