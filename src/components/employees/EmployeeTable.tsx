import type { Employee } from "../../data/employees";
import EmployeeRow from "./EmployeeRow";
// Props reveived from EmployeePage.

interface EmployeeTableProps{
    // The employees that should currently be displayed in the table.
    employees: Employee[];
}

// Reusable employee table component 
// This component is responsible only for
// displaying employee data.
function EmployeeTable({
  employees,
}: EmployeeTableProps) {

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

      {/* Allows the table to scroll horizontally
          on smaller screens. */}
      <div className="overflow-x-auto">

        <table className="w-full">

          {/* ------------------------------------------
              TABLE HEADER
          ------------------------------------------ */}

          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Employee ID</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Email</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Department</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Manager</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Action</th>

            </tr>
          </thead>


          {/* ------------------------------------------
              TABLE BODY
          ------------------------------------------ */}
          <tbody>
            {employees.map((employee) => (
            <EmployeeRow
                key={employee.id}
                employee={employee}
            />
            ))}
        </tbody>
          
        </table>

      </div>

    </div>
  );
}


export default EmployeeTable;