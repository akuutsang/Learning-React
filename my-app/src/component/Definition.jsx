import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from "./DefinitionSearch";
import NotFound from "./NotFound";
import UseFetch from "../hooks/UseFetch";

export default function Definition() {
  // const [word, setWord] = useState();
  // const [notFound, setNotFound] = useState(false);
  // const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let { search } = useParams();
  const [word, errorStatus] = UseFetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + search
  );

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
      {word?.[0]?.meanings ? (
        <>
          <h1>Here is a definition</h1>
          {word[0].meanings.map((meaning) => {
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
