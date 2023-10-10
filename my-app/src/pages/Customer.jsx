import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import NotFound from "../component/NotFound";
import { baseUrl } from "../Shared";

export default function Customer() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();
  const { id } = useParams();
  const [tempCustomer, setTempCustomer] = useState();

  useEffect(() => {
    console.log("customer", customer);
    console.log("tempCustomer", tempCustomer);
  });

  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer);
      });
  }, []);
  return (
    <>
      {notFound ? <p> the customer with id: {id} does not exist</p> : null}
      {customer ? (
        <div>
          <p class="m-2 block px-2" type="text">
            ID:{tempCustomer.id}{" "}
          </p>
          <input
            class="m-2 block px-2"
            type="text"
            value={tempCustomer.name}
            onChange={(e) => {
              setTempCustomer({ ...tempCustomer, name: e.target.value });
            }}
          />
          <input
            class="m-2 block px-2"
            type="text"
            value={tempCustomer.industry}
            onChange={(e) => {
              setTempCustomer({ ...tempCustomer, industry: e.target.value });
            }}
          />
        </div>
      ) : null}
      <button
        onClick={(e) => {
          const url = baseUrl + "api/customers/" + id;
          fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "Application/json",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("something went wrong");
              }
              navigate("/customers");
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Delete
      </button>
      <br />
      <Link to="/customers">Return to list</Link>
    </>
  );
}
