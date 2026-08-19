import { Routes, Route } from "react-router-dom";

import EmployeePage from "../pages/EmployeePage";
import AddEmployeePage from "../pages/AddEmployeePage";
function AppRoutes() {
  return (
    <Routes>

      {/* Employee Management page */}
      <Route path="/employees" element={<EmployeePage />} />
      <Route path="/employees/add" element={<AddEmployeePage />} />
    </Routes>
  );
}

export default AppRoutes;