import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from "./DefinitionSearch";
import NotFound from "./NotFound";

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let { search } = useParams();

  useEffect(() => {
    // const url = "https://htjijuhgouyghj00";
    // assuming we use an inavalid url, the .catch should be able to handle the error message
    // const url = "https://httpstat.us/500";
    // if we use this url our code will run line 27 and return line 54
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
        } else if (response.status === 500) {
          setError(true);
        }
        if (!response.ok) {
          setError(true);

          throw new Error("try again");
        }
        return response.json();
      })
      .then((data) => {
        console.log("hi");
        if (data[0]?.meanings) {
          setWord(data[0].meanings);
        } else {
          setNotFound(true);
        }
      })

      .catch((e) => {
        console.log("me", e);
      });
  }, []);
  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search another word</Link>
      </>
    );
  }
  if (error === true) {
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
