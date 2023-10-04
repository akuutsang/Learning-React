import "./index.css";
import { useState } from "react";
import AddEmployee from "./component/AddEmployee";
import Employee from "./component/Employee";
import EditEmployee from "./component/EditEmployee";
import { v4 as uuidv4 } from "uuid";
import Header from "./component/header";
import Employees from "./pages/Employees";

function App() {
  return (
    <Header>
      <Employees />
    </Header>
  );
}

export default App;
