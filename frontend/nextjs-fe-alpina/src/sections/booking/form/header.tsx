import Image from "next/image";
import { formatRupiah } from "@/utils/utils";
import Flash from "@/assets/images/icons/flash.svg";
import Star from "@/assets/images/icons/star.svg";
import { Vehicle } from "@/types";
type Props = { vehiclesBySlug: Vehicle | null };

export function FormHeaderInformation({ vehiclesBySlug }: Props) {
  return (
    <div id="header" className="px-4 z-20 mt-[30px]">
      <div className="flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
        <div className="flex w-[130px] h-[100px] shrink-0 overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${vehiclesBySlug?.thumbnail}`}
            className="w-full h-full object-contain"
            alt="thumbnail"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[14px] w-full">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">{vehiclesBySlug?.name}</h3>
            <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
              {vehiclesBySlug?.price ? formatRupiah(vehiclesBySlug?.price) : 0}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[2px]">
              <Image
                src={Flash}
                className="w-5 h-5"
                alt="icon"
                width={100}
                height={100}
              />
              <p className="font-semibold text-sm leading-[21px]">
                {vehiclesBySlug?.cc}kmh
              </p>
            </div>
            <div className="flex items-center gap-[2px] justify-end">
              <p className="font-semibold text-sm leading-[21px]">4/5</p>
              <Image
                src={Star}
                className="w-5 h-5"
                alt="icon"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
