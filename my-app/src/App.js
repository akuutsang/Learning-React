import "./index.css"
import { useState } from "react" 
import Employee from "./component/employee/Employee"
import { v4 as uuidv4 } from 'uuid';


function App() {
  const showEmployee =true;
  const [role, setRole] = useState("dev");
  const  [employees, setEmployees] = useState([
    {
    name:"Abi",
    role:"Project Manager", 
    img:"/Assets/Images/Audrey.jpeg",
    },
    {
    name:"Abok",
    role:"FrontEnd", 
    img:"/Assets/Images/saboy.jpeg",
    },
    {
     name:"Akutsang",
     role:"", 
     img:"/Assets/Images/akutsang.png",
    },
    {
     name:"Abi",
     role:"BackEnd", 
     img:"/Assets/Images/Tori.jpeg",
    },
  ]);


  return (
    <div className="App">
    {showEmployee ? (
      <>
        <input 
          type='text' 
          onChange={(e)=>{
             setRole(e.target.value);
          }}
        />
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            console.log(uuidv4())
            return(
              <Employee 
                key={uuidv4()}
                name={employee.name}
                role={employee.role} 
                img={employee.img}              
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
