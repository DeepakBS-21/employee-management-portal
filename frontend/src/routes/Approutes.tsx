import { Routes, Route } from "react-router-dom";

import EmployeePage from "../pages/EmployeePage";
import AddEmployeePage from "../pages/AddEmployeePage";
import Login from "../pages/auth/Login";
import RefExample from "../components/practice/RefExample";
import UserInfo from "../components/practice/UserInfo";

function AppRoutes() {
  return (
    <Routes>
      {/* Show Login page first */}
      <Route path="/" element={<Login />} />

      {/* Employee Management */}
      <Route path="/employees" element={<EmployeePage />} />
      <Route path="/employees/add" element={<AddEmployeePage />} />

      {/* Practice Routes */}
      <Route path="/ref-example" element={<RefExample />} />
      <Route path="/user-info" element={<UserInfo />} />
    </Routes>
  );
}

export default AppRoutes;