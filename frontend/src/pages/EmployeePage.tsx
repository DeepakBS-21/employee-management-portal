import { useState } from "react";
import { employees } from "../data/employees";
import EmployeeFilters from "../employees/EmployeeFilters";
import EmployeeTable from "../employees/EmployeeTable";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function EmployeePage() {

    const [searchTerm, setSearchTerm] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("all");
    const [managerFilter, setManagerFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");
    const navigate = useNavigate();
    // const [selectedEmployee, setSelectedEmployee] =
    //     useState < Employee | null > (null);

    // Reset all filters back to their default values
    const handleClearFilters = () => {
        setSearchTerm("");
        setDepartmentFilter("all");
        setManagerFilter("all");
        setStatusFilter("all");
    };

    const activeFilterCount = [
        departmentFilter !== "all",
        managerFilter !== "all",
        statusFilter !== "all",
    ].filter(Boolean).length;

    const filteredEmployees = employees.filter((employee) => {
        const search = searchTerm.toLowerCase();
        const matchSearch =
            employee.employeeId.toLowerCase().includes(search) ||
            employee.firstName.toLowerCase().includes(search) ||
            employee.lastName.toLowerCase().includes(search) ||
            employee.email.toLowerCase().includes(search);

        const matchesDepartment =
            departmentFilter === "all" || employee.department === departmentFilter;

        const matchesManager =
            managerFilter === "all" || employee.manager === managerFilter;

        const matchesStatus =
            statusFilter === "all" ||
            employee.status === statusFilter;

        return (
            matchSearch && matchesDepartment && matchesManager && matchesStatus
        );
    });



    return (

        <div>
            {/* header */}
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Employee Overview
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Monitor and manage employee details
                    </p>
                </div>

                {/* Add employee button */}
                <Button variant="primary"
                    onClick={() => navigate("/employees/add")}>

                    + Add Employee
                </Button>

            </div>
            {/* search */}
            <div
                className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                <div className="overflow-x-auto">

                    <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <input type="text" value={searchTerm}
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                            }}
                            placeholder="Search by employee ID, name or email..."
                            className="
                    w-full
                    rounded-lg
                    border
                    border-slate-300
                    px-4
                    py-2.5
                    text-sm
                    text-slate-900
                    outline-none
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                    "/>


                    </div>

                    {/* Filters + Clear Filters button */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="mt-3 ml-4 text-sm font-semibold text-slate-800">
                                    Filters
                                </span>

                                {activeFilterCount > 0 && (
                                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                                        {activeFilterCount} active
                                    </span>
                                )}
                            </div>

                           
                        
                        </div>

                        <EmployeeFilters
                            departmentFilter={departmentFilter}
                            setDepartmentFilter={setDepartmentFilter}

                            managerFilter={managerFilter}
                            setManagerFilter={setManagerFilter}

                            statusFilter={statusFilter}
                            setStatusFilter={setStatusFilter}
                        />


                        {activeFilterCount > 0 && (
                            <div className="mt-4 flex flex-wrap items-center gap-2">

                                <span className="text-xs font-medium text-slate-500">
                                    Active filters:
                                </span>

                                {departmentFilter !== "all" && (
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                        Department: {departmentFilter}
                                    </span>
                                )}

                                {managerFilter !== "all" && (
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                        Manager: {managerFilter}
                                    </span>
                                )}

                                {statusFilter !== "all" && (
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                        Status: {statusFilter}
                                    </span>
                                )}

                            </div>
                        )}




                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleClearFilters}
                        >
                            Clear all
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <EmployeeTable
                            employees={filteredEmployees}
                        />

                    </div>
                </div>

            </div>

        </div>
    );
}

export default EmployeePage;