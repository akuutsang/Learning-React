import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../Shared";

function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    const url = baseUrl + "api/customers/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);
  return (
    <>
      <h1>Here are our customers</h1>
      <ul>
        {customers
          ? customers.map((customer) => {
              return (
                <li key={customer.id}>
                  <Link to={"/customers/" + customer.id}>{customer.name}</Link>
                </li>
              );
            })
          : ""}
      </ul>
    </>
  );
}

export default Customers;
