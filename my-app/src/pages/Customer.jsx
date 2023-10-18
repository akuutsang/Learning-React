import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../App";
import { baseUrl } from "../Shared";

export default function Customer() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();
  const { id } = useParams();
  const [tempCustomer, setTempCustomer] = useState();
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
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
    fetch(url, {
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    })
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          setLoggedIn(false);
          navigate("/login", {
            state: {
              previousUrl: location.pathname,
            },
          });
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
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      body: JSON.stringify(tempCustomer),
    })
      .then((response) => {
        console.log("response", response);
        if (response.status === 401) {
          setLoggedIn(false);
          navigate("/login", {
            state: {
              previousUrl: location.pathname,
            },
          });
        }
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
    <div className="p-3">
      {notFound ? <p> the customer with id: {id} does not exist</p> : null}
      {customer ? (
        <div>
          <form
            className=" w-full max-w-sm"
            id="customer"
            onSubmit={updateCustomer}
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <label for="name">Name</label>
              </div>
              <div className="md:w-3/4">
                <input
                  id="name"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <label for="industry">Industry</label>
              </div>
              <div className="md:w-3/4">
                <input
                  id="industry"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              </div>
            </div>
          </form>
          {changed ? (
            <div className="mb-2">
              <button
                className="px-4 py-1 text-sm text-purple-600 font-semibold mr-2 rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                onClick={(e) => {
                  setTempCustomer({ ...customer });
                  setChanged(false);
                }}
              >
                Cancel
              </button>{" "}
              <button
                form="customer"
                className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Save
              </button>{" "}
            </div>
          ) : null}

          <div>
            <button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={(e) => {
                const url = baseUrl + "api/customers/" + id;
                fetch(url, {
                  method: "DELETE",
                  headers: {
                    "content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access"),
                  },
                })
                  .then((response) => {
                    if (response.status === 401) {
                      setLoggedIn(false);
                      navigate("/login", {
                        state: {
                          previousUrl: location.pathname,
                        },
                      });
                    }
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
        </div>
      ) : null}
      {error ? <p>{error}</p> : null}
      <br />
      <Link to="/customers">
        <button className="no-underline text-white bg-gradient-to-br from-purple-200 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          ← Go back
        </button>
      </Link>
    </div>
  );
}
