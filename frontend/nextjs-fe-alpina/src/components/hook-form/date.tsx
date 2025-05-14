import { useRef } from "react";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";
import CalendarIcon from "@/assets/images/icons/calendar.svg"; // Import your icon

type Props = {
  name: string;
  label?: string;
};

export function DateInput({ name, label }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Get form context

  // Safely extract error message as a string
  const errorMessage = errors[name]?.message as string | undefined;

  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.preventDefault(); // Ensure it doesn't trigger default behaviors like form submission
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Call showPicker only after the click event
    }
  };

  return (
    <div>
      <label
        className={`relative group flex items-center h-[62px] rounded-full border p-[10px_24px] gap-[10px] bg-[#F9FAFB] transition-all duration-300 ${
          errorMessage
            ? "border-red-500 focus-within:ring-red-500"
            : "border-[#EFF2F7] focus-within:ring-[#362EED]"
        }`}
        onClick={handleLabelClick}
      >
        {/* Calendar Icon */}
        <Image
          src={CalendarIcon}
          width={24}
          height={24}
          alt="calendar-icon"
          className="w-6 h-6 flex shrink-0"
        />

        <div className="w-full flex flex-col-reverse">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <input
                type="date"
                {...field} // Automatically wire up onChange, value, onBlur, etc.
                ref={dateInputRef}
                className={`peer appearance-none outline-none bg-transparent font-semibold invalid:absolute invalid:-z-10 [&::-webkit-calendar-picker-indicator]:!opacity-0 ${
                  errorMessage ? "border-red-500" : ""
                }`}
                required
              />
            )}
          />
          {/* Label */}
          <p className="text-alpina-light-grey peer-valid:text-xs peer-valid:leading-[18px]">
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
