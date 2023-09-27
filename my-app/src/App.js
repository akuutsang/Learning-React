import Employee from "./component/employee/Employee"
import { useState } from "react" 

function App() {
  const showEmployee =true;
  const [role, setRole] = useState("dev");

  return (
    <div className="App ">
      {showEmployee ? (
      <>
        <input type='text' onChange={(e)=>{
          setRole(e.target.value)
        }}/>

        <Employee name="Abi" role="intern" />
        <Employee name="Abok" role="intern"/>
        <Employee name="Akutsang" role={role}/>
        <Employee name="Akare" role="intern"/>
      </>
      ): ("access denied!")}
    </div>
  );
}

export default App;
