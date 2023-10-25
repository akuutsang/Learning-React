import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AddCustomer from "../component/AddCustomer";
import { baseUrl } from "../Shared";
import { LoginContext } from "../App";
import UseFetch from "../hooks/UseFetch";

export default function Customers() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  // const [customers, setCustomers] = useState();
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }
  const navigate = useNavigate();
  const location = useLocation();
  const url = baseUrl + "api/customers/";

  const {
    request,
    appendData,
    data: { customers } = {},
    errorStatus,
  } = UseFetch(url, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"),
    },
  });

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    // console.log(request, appendData, customers, errorStatus);
  });
  // useEffect(() => {
  //   const url = baseUrl + "api/customers/";
  //   fetch(url, {
  //     headers: {
  //       "content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("access"),
  //     },
  //   })
  //     .then((response) => {
  //       if (response.status === 401) {
  //         setLoggedIn(false);
  //         navigate("/login", {
  //           state: {
  //             previousUrl: location.pathname,
  //           },
  //         });
  //       }

  //       return response.json();
  //     })
  //     .then((data) => {
  //       setCustomers(data.customers);
  //     });
  // }, []);

  function newCustomer(name, industry) {
    appendData({ name: name, industry: industry });

    if (!errorStatus) {
      toggleShow();
    }
  }
  return (
    <>
      <h1>Here are our customers</h1>
      <ul>
        {customers
          ? customers.map((customer) => {
              return (
                <div className="m-2" key={customer.id}>
                  <Link to={"/customers/" + customer.id}>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      {" "}
                      {customer.name}
                    </button>
                  </Link>
                </div>
              );
            })
          : ""}
      </ul>
      <AddCustomer
        newCustomer={newCustomer}
        show={show}
        toggleShow={toggleShow}
      />
    </>
  );
}
