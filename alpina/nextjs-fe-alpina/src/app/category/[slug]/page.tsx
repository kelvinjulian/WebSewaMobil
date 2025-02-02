"use client";
import Image from "next/image";
import React from "react";
import BackBorder from "@/assets/images/icons/back-border.svg";
import Sls from "@/assets/images/thumbnails/sls-amg.png";
import Flash from "@/assets/images/icons/flash.svg";
import Star from "@/assets/images/icons/star.svg";
import PistaSide from "@/assets/images/thumbnails/pista-side.png";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
  const router = useRouter();
  return (
    <div>
      {/* Bagian atas */}
      <div
        id="Top-Bar"
        className="flex items-center justify-between px-4 mt-[60px] z-10"
      >
        <Image
          src={BackBorder}
          className="flex shrink-0 w-10 cursor-pointer"
          alt="icon"
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="w-fit text-center">
          <p className="text-sm leading-[21px] text-alpina-grey">Browse Our</p>
          <p className="font-bold text-xl leading-[30px]">193,493 Tracks</p>
        </div>
        <div className="dummy-btn w-10"></div>
      </div>
      {/* Tutup */}

      {/* Bagian Popular */}
      <section
        id="Popular"
        className="flex flex-col gap-3 mt-[30px] py-5 bg-[#F9FAFB]"
      >
        <h2 className="font-bold px-4">Popular Cars</h2>
        <div className="swiper-popular w-full overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide !w-fit p-[1px]">
              <a href="details.html" className="card">
                <div className="flex mx-3 flex-col w-[240px] shrink-0 overflow-hidden rounded-[20px] border border-[#EFF2F7] p-5 gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
                  <div className="relative">
                    <p className="absolute top-0 left-0 w-fit rounded-full py-1 px-2 bg-alpina-blue font-bold text-[10px] leading-[15px] text-white">
                      POPULAR
                    </p>
                    <div className="flex h-[140px] shrink-0 rounded-[50px] overflow-hidden">
                      <Image
                        src={Sls}
                        className="w-full h-full object-contain"
                        alt="thumbnail"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold">SLS AMG Blue</h3>
                    <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                      Rp 51.250.000
                    </p>
                  </div>
                  <hr className="border-[#EFF2F7]" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[2px]">
                      <Image src={Flash} className="w-5 h-5" alt="icon" />
                      <p className="font-semibold text-sm leading-[21px]">
                        450kmh
                      </p>
                    </div>
                    <div className="flex items-center gap-[2px] justify-end">
                      <p className="font-semibold text-sm leading-[21px]">
                        4/5
                      </p>
                      <Image src={Star} className="w-5 h-5" alt="icon" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Tutup */}

      {/* Bagian Newest Arrival */}
      <section id="Newest" className="flex flex-col gap-3 px-4 mt-[30px]">
        <h2 className="font-bold">Newest Arrival</h2>
        <div className="flex flex-col gap-3">
          <a href="details.html" className="card">
            <div className="flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
              <div className="flex w-[130px] h-[100px] shrink-0 overflow-hidden">
                <Image
                  src={PistaSide}
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-[14px] w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">488 Pista Spyder White</h3>
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    Rp 51.250.000
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">
                      450kmh
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px] justify-end">
                    <p className="font-semibold text-sm leading-[21px]">4/5</p>
                    <Image src={Star} className="w-5 h-5" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* Tutup */}
    </div>
  );
}
