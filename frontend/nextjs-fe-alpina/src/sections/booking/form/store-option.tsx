import Image from "next/image";
import { useFormContext } from "react-hook-form";
import TickCircle from "@/assets/images/icons/tick-circle.svg";
import { Store } from "@/types";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { StoreOptionSkeleton } from "@/components/skeleton";

export const StoreOption = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const selectedStore = watch("alpina_store_id");

  const [optionStores, setOptionStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getStores = async () => {
      try {
        const { data } = await axiosInstance.get(`/stores`);
        setOptionStores(data.data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getStores();
  }, []);

  const handleStoreChange = (storeId: number) => {
    setValue("alpina_store_id", storeId); // Update the selected store
    clearErrors("alpina_store_id"); // Clear the error when a store is selected
  };

  // Safely extract error message as a string
  const errorMessage = errors?.alpina_store_id?.message as string | undefined;

  return (
    <div className="tabs-contents">
      <div id="pickup-tab" className="tabcontent flex flex-col gap-4">
        {isLoading
          ? // Render skeleton loaders while data is loading
            Array.from({ length: 3 }).map((_, index) => (
              <StoreOptionSkeleton key={index} />
            ))
          : optionStores.map((store) => (
              <label
                key={store.id}
                className={`relative group w-full rounded-[20px] p-[10px_14px] bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue ${
                  Number(selectedStore) === store.id
                    ? "ring-1 ring-alpina-blue"
                    : ""
                } ${
                  errors.alpina_store_id ? "ring-1 ring-red-500" : "" // Add red border if there's an error
                }`}
              >
                <div className="flex items-center gap-[14px]">
                  <div className="w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-[#1D68B4]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${store.thumbnail}`}
                      className="w-full h-full object-cover"
                      alt="store"
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <p className={`font-bold`}>{store.name}</p>{" "}
                    {/* Red text if there's an error */}
                    <p className="text-sm leading-[21px]">{store.address}</p>
                  </div>
                  <div className="w-6 h-6 flex shrink-0">
                    <Image
                      src={TickCircle}
                      className={`w-6 h-6 ${
                        Number(selectedStore) === store.id ? "flex" : "hidden"
                      }`}
                      alt="selected"
                    />
                  </div>
                </div>
                <input
                  type="radio"
                  value={store.id}
                  {...register("alpina_store_id", {
                    required: "Please select a store",
                  })} // Add required validation with an error message
                  onChange={() => handleStoreChange(store.id)} // Use the handler to update store and clear errors
                  checked={Number(selectedStore) === store.id} // Ensure proper control of the checked state
                  className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                />
              </label>
            ))}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};
