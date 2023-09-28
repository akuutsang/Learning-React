import "./App.css"
import Employee from "./component/employee/Employee"
import { useState } from "react" 
import Abi from "./Assets/Images/Audrey.jpeg"
import Abok from "./Assets/Images/saboy.jpeg"
import Akutsang from "./Assets/Images/akutsang.png"
import Akare from "./Assets/Images/Tori.jpeg"

function App() {
  const showEmployee =true;
  const [role, setRole] = useState("dev");

  return (
    <div className="App">
    {showEmployee ? (
      <>
        <input type='text' onChange={(e)=>{
          setRole(e.target.value)
        }}/>
        <div className="flex flex-wrap">
          <Employee name="Abi" role="Project Manager" img={Abi}/>
          <Employee name="Abok" role="FrontEnd"  img={Abok}/>
          <Employee name="Akutsang" role={role} img={Akutsang}/>
          <Employee name="Akare" role="BackEnd" img={Akare}/>
        </div>
      </>
      ): ("access denied!")} 
      
    </div>
  );
}

export default App;
