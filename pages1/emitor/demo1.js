import React from "react";

export default function Demo1({ setname }) {

  console.log(setname);
  function hand(ddd) {
    const cc = ddd.target.value;
    setname(cc);
  }

  return (
    <div>
      demo<input onChange={hand}></input>

    </div>
  );
}
