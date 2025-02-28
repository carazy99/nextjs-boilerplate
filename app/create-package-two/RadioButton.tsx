import React from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
}) => {
  return (
    <div className="flex gap-1.5">
      <div className="flex shrink-0 self-start w-2.5 h-2.5 bg-white border border-solid border-stone-300 rounded-[100px]">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="opacity-0 absolute"
          aria-label={label}
        />
      </div>
      <label className="text-xs font-medium text-black">{label}</label>
    </div>
  );
};

export default RadioButton;
