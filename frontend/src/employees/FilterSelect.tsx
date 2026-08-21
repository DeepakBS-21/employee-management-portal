interface FilterSelectProps {
  // The label displayed above the select input.
  label: string;

  value: string;
  onChange:(value:string) => void;

  options: string[];
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: FilterSelectProps) {
    return(
        <select 
            value={value}
                onChange={(event) => {
                    onChange(event.target.value);
                }}
    className="
     rounded-lg
        border
        border-slate-300
        bg-white
        px-4
        py-2.5
        text-sm
        text-slate-700
        outline-none
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-100
      "
    >
      {/* Default option */}
      <option value="all">
        {label}
      </option>

      {/* Render all options */}
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
}

export default FilterSelect;