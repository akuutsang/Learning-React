import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from "./DefinitionSearch";
import NotFound from "./NotFound";
import UseFetch from "../hooks/UseFetch";

export default function Definition() {
  let { search } = useParams();
  const {
    request,
    data: [{ meanings: word }] = [{}],
    errorStatus,
  } = UseFetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search);

  useEffect(() => {
    request();
  });
  if (errorStatus === 404) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search another word</Link>
      </>
    );
  }
  if (errorStatus) {
    return (
      <>
        <p> Something went wrong, try again</p>
        <Link to="/dictionary">Search another word</Link>
      </>
    );
  }
  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ":"}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again:</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
