// import "./index.css"
import { useState } from "react" 
import Employee from "./component/Employee"
import { v4 as uuidv4 } from 'uuid';


function App() {
  const showEmployee =true;
  const [role, setRole] = useState("dev");
  const  [employees, setEmployees] = useState([
    {
      name:"Julius",
      role:"", 
      img:"/Assets/Images/julz.jpeg",
      },
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
    <div className="App ">
    {showEmployee ? (
      <>
        <input 
          type='text' 
          onChange={(e)=>{
             setRole(e.target.value);
          }}
        />

        <div className="flex flex-wrap justify-center  ">
          {employees.map((employee) => {
            // console.log(uuidv4())
            return(
              <Employee 
                key={uuidv4()}
                // to set a unique key without having to manually type it
                // simply install uuid on the terminal i.e npm install uuid
                // import it on the js file i.e import { v4 as uuidv4 } from 'uuid';
                // then pass it as the key value i.e key{uuidv4}
                // you can console.log it to view the unique key value on your console.
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
