"use client";
import Image from "next/image";
import React from "react";
import BackBorder from "@/assets/images/icons/back-border.svg";
import { useRouter } from "next/navigation";
import HuayraSide from "@/assets/images/thumbnails/huayra-side.png";
import Star from "@/assets/images/icons/star.svg";
import CpuCharge from "@/assets/images/icons/cpu-charge.svg";
import Crown from "@/assets/images/icons/crown.svg";
import Flash from "@/assets/images/icons/flash.svg";
import Gallery1 from "@/assets/images/photos/gallery-1.png";
import Avatar from "@/assets/images/avatars/avatar-2.png";

export default function BrowseDetailPage() {
  const router = useRouter();
  return (
    <div>
      {/* Bagian Bar Atas */}
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
          <p className="text-sm leading-[21px] text-alpina-grey">Read More</p>
          <p className="font-bold text-xl leading-[30px]">Car Details</p>
        </div>
        <div className="dummy-btn w-10"></div>
      </div>
      {/* Tutup Bar Atas */}

      {/* Bagian Main */}
      <main className="flex flex-col gap-5 mt-[30px]">
        <div id="Main-Thumbnail" className="px-[30px]">
          <div className="flex w-full aspect-[330/177] shrink-0 overflow-hidden">
            <Image
              src={HuayraSide}
              className="w-full h-full object-contain"
              alt="thumbnail"
            />
          </div>
        </div>
        <div
          id="Title"
          className="flex items-center justify-between px-4 mt-[10px]"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <p className="text-alpina-grey">Track Car</p>
              <p className="w-fit rounded-full py-1 px-2 bg-alpina-blue font-bold text-[10px] leading-[15px] text-white">
                POPULAR
              </p>
            </div>
            <h1 className="font-bold text-2xl leading-9">Pagani Huayra</h1>
          </div>
          <div className="flex items-center gap-[2px] justify-end">
            <p className="font-bold text-sm leading-[21px]">4/5</p>
            <Image src={Star} className="w-5 h-5" alt="icon" />
          </div>
        </div>
        <div id="Specs" className="px-4">
          <div className="flex items-center justify-evenly rounded-[20px] border border-[#EFF2F7] py-4 px-5">
            <div className="flex flex-col items-center gap-2">
              <Image src={CpuCharge} className="w-6 h-6" alt="icon" />
              <p className="font-semibold">5000cc</p>
            </div>
            <span className="h-[46px] border border-[#EFF2F7]"></span>
            <div className="flex flex-col items-center gap-2">
              <Image src={Crown} className="w-6 h-6" alt="icon" />
              <p className="font-semibold">300hp</p>
            </div>
            <span className="h-[46px] border border-[#EFF2F7]"></span>
            <div className="flex flex-col items-center gap-2">
              <Image src={Flash} className="w-6 h-6" alt="icon" />
              <p className="font-semibold">450kmh</p>
            </div>
          </div>
        </div>
        <section id="About" className="flex flex-col gap-[6px] px-4">
          <h2 className="font-bold">About</h2>
          <p className="leading-[28px]">
            The 911 GT3 RS is known for its performance engine, well this one
            also comes with then weissach package for an extra dose offfice
            lightweight engineering and racing flair.
          </p>
        </section>
        <section id="Gallery" className="flex flex-col gap-3">
          <h2 className="font-bold px-4">Gallery</h2>
          <div className="swiper-gallery w-full overflow-hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide !w-fit">
                <button className="flex mx-3 w-[130px] h-[100px] shrink-0 rounded-[20px] overflow-hidden bg-[#1D68B4]">
                  <Image
                    src={Gallery1}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Testimonials"
          className="flex flex-col gap-3 py-5 px-4 bg-[#F9FAFB]"
        >
          <h2 className="font-bold">Happy Customers</h2>
          <div className="testi-card flex flex-col rounded-[20px] border border-[#EFF2F7] p-[14px] gap-[14px] bg-white">
            <p className="leading-[28px]">
              Top banget dah, bakalan gue sewa lagi ke depannya untuk acara
              nikahan
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    src={Avatar}
                    className="w-full h-full object-cover"
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm leading-[21px]">Samiranda</p>
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    Programmer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[2px]">
                <Image src={Star} className="w-5 h-5" alt="star" />
                <Image src={Star} className="w-5 h-5" alt="star" />
                <Image src={Star} className="w-5 h-5" alt="star" />
                <Image src={Star} className="w-5 h-5" alt="star" />
                <Image src={Star} className="w-5 h-5" alt="star" />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Tutup Main */}

      {/* Bagian Bottom CTA */}
      <div id="Bottom-CTA" className="relative flex h-[93px] z-20">
        <div className="fixed bottom-0 w-full flex items-center justify-between max-w-[640px] p-5 bg-alpina-black">
          <div className="flex flex-col gap-[6px]">
            <p className="font-extrabold text-[22px] leading-[33px] text-white">
              Rp 22.000.000
            </p>
            <p className="font-semibold text-sm leading-[21px] text-alpina-orange">
              /10 hari sewa
            </p>
          </div>
          <a
            href="booking.html"
            className="w-fit rounded-full p-[14px_24px] bg-alpina-blue font-bold text-white"
          >
            Book Now
          </a>
        </div>
      </div>
      {/* Tutup CTA */}
    </div>
  );
}
