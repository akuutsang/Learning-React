import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UseFetch(url, { method, headers, body } = {}) {
  const [data, setData] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState();

  function request() {
    fetch(url, {
      method: method,
      headers: headers,
      body: body,
    })
      .then((response) => {
        if (response.status === 401) {
          navigate("/login", {
            state: {
              previousUrl: location.pathname,
            },
          });
        }
        if (!response.ok) {
          throw response.status;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setErrorStatus(e);
      });
  }
  function appendData(newData) {
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(newData),
    })
      .then((response) => {
        if (response.status === 401) {
          navigate("/login", {
            state: {
              previousUrl: location.pathname,
            },
          });
        }
        if (!response.ok) {
          throw response.status;
        }
        return response.json();
      })
      .then((d) => {
        const submitted = Object.values(d)[0];
        const newState = { ...data };
        setData(newState);
        Object.values(newState)[0].push(submitted);
      })
      .catch((e) => {
        setErrorStatus(e);
      });
  }

  return { request, appendData, data, errorStatus };
}
