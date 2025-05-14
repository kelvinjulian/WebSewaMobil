import { TopBar } from "../top-bar";
import { FormInfo } from "./info";
import { FormItem } from "./item";
import { DeliveryOption } from "./delivery-option";
import { StoreOption } from "./store-option";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";
import { Vehicle } from "@/types";
import { Privacy } from "@/components/privacy";
import { ButtonGroup } from "@/components/button";
import { useFormContext } from "react-hook-form";

type Props = {
  step: number;
  vehiclesBySlug: Vehicle | null;
  nextStep: () => void;
  prevStep: () => void;
};

export function FormDelivery({
  step,
  vehiclesBySlug,
  nextStep,
  prevStep,
}: Props) {
  const { watch } = useFormContext();
  return (
    <div
      id="main-content"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
    >
      <TopBar
        prevStep={prevStep}
        step={step}
        title="Almost Done"
        subTitle="Delivery Option"
      />
      <FormInfo
        thumbnail={vehiclesBySlug?.thumbnail ?? null}
        name={vehiclesBySlug?.name ?? null}
        price={vehiclesBySlug?.price ?? null}
        max_speed={vehiclesBySlug?.max_speed ?? null}
      />
      <FormItem
        duration={watch("duration")}
        started_at={watch("started_at")}
        name={watch("name")}
        email={watch("email")}
        phone={watch("phone")}
      />
      {/* Added form below */}
      <div className="flex flex-col gap-4 mt-5 z-10">
        <div className="flex flex-col py-5 px-4 gap-4 bg-[#F9FAFB]">
          <DeliveryOption />
          <StoreOption />
        </div>

        <div className="flex flex-col gap-5 px-4 mb-[30px]">
          <Privacy />
          <ButtonGroup icon={ArrowRight} fullWidth onClick={nextStep}>
            Continue Booking
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
