import Demo1 from "./demo1";
import React from "react";
import { useState } from "react";
export default function Demo() {

  const [first, setfirst] = useState();
  console.log(first);


  function get(df) {
    console.log(df);
    document.getElementById("btn").style.backgroundColor = `${df}`;
  }

  return (
    <div>
      demo
      <h1>{first}</h1>
      <button onClick={() => get(first)} id="btn">
        click
      </button>
      <Demo1 setname={setfirst} />
    </div>
  );
}
