import { useState } from "react";
import { baseUrl } from "../Shared";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      // console.log(location.state.previousUrl);
    }
  });

  function login(e) {
    e.preventDefault();
    const url = baseUrl + "api/token/";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        navigate(
          location?.state?.previousUrl
            ? location.state.previousUrl
            : "/customers"
        );
      });
  }
  return (
    <form className="m-2 w-full max-w-sm" id="customer" onSubmit={login}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
          <label for="UserName">UserName</label>
        </div>
        <div className="md:w-3/4">
          <input
            id="UserName"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
          <label for="Password">Password</label>
        </div>
        <div className="md:w-3/4">
          <input
            id="Password"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <button className="no-underline text-white bg-gradient-to-br from-purple-200 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        login{" "}
      </button>
    </form>
  );
}
