import type { Employee } from "../data/employees";
import EmployeeActions from "./EmployeeActions";
import StatusBadge from "./StatusBadge";
import EmployeeAvatar from "./EmployeeAvatar";


interface EmployeeRowProps {
  employee: Employee;
}

function EmployeeRow({ employee }: EmployeeRowProps) {
  return (
    <tr
      className="
        border-b
        border-slate-100
        transition-colors
        last:border-b-0
        hover:bg-slate-50
      "
    >
      {/* Employee ID */}
      <td className="px-6 py-4 text-sm font-medium text-slate-700">
        {employee.employeeId}
      </td>

      {/* Employee Name */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">

          {/* Avatar */}
          {/* <EmployeeAvatar employee={employee} /> */}

          {/* Full Name */}
          <span className="text-sm font-semibold text-slate-900">
            {employee.firstName} {employee.lastName}
          </span>
        </div>
      </td>

      {/* Email */}
      <td className="px-6 py-4 text-sm text-slate-600">
        {employee.email}
      </td>

      {/* Department */}
      <td className="px-6 py-4 text-sm text-slate-600">
        {employee.department}
      </td>

      {/* Manager */}
      <td className="px-6 py-4 text-sm text-slate-600">
        {employee.manager}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <StatusBadge status={employee.status} />
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <EmployeeActions employee={employee} />
      </td>
    </tr>
  );
}

export default EmployeeRow;