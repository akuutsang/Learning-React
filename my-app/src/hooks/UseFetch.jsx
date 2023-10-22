import { useState, useEffect } from "react";

export default function UseFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return data;
}
