import React from "react";

interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({ disabled, label, ...props }: ButtonProps) => {
  return (
    <button type="button" disabled={disabled ?? true} {...props}>
      {label}
    </button>
  );
};
