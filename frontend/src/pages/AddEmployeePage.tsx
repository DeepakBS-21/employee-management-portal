import EmployeeForm, {
  type EmployeeFormData,
} from "../employees/EmployeeForm";

function AddEmployeePage() {

  const handleSubmit = (formData: EmployeeFormData) => {
    console.log("Employee submitted:", formData);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Employee Overview
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor and manage employee details
        </p>
      </div>

      {/* Employee Form */}
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddEmployeePage;