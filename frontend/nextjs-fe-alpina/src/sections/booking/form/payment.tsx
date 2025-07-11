import { TopBar } from "../top-bar";
import { FormInfo } from "./info";
import { FormItem } from "./item";
import { PaymentStore } from "./payment-store";
import { PaymentDetail } from "./payment-detail";
import { PaymentSent } from "./payment-send";
import { PaymentProof } from "./payment-proof";
import { Vehicle } from "@/types";
import { Privacy } from "@/components/privacy";
import { ButtonGroup } from "@/components/button";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";
import { useFormContext } from "react-hook-form";

type Props = {
  step: number;
  vehiclesBySlug: Vehicle | null;
  prevStep: () => void;
};

export function FormPayment({ step, vehiclesBySlug, prevStep }: Props) {
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
        subTitle="Payment"
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
      <PaymentStore />
      <PaymentDetail
        price={watch("price")}
        insurance={watch("insurance")}
        total_tax={watch("total_tax")}
        discount={watch("discount")}
        total_amount={watch("total_amount")}
      />
      <PaymentSent />
      <PaymentProof />

      <div className="flex flex-col gap-5 mt-5 px-4 mb-[30px]">
        <Privacy />
        <ButtonGroup type="submit" icon={ArrowRight} fullWidth>
          Continue Booking
        </ButtonGroup>
      </div>
    </div>
  );
}
