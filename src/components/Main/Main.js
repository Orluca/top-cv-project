import React, { useState, useEffect } from "react";
import Editor from "./Editor/Editor";
import Previewer from "./Previewer/Previewer";

function Main() {
  const [data, setData] = useState({});

  function handleInputChange(val) {
    setData(val);
  }

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <main>
      <Editor onInputChange={handleInputChange} />
      <Previewer data={data} />
    </main>
  );
}

export default Main;
