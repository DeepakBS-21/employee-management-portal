import React from "react";


interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
        label: string;
        options: SelectOption[];
        error?: string;
    }

function Select ({
    label,
    options,
    error,
    ...props
}: SelectProps) {
     return (
    <div className="flex flex-col gap-1">
      
      {/* Label */}
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      {/* Select */}
      <select
        {...props}
        className="
          rounded-lg
          border
          border-slate-300
          bg-white
          px-3
          py-2
          text-sm
          text-slate-900
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Error message */}
      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
export default Select;