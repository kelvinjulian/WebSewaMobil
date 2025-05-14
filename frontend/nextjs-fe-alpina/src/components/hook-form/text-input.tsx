import React from "react";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  type?: string;
  label?: string;
  iconSrc?: string;
  name: string;
  placeholder?: string;
  fullWidth?: boolean;
};

export function TextInput({
  type = "text",
  label,
  iconSrc,
  name,
  placeholder,
  fullWidth = false,
}: Props) {
  const formHook = useFormContext(); // Get form context
  const {
    control,
    formState: { errors },
  } = formHook; // Destructure values from formHook

  // Safely extract error message as a string
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={fullWidth ? "w-full" : "w-auto"}>
      <label
        className={`group flex items-center h-[62px] rounded-full border p-[10px_24px] gap-[10px] bg-[#F9FAFB] transition-all duration-300 ${
          fullWidth ? "w-full" : "w-auto"
        } ${
          errorMessage
            ? "border-red-500 focus-within:ring-red-500"
            : "border-[#EFF2F7] focus-within:ring-[#362EED]"
        }`}
      >
        {iconSrc && (
          <Image
            src={iconSrc}
            width={24}
            height={24}
            alt="icon"
            className="w-6 h-6 flex shrink-0"
          />
        )}
        <div className="w-full flex flex-col-reverse">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input
                type={type}
                {...field} // Automatically wire up onChange, value, onBlur, etc.
                placeholder={placeholder}
                className={`peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey ${
                  errorMessage ? "border-red-500" : ""
                }`}
              />
            )}
          />
          <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden">
            {label}
          </p>
        </div>
      </label>
      {/* Safely render the error message as a string */}
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
