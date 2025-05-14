"use client";

import BackBorder from "@/assets/images/icons/back-border-white.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  step: number;
  title: string;
  subTitle: string;
  prevStep: () => void;
};

export function TopBar({ step, title, subTitle, prevStep }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug"); // Replace 'slug' with the actual query parameter you need

  const handleBack = () => {
    if (step === 1) {
      router.push(`/browse/${slug}`);
    } else {
      prevStep();
    }
  };

  return (
    <>
      {/* Backdrop section */}
      <div
        className={`absolute backdrop w-full ${
          step === 1 ? "h-[200px]" : "h-[400px]"
        } bg-alpina-blue`} // Ensure z-index is behind TopBar
      />

      {/* Top Bar section */}
      <div
        id="Top-Bar"
        className="flex items-center justify-between px-4 mt-[60px] z-[50]"
      >
        {/* Back button */}
        <Image
          src={BackBorder}
          className="flex shrink-0 w-10 cursor-pointer"
          alt="icon"
          onClick={handleBack} // Ensure dynamic routing
        />

        {/* Title and Subtitle */}
        <div className="w-fit text-center text-white">
          <p className="text-sm leading-[21px]">{title}</p>
          <p className="font-bold text-xl leading-[30px]">{subTitle}</p>
        </div>

        {/* Dummy button to balance the layout */}
        <div className="dummy-btn w-10"></div>
      </div>
    </>
  );
}
