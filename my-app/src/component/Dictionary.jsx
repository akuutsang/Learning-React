import React from "react";
import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState(" ");
  const [word2, setWord2] = useState(" ");

  useEffect(() => {
    console.log("state updated", word + " " + word2);
  });

  // no dependency array --> update for anystate change asin line 7-9
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Lets get the defination for {word}</h1>
      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      />
      <h2>Lets get the defination for {word2}</h2>
    </>
  );
}
