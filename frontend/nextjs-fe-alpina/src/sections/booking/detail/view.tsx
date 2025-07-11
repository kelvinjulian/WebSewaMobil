"use client";
import { TopBar } from "./top-bar";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowCircleDown from "@/assets/images/icons/arrow-circle-down.svg";
import Support from "@/assets/images/icons/24-support.svg";
import axiosInstance from "@/utils/axiosInstance";
import { Booking } from "@/types";
import { FormItem } from "../form/item";
import { FormInfo } from "../form/info";
import { PaymentDetail } from "../form/payment-detail";
import { PaymentProof } from "./payment-proof";
import { ButtonGroup } from "@/components/button";

type Props = {
  booking: Booking;
};

export function ViewDetail({ booking }: Props) {
  const [optionStores, setOptionStores] = useState<any>([]);

  const getStores = async () => {
    const res = await axiosInstance.get(`/stores`);

    setOptionStores(res.data.data);
  };

  useEffect(() => {
    getStores();
  }, []);
  return (
    <>
      <TopBar title="My Booking" subTitle={booking?.booking_trx_id} />
      <FormInfo
        thumbnail={booking.vehicle.thumbnail ?? null}
        name={booking.vehicle.name ?? null}
        price={booking.price ?? null}
        max_speed={booking.vehicle.max_speed ?? null}
      />
      <FormItem
        duration={booking.vehicle.duration}
        started_at={booking.started_at}
        name={booking.name}
        email={booking.email}
        phone={booking.phone}
      />
      {/*
       * tantangan untuk member
       * ubah ini menjadi component yang sama seperti  FormInfo dan FormItem
       */}
      <section id="Delivery-Details" className="px-4 mt-5 z-10">
        {optionStores.map((store: any) => {
          if (store.id === booking.alpina_store_id) {
            return (
              <div
                key={store.id}
                className="group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white has-[:checked]:!h-[64px] overflow-hidden transition-all duration-300"
              >
                <label className="flex items-center justify-between">
                  <p className="font-bold">Pickup Store At</p>
                  <Image
                    src={ArrowCircleDown}
                    className="w-6 h-6 group-has-[:checked]:-rotate-180 transition-all duration-300"
                    alt="icon"
                    width={100}
                    height={100}
                  />
                  <input
                    type="checkbox"
                    name="dropdown"
                    id="dropdown"
                    className="hidden"
                  />
                </label>
                <div className="flex items-center gap-[14px]">
                  <div className="w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-[#1D68B4]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${store.thumbnail}`}
                      className="w-full h-full object-cover"
                      alt="icon"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <p className="font-bold line-clamp-1">{store.name}</p>
                    <p className="text-sm leading-[21px] line-clamp-2">
                      {store.address}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
      <PaymentDetail
        price={booking.price}
        insurance={booking.insurance}
        total_tax={booking.total_tax_amount}
        discount={0}
        total_amount={booking.total_amount}
      />
      <PaymentProof
        proofUrl={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${booking?.proof}`}
      />
      <div className="px-4 mt-5 mb-[30px]">
        <ButtonGroup icon={Support} fullWidth>
          Call Customer Service
        </ButtonGroup>
      </div>
    </>
  );
}
