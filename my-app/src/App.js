import "./index.css";
import Header from "./component/header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";

import Dictionary from "./pages/Dictionary";
import Definition from "./component/Definition";
import NotFound from "./component/NotFound";
import Count from "./component/Count";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/customers/:id" element={<Customer />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/dictionary/:search" element={<Definition />}></Route>
          <Route path="/404" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/count" element={<Count />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
