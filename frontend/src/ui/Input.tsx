import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      {/* Input */}
      <input
        {...props}
        className="
          rounded-lg
          border
          border-slate-300
          px-3
          py-2
          text-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
      />

      {/* Error Message */}
      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;