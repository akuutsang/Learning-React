import React from "react";
import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState(" ");

  useEffect(() => {});
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
          console.log("state updated", word);
        }}
      />
      <h1>Lets get the defination for {word}</h1>
    </>
  );
}
