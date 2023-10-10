import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddCustomer(props) {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={props.toggleShow}
        className="block mx-auto m-2 px-3 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        + Add Customer
      </button>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setName("");
              setIndustry("");
              props.newCustomer(name, industry);
            }}
            id="editmodal"
            className="w-full max-w-sm"
          >
            <div className="md:flex flex-col   md:items-center mb-6">
              <div className=" m-2 flex flex-row">
                <div className=" md:w-1/3">
                  <label
                    className="p-2 rounded w-full border-2 border-gray-200 h-10 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="name"
                  >
                    Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="name"
                    placeholder="Google"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className=" m-2 flex flex-row">
                <div className="md:w-1/3">
                  <label
                    className="p-2 rounded w-full border-2 border-gray-200 h-10 text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="Industry"
                  >
                    Industry
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="industry"
                    placeholder="Computing"
                    type=""
                    value={industry}
                    onChange={(e) => {
                      setIndustry(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button>
            <button onClick={props.toggleShow} variant="secondary">
              Close
            </button>
          </Button>
          <button
            form="editmodal"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;
