import React from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <label
        className="self-start text-xs font-medium text-black"
        style={{
          fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        {label}{" "}
        {required && <span style={{ color: "rgba(255,0,0,1)" }}>*</span>}
      </label>
      {children || (
        <div className="flex shrink-0 mt-1.5 rounded-xl border border-solid border-stone-300 h-[30px]" />
      )}
    </div>
  );
};

export default FormField;
