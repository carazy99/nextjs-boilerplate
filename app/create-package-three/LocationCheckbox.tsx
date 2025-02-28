"use client";
import React, { useState } from "react";

interface LocationCheckboxProps {
  label: string;
}

const LocationCheckbox: React.FC<LocationCheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex gap-1.5">
      <div
        className={`flex shrink-0 self-start w-2.5 h-2.5 ${
          isChecked ? "bg-yellow-600" : "bg-white"
        } border border-solid border-stone-300 cursor-pointer`}
        onClick={() => setIsChecked(!isChecked)}
        role="checkbox"
        aria-checked={isChecked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsChecked(!isChecked);
            e.preventDefault();
          }
        }}
      />
      <label
        className="cursor-pointer"
        onClick={() => setIsChecked(!isChecked)}
      >
        {label}
      </label>
    </div>
  );
};

export default LocationCheckbox;
