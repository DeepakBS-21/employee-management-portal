// This is our temporary database.

export interface Employee {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  manager: string;
  status: "Active" | "Inactive";
}

export const employees: Employee[] = [
  {
    id: 1,
    employeeId: "EMP-001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    department: "Engineering",
    manager: "Sarah Wilson",
    status: "Active",
  },
  {
    id: 2,
    employeeId: "EMP-002",
    firstName: "Sarah",
    lastName: "Wilson",
    email: "sarah.wilson@company.com",
    department: "Engineering",
    manager: "Michael Brown",
    status: "Active",
  },
  {
    id: 3,
    employeeId: "EMP-003",
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@company.com",
    department: "HR",
    manager: "David Smith",
    status: "Active",
  },
  {
    id: 4,
    employeeId: "EMP-004",
    firstName: "David",
    lastName: "Smith",
    email: "david.smith@company.com",
    department: "Finance",
    manager: "Michael Brown",
    status: "Inactive",
  },
  {
    id: 5,
    employeeId: "EMP-005",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@company.com",
    department: "Management",
    manager: "CEO",
    status: "Active",
  },
];