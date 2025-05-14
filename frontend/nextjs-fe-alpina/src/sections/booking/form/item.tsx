import ArrowCircleDown from "@/assets/images/icons/arrow-circle-down.svg";
import Timer from "@/assets/images/icons/timer.svg";
import Calendar from "@/assets/images/icons/calendar.svg";
import SecurityUserBlack from "@/assets/images/icons/security-user-black.svg";
import SMS from "@/assets/images/icons/sms.svg";
import Call from "@/assets/images/icons/call.svg";
import { FormItemDetail } from "./item-detail";
import Image from "next/image";
import { useState } from "react";
import moment from "moment";
type Props = {
  duration: number;
  started_at: string;
  name: string;
  email: string;
  phone: string;
};

export const FormItem = ({
  duration,
  started_at,
  name,
  email,
  phone,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const bookingDetails = [
    {
      label: "Duration",
      icon: Timer,
      value: `${duration} Days Ahead`,
    },
    {
      label: "Rented At",
      icon: Calendar,
      value: moment(started_at).format("MMMM D, YYYY"),
    },
    { label: "Full Name", icon: SecurityUserBlack, value: name },
    { label: "Email Address", icon: SMS, value: email },
    { label: "Phone Number", icon: Call, value: phone },
  ];

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="Booking-Details" className="px-4 mt-5 z-10">
      <div
        className={`accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-[64px]"
        }`}
      >
        <label
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleAccordion}
        >
          <p className="font-bold">Booking Details</p>
          <Image
            src={ArrowCircleDown}
            alt="dropdown"
            width={24}
            height={24}
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </label>
        <div
          className={`mt-4 flex flex-col gap-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {bookingDetails.map(({ label, icon, value }) => (
            <FormItemDetail
              key={label}
              label={label}
              icon={icon}
              value={value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
