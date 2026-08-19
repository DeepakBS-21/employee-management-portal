import type { Employee } from "../../data/employees";

interface EmployeeAvatarProps {
  employee: Employee;
}

function EmployeeAvatar({ employee }: EmployeeAvatarProps) {
  // Create initials from first and last name
  const initials = `${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}`;

  return (
    <div
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        bg-blue-100
        text-sm
        font-semibold
        text-blue-600
      "
    >
      {initials}
    </div>
  );
}

export default EmployeeAvatar;