"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles = "text-base font-semibold rounded-md";

  const variantStyles = {
    primary: "bg-yellow-600 text-white px-5 py-2.5",
    outline:
      "bg-white text-yellow-600 border border-yellow-600 border-solid px-8 py-2.5 rounded-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
