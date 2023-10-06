import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
  const [word, setWord] = useState(" ");
  const navigate = useNavigate();

  return (
    <form
      className="flex space-between space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate("/dictionary/" + word);
      }}
    >
      <input
        className="shrink min-w-0 px-2 rounded py-2"
        placeholder="type the word"
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />

      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 ">
        Search
      </button>
    </form>
  );
}
