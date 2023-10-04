import "./index.css";
import Header from "./component/header";
import Employees from "./pages/Employees";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";

function App() {
  return (
    <Header>
      <Routes>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
      </Routes>
    </Header>
  );
}

export default App;
