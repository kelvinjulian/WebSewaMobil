"use client";
import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInformation, FormDelivery } from "./form";
import { Vehicle } from "@/types";
import { defaultValues, validationSchema } from "./default";

type Props = {
  vehiclesBySlug: Vehicle | null;
};

enum Step {
  Information = 1,
  Delivery,
  Payment,
  Success,
}

export function BookingView({ vehiclesBySlug }: Props) {
  const [step, setStep] = useState<Step>(Step.Delivery);
  const methods = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, trigger, reset, watch } = methods;

  console.log(watch());

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  const validateCurrentStep = async (): Promise<boolean> => {
    switch (step) {
      case Step.Information:
        return await trigger([
          "name",
          "started_at",
          "email",
          "phone",
          "duration",
        ]);
      case Step.Delivery:
        return await trigger(["deliveryType", "alpina_store_id"]);
      default:
        return true;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextStep = async () => {
    const isStepValid = await validateCurrentStep();
    if (isStepValid) {
      scrollToTop();
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    scrollToTop();
    setStep((prev) => prev - 1);
  };

  const getStepComponent = (currentStep: Step) => {
    switch (currentStep) {
      case Step.Information:
        return (
          <FormInformation
            step={step}
            title="Ready to"
            subTitle="Booking Car"
            vehiclesBySlug={vehiclesBySlug}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case Step.Delivery:
        return (
          <FormDelivery
            step={step}
            vehiclesBySlug={vehiclesBySlug}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="z-0">
        {getStepComponent(step)}
      </form>
    </FormProvider>
  );
}
