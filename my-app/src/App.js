import "./index.css";
import Header from "./component/header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import { createContext, useEffect, useState } from "react";
import Dictionary from "./pages/Dictionary";
import Definition from "./component/Definition";
import NotFound from "./component/NotFound";
import Count from "./component/Count";
import Login from "./pages/Login";
import { baseUrl } from "./Shared";
import Register from "./pages/Register";
import Log from "./component/LifeCycle";

export const LoginContext = createContext();

function App() {
  // long term goal --> use refresh token, if it works, stay logged in, otherwise send to login page
  useEffect(() => {
    function refreshTokens() {
      if (localStorage.refresh) {
        const url = baseUrl + "api/token/refresh/";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            localStorage.access = data.access;
            localStorage.refresh = data.refresh;
            setLoggedIn(true);
          });
      }
    }
    const minutes = 60000 * 15;
    refreshTokens();
    setInterval(refreshTokens, minutes * 3);
  }, []);
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);
  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
    }
  }
  return (
    <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/customers/:id" element={<Customer />}></Route>
            <Route path="/dictionary" element={<Dictionary />}></Route>
            <Route path="/dictionary/:search" element={<Definition />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/count" element={<Count />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/lifecycle" element={<Log />}></Route>
          </Routes>
        </Header>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
