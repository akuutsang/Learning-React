// import "./index.css"
import { useState } from "react" 
import Employee from "./component/Employee"


function App() {
  const [role, setRole] = useState("dev");
  const  [employees, setEmployees] = useState([
    {
    id: 1,
    name:"Julius",
    role:"", 
    img:"/Assets/Images/julz.jpeg",
    },
    {
    id: 2,
    name:"Abi",
    role:"Project Manager", 
    img:"/Assets/Images/Audrey.jpeg",
    },
    {
    id: 3,
    name:"Abok",
    role:"FrontEnd", 
    img:"/Assets/Images/saboy.jpeg",
    },
    {
     id: 4,
     name:"Akutsang",
     role:"", 
     img:"/Assets/Images/akutsang.png",
    },
    {
     id: 5,
     name:"Abi",
     role:"BackEnd", 
     img:"/Assets/Images/Tori.jpeg",
    },
  ]
  
  );
  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return {...employee, name: newName, role : newRole}
        // ..employee is a short way of directing the function to be able to 
        // change all objects of the variable in this case employees.
        // other wise you can set them as parameters in the function and asign them in the return 
      }
       return employee;

    })
    setEmployees(updatedEmployees)
    // console.log("updateEmployee inside of App.js")
  }


  const showEmployees = true;

  

  return (
    
    <div className="App ">
    {showEmployees ? (
      <>
        <input 
          type='text' 
          onChange={(e)=>{
             setRole(e.target.value);
          }}
        />

        <div className="flex flex-wrap justify-center ">
          {employees.map((employee) => {
            return(
              <Employee                 
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role} 
                img={employee.img}   
                updateEmployee={updateEmployee}           
                />
              );
          })}
        </div> 
   </>
      ): ("access denied!")} 
      
    </div>
    
      );
}

export default App;
