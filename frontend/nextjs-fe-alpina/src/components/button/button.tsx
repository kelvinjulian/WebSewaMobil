import React from "react";

type Variant = "blue" | "black" | "red" | "green"; // Add as many color variants as you want

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: Variant;
  type?: "reset" | "submit" | "button";
};

export function Button({
  onClick,
  children,
  fullWidth = false,
  variant = "blue",
  type = "button",
}: Props) {
  const variantClasses = {
    blue: "bg-alpina-blue text-white hover:bg-alpina-blue-dark",
    black: "bg-alpina-black text-white hover:bg-alpina-black-dark",
    red: "bg-red-500 text-white hover:bg-red-600",
    green: "bg-green-500 text-white hover:bg-green-600",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-full py-[14px] px-[24px] font-bold transition-colors duration-300 ${
        variantClasses[variant]
      } ${fullWidth ? "w-full" : "w-auto"}`}
    >
      {children}
    </button>
  );
}
