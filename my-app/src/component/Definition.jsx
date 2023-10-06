import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "./NotFound";

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  let { search } = useParams();

  useEffect(() => {
    // const url = "https://htjijuhgouyghj00";
    // const url = "https://httpstat.us/500";
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("/login");
        } else if (response.status === 500) {
          setError(true);
        }
        if (!response.ok) {
          setError(true);

          throw new Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0 && data[0]?.meanings) {
          setWord(data[0].meanings);
        } else {
          setNotFound(true);
        }
      })

      .catch((e) => {});
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
        </>
      ) : null}
    </>
  );
}
