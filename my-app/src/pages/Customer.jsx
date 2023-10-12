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
  const [error, setError] = useState();
  useEffect(() => {
    if (!tempCustomer) return;
    if (!tempCustomer) return;

    let equal = true;
    if (customer.name !== tempCustomer.name) equal = false;
    if (customer.industry !== tempCustomer.industry) equal = false;
    if (equal) setChanged(false);
  });

  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }

        if (!response.ok) {
          console.log("response", response);
          throw new Error("Something went wrong, try again later");
        }

        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer);
        setError(undefined);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);
  function updateCustomer(e) {
    e.preventDefault();
    const url = baseUrl + "api/customers/" + id;
    fetch(url, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(tempCustomer),
    })
      .then((response) => {
        console.log("response", response);
        if (!response.ok) throw new Error("Something went wrong");
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setChanged(false);
        console.log(data);
        setError(undefined);
      })
      .catch((e) => {
        console.log("e", e);
        setError(e.message);
      });
  }

  return (
    <>
      {notFound ? <p> the customer with id: {id} does not exist</p> : null}
      {customer ? (
        <div>
          <form id="customer">
            <input
              class="m-2 block px-2"
              type="text"
              value={tempCustomer.name}
              onChange={(e) => {
                setChanged(true);
                setTempCustomer({
                  ...tempCustomer,
                  name: e.target.value,
                });
              }}
            />
            <input
              class="m-2 block px-2"
              type="text"
              value={tempCustomer.industry}
              onChange={(e) => {
                setChanged(true);
                setTempCustomer({
                  ...tempCustomer,
                  industry: e.target.value,
                });
              }}
            />
          </form>
          {changed ? (
            <>
              <button
                className="m-2"
                onClick={(e) => {
                  setTempCustomer({ ...customer });
                  setChanged(false);
                }}
              >
                Cancel
              </button>{" "}
              <button form="customer" className="m-2" onClick={updateCustomer}>
                Save
              </button>{" "}
            </>
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
                  setError(e.message);
                });
            }}
          >
            Delete
          </button>
        </div>
      ) : null}
      {error ? <p>{error}</p> : null}
      <br />
      <Link to="/customers">Return to list</Link>
    </>
  );
}
