import { useState } from "react";
import type { Employee } from "../data/employees";

// Props received from EmployeeTable.
interface EmployeeActionsProps {
  // Complete employee information.
  employee: Employee;
}

function EmployeeActions({ employee }: EmployeeActionsProps) {

  // Controls whether the dropdown is visible.
  const [isOpen, setIsOpen] = useState(false);

  // Open / close the dropdown.
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">

      {/* Three-dot action button */}
      <button
        type="button"
        onClick={handleToggle}
        className="
          rounded-lg
          px-3
          py-2
          text-lg
          font-bold
          text-slate-600
          hover:bg-slate-100
        "
      >
        ⋮
      </button>

      {/* Show dropdown only when isOpen is true */}
      {isOpen && (
        <div
          className="
            absolute
            right-0
            z-10
            mt-2
            w-44
            rounded-lg
            border
            border-slate-200
            bg-white
            py-1
            shadow-lg
          "
        >

          {/* View Employee */}
          <button
            type="button"
            onClick={() => {
              console.log("View employee:", employee.id);
            }}
            className="
              block
              w-full
              px-4
              py-2
              text-left
              text-sm
              text-slate-700
              hover:bg-slate-50
            "
          >
            View Employee
          </button>

          {/* Edit Employee */}
          <button
            type="button"
            onClick={() => {
              console.log("Edit employee:", employee.id);
            }}
            className="
              block
              w-full
              px-4
              py-2
              text-left
              text-sm
              text-slate-700
              hover:bg-slate-50
            "
          >
            Edit Employee
          </button>

          {/* Activate / Deactivate */}
          <button
            type="button"
            onClick={() => {
              console.log(
                "Activate / Deactivate employee:",
                employee.id
              );
            }}
            className="
              block
              w-full
              px-4
              py-2
              text-left
              text-sm
              text-slate-700
              hover:bg-slate-50
            "
          >
            Activate / Deactivate
          </button>

          {/* Delete Employee */}
          <button
            type="button"
            onClick={() => {
              console.log("Delete employee:", employee.id);
            }}
            className="
              block
              w-full
              px-4
              py-2
              text-left
              text-sm
              text-red-600
              hover:bg-red-50
            "
          >
            Delete Employee
          </button>

        </div>
      )}
    </div>
  );
}

export default EmployeeActions;