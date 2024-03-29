import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            update
    </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
            onSubmit={(e) => {
              handleClose()
              e.preventDefault();
              props.updateEmployee(props.id, name, role);
              }}
              id="editmodal" 
              className="w-full max-w-sm"
              >
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Full Name
                      </label>
                  </div>
                  <div className="md:w-2/3">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                      id="name" 
                      type="text" 
                      value={name} 
                      onChange ={(e)=>{
                      setName(e.target.value)
                      }}/>
                  </div>
                  <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                        Role
                      </label>
                  </div>
                  <div className="md:w-2/3">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                      id="role" 
                      type="" 
                      value={role}  
                      onChange={(e)=>{
                        setRole(e.target.value)
                      }}/>
                  </div>
                </div>
            
        </form>  
        </Modal.Body>
        <Modal.Footer>
        <Button>
          <button variant="secondary" onClick={handleClose}>Close</button>   
        </Button>
          <button form="editmodal" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button>        
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;