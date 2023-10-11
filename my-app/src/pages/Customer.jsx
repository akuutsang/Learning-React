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
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    // console.log(changed);
    // console.log("customer", customer);
    // console.log("tempCustomer", tempCustomer);
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
  function updateCustomer() {
    const url = baseUrl + "api/customers/" + id;
    fetch(url, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(tempCustomer),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setChanged(false);
        console.log(data);
      })
      .catch(() => {});
  }
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
              setChanged(true);
            }}
          />
          <input
            class="m-2 block px-2"
            type="text"
            value={tempCustomer.industry}
            onChange={(e) => {
              setTempCustomer({ ...tempCustomer, industry: e.target.value });
              setChanged(true);
            }}
          />
          {changed ? (
            <>
              <button
                onClick={(e) => {
                  setTempCustomer({ ...customer });
                  setChanged(false);
                }}
              >
                Cancel
              </button>{" "}
              <button onClick={updateCustomer}>Save</button>{" "}
            </>
          ) : null}
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
