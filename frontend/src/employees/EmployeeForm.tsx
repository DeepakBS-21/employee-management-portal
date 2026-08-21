import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

/*
 * This interface describes all the data
 * that our EmployeeForm will collect.
 */
export interface EmployeeFormData {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  manager: string;
  status: string;
}

/*
 * The parent component gives EmployeeForm
 * an onSubmit function.

 * When the user clicks Save,
 * EmployeeForm will send the formData
 * back to the parent.
 */
interface EmployeeFormProps {
  onSubmit: (formData: EmployeeFormData) => void;
}

function EmployeeForm({ onSubmit }: EmployeeFormProps) {
  /*
   * All form values are stored in one object.
   */
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EmployeeFormData>({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    manager: "",
    status: "Active",
  });

  /*
   * One change handler is used by all
   * text inputs and select elements.
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  /*
   * This runs when the form is submitted.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(formData);
  };

  /*
   * Clears the form values.
   */
  const handleReset = () => {
    setFormData({
      employeeId: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      manager: "",
      status: "Active",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* =========================
          Employee Information
      ========================== */}

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900">
          Employee Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Enter the basic employee information.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="Employee ID"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <Input
          label="First Name"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Input
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* =========================
          Organization Information
      ========================== */}

      <div className="mb-8 mt-10">
        <h2 className="text-lg font-semibold text-slate-900">
          Organization Details
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Assign the employee to a department and manager.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Select
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          options={[
            {
              label: "Select Department",
              value: "",
            },
            {
              label: "IT",
              value: "IT",
            },
            {
              label: "HR",
              value: "HR",
            },
            {
              label: "Finance",
              value: "Finance",
            },
          ]}
        />

        <Input
          label="Manager"
          name="manager"
          placeholder="Enter manager name"
          value={formData.manager}
          onChange={handleChange}
        />

        <Select
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          options={[
            {
              label: "Active",
              value: "Active",
            },
            {
              label: "Inactive",
              value: "Inactive",
            },
          ]}
        />
      </div>

      {/* =========================
          Buttons
      ========================== */}

      <div className="mt-10 flex justify-end gap-3 border-t border-slate-200 pt-6">
        <Button
          type="button"
          variant="danger"
          onClick={() => navigate("/employees")}
        >
          Cancel
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button type="submit" variant="primary">
          Save Employee
        </Button>
      </div>
    </form>
  );
}

export default EmployeeForm;