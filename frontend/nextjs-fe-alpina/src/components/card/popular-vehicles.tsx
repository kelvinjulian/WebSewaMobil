"use client";
import Image from "next/image";
import { Vehicle } from "@/types";
import Flash from "@/assets/images/icons/flash.svg";
import Star from "@/assets/images/icons/star.svg";
import { formatRupiah } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = { popularVehicles: Vehicle[]; className?: string; title: string };

export const PopularVehiclesCard = ({
  popularVehicles,
  className = "",
  title,
}: Props) => {
  const router = useRouter();
  return (
    <section
      id="Popular"
      className={`flex flex-col gap-3 px-4 mt-[30px] ${className}`}
    >
      <h2 className="font-bold">{title}</h2>
      <div className="swiper-popular w-full overflow-hidden">
        <Swiper slidesPerView={1} spaceBetween={10}>
          {popularVehicles.map((popular, i) => (
            <SwiperSlide
              className="swiper-slide !w-fit p-[1px] cursor-pointer"
              key={i}
              onClick={() => router.push(`/browse/${popular.slug}`)}
            >
              <div className="flex flex-col w-[240px] shrink-0 overflow-hidden rounded-[20px] border border-[#EFF2F7] p-5 gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
                <div className="relative">
                  <p className="absolute top-0 left-0 w-fit rounded-full py-1 px-2 bg-alpina-blue font-bold text-[10px] leading-[15px] text-white">
                    POPULAR
                  </p>
                  <div className="flex h-[140px] shrink-0 rounded-[50px] overflow-hidden">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${popular.thumbnail}`}
                      className="w-full h-full object-contain"
                      alt="thumbnail"
                      width={500}
                      height={300}
                    />
                    $
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">{popular.name}</h3>
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    {formatRupiah(popular.price)}
                  </p>
                </div>
                <hr className="border-[#EFF2F7]" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">
                      {popular.max_speed} kmh
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px] justify-end">
                    <p className="font-semibold text-sm leading-[21px]">4/5</p>
                    <Image src={Star} className="w-5 h-5" alt="icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
