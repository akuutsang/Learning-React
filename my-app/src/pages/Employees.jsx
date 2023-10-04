import "../index.css";
import { useState } from "react";
import AddEmployee from "../component/AddEmployee";
import Employee from "../component/Employee";
import EditEmployee from "../component/EditEmployee";
import { v4 as uuidv4 } from "uuid";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Julius",
      role: "",
      img: "/Assets/Images/julz.jpeg",
    },
    {
      id: 2,
      name: "Abi",
      role: "Project Manager",
      img: "/Assets/Images/Audrey.jpeg",
    },
    {
      id: 3,
      name: "Abok",
      role: "FrontEnd",
      img: "/Assets/Images/saboy.jpeg",
    },
    {
      id: 4,
      name: "Akutsang",
      role: "",
      img: "/Assets/Images/akutsang.png",
    },
    {
      id: 5,
      name: "Akare",
      role: "BackEnd",
      img: "/Assets/Images/Tori.jpeg",
    },
    {
      id: 6,
      name: "Limaro",
      role: "Andriod Developer",
      img: "/Assets/Images/lima.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
        // ..employee is a short way of directing the function to be able to
        // change all objects of the variable in this case employees.
        // other wise you can set them as parameters in the function and asign them in the return
      }
      return employee;
    });

    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployees = true;
  return (
    <div className="Employees">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        "access denied!"
      )}
    </div>
  );
}

export default Employees;
