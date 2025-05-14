import Image from "next/image";
import Timer from "@/assets/images/icons/timer.svg";
import SecurityUserBlack from "@/assets/images/icons/security-user-black.svg";
import SMS from "@/assets/images/icons/sms.svg";
import Call from "@/assets/images/icons/call.svg";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";
import { TopBar } from "../top-bar";
import { FormHeaderInformation } from "./header";
import { Vehicle } from "@/types";
import { DateInput, TextInput } from "@/components/hook-form";

type Props = {
  step: number;
  vehiclesBySlug: Vehicle | null;
  nextStep: () => void;
  prevStep: () => void;
  title: string;
  subTitle: string;
};

export function FormInformation({
  vehiclesBySlug,
  nextStep,
  prevStep,
  step,
  title,
  subTitle,
}: Props) {
  return (
    <div
      id="main-content"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
    >
      <TopBar
        prevStep={prevStep}
        step={step}
        title={title}
        subTitle={subTitle}
      />

      <FormHeaderInformation vehiclesBySlug={vehiclesBySlug} />
      <div className="flex flex-col gap-5 px-4 mt-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Start Your Adventure</h2>
          <div className="flex flex-col gap-4">
            <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
              <Image src={Timer} className="w-6 h-6 flex shrink-0" alt="icon" />
              <div className="w-full">
                <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                  Duration
                </p>
                <p className="font-semibold">
                  {vehiclesBySlug?.duration} Days Ahead
                </p>
              </div>
            </label>
            <DateInput name="started_at" label="Choose booking date" />
            <TextInput
              iconSrc={SecurityUserBlack}
              name="name"
              placeholder="Full Name"
              label="Full Name"
            />
            <TextInput
              iconSrc={SMS}
              name="email"
              placeholder="Email"
              label="Email"
            />
            <TextInput
              iconSrc={Call}
              name="phone"
              placeholder="Phone Number"
              label="Phone Number"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={nextStep}
          className="flex mb-3 items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
        >
          <span className="font-bold text-white">Continue Booking</span>
          <Image
            src={ArrowRight}
            className="w-6 h-6"
            alt="icon"
            width={100}
            height={100}
          />
        </button>
      </div>
    </div>
  );
}
