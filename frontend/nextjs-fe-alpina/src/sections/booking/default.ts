import { Vehicle } from "@/types";
import * as yup from "yup";

// Validation schema using Yup based on FormValues type
export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  started_at: yup
    .string()
    .required("Start date is required")
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Start date must be in the format YYYY-MM-DD"
    ),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must only contain digits"),
  duration: yup.number().required("Duration is required"),
  deliveryType: yup.string().required("Please select a delivery type"),
  alpina_store_id: yup
    .string()
    .required("Please select a store")
    .matches(/^[0-9]+$/, "Phone number must only contain digits"),
  // proof: yup
  //   .mixed()
  //   .nullable() // Allow proof to be null initially
  //   .required("Please upload a proof file")
  //   .test("fileSize", "File size is too large (max 2MB)", (value) => {
  //     if (!value) return true; // If no file, skip size validation
  //     return (value as File).size <= 2000000; // Max file size 2MB
  //   })
  //   .test("fileType", "Unsupported file format", (value) => {
  //     if (!value) return true; // If no file, skip type validation
  //     return ["image/jpeg", "image/png", "application/pdf"].includes(
  //       (value as File).type
  //     );
  //   }),
  // price: yup
  //   .number()
  //   .required("Price is required")
  //   .min(0, "Price must be a positive number"),
  // total_tax: yup
  //   .number()
  //   .required("Total tax is required")
  //   .min(0, "Total tax must be a positive number"),
  // discount: yup
  //   .number()
  //   .required("Total tax is required")
  //   .min(0, "Total tax must be a positive number"),
  // insurance: yup
  //   .number()
  //   .required("Insurance amount is required")
  //   .min(0, "Insurance must be a positive number"),
  // total_amount: yup
  //   .number()
  //   .required("Total amount is required")
  //   .min(0, "Total amount must be a positive number"),
  // vehicle_id: yup.number().required().nullable(),
});

export type FormValues = {
  name: string;
  started_at: string;
  email: string;
  phone: string;
  duration: number;
  deliveryType: string;
  alpina_store_id: string;
  // proof?: any;
  // price: number;
  // discount: number;
  // total_tax: number;
  // insurance: number;
  // total_amount: number;
  // vehicle_id: number | null;
};

export type Props = { vehiclesBySlug: Vehicle | null };

export const defaultValues = {
  name: "",
  started_at: "",
  email: "",
  phone: "",
  duration: 10,
  deliveryType: "pickup",
  // proof: "",
  // price: 0,
  // total_tax: 0,
  // discount: 0,
  // insurance: 500000,
  // total_amount: 0,
  alpina_store_id: "",
  // vehicle_id: null,
};
