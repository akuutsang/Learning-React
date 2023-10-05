import "./index.css";
import Header from "./component/header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Dictionary from "./pages/Dictionary";
import Definition from "./component/Definition";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/definition" element={<Definition />}></Route>
          <Route path="/definition/:search" element={<Definition />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
