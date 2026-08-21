import FilterSelect from "./FilterSelect";

// Props received from EmployeePage.
interface EmployeeFiltersProps {
  departmentFilter: string;
  setDepartmentFilter: (value: string) => void;

  managerFilter: string;
  setManagerFilter: (value: string) => void;

  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

function EmployeeFilters({
  departmentFilter,
  setDepartmentFilter,
  managerFilter,
  setManagerFilter,
  statusFilter,
  setStatusFilter,
}: EmployeeFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">

      {/* Department filter */}
      <FilterSelect
        label="All Departments"
        value={departmentFilter}
        onChange={setDepartmentFilter}
        options={[
          "Engineering",
          "HR",
          "Finance",
          "Management",
        ]}
      />

      {/* Manager filter */}
      <FilterSelect
        label="All Managers"
        value={managerFilter}
        onChange={setManagerFilter}
        options={[
          "Sarah Wilson",
          "Michael Brown",
          "David Miller",
        ]}
      />

      {/* Status filter */}
      <FilterSelect
        label="All Statuses"
        value={statusFilter}
        onChange={setStatusFilter}
        options={[
          "Active",
          "Inactive",
        ]}
      />

    </div>
  );
}

export default EmployeeFilters;