"use client";
import { useState, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormInformation,
  FormDelivery,
  FormPayment,
  FormSuccess,
} from "./form";
import { Vehicle } from "@/types";
import {
  FormValues,
  defaultValues,
  validationSchema,
  defaultBooking,
} from "./default";
import axiosInstance from "@/utils/axiosInstance";

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
  const [booking, setBooking] = useState(defaultBooking);

  const [step, setStep] = useState<Step>(Step.Information); // bagian ini menentukan halaman mana terlebih dahulu yang akan ditampilkan
  const methods = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, trigger, reset, watch } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();

    // Append all fields to the FormData
    formData.append("total_amount", data.total_amount.toString());
    formData.append("insurance", data.insurance.toString());
    formData.append("discount", data.discount.toString());
    formData.append("total_tax", data.total_tax.toString());
    formData.append("price", data.price.toString());

    // Append file if it exists
    if (data.proof) {
      formData.append("proof", data.proof); // Assuming `proof` is a File object
    }

    formData.append("alpina_store_id", data.alpina_store_id);
    formData.append("deliveryType", data.deliveryType);
    formData.append("duration", data.duration.toString());
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("started_at", data.started_at);
    formData.append("name", data.name);
    formData.append("vehicle_id", data.vehicle_id?.toString() || "");

    try {
      const response = await axiosInstance.post(
        "/booking-transaction",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setBooking(response.data.data);

        setStep((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error uploading the form data:", error);
    }
  };

  useEffect(() => {
    if (vehiclesBySlug) {
      const total_tax = 0.11 * vehiclesBySlug.price;
      const updateFormValues = () =>
        reset({
          ...watch(),
          vehicle_id: vehiclesBySlug.id,
          price: vehiclesBySlug.price,
          total_tax,
          total_amount: vehiclesBySlug.price + total_tax + watch("insurance"),
        });

      const timer = setTimeout(updateFormValues, 300);
      return () => clearTimeout(timer);
    }
  }, [vehiclesBySlug, reset, watch]);

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
      case Step.Payment:
        return (
          <FormPayment
            step={step}
            vehiclesBySlug={vehiclesBySlug}
            prevStep={prevStep}
          />
        );
      case Step.Success:
        return <FormSuccess booking={booking} />;
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
