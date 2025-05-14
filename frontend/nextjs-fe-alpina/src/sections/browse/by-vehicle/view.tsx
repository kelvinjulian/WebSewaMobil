"use client";
import { Vehicle } from "@/types";
import { TopBar } from "./top-bar";
import { VehicleSpecs } from "./vehicle-specs";
import { VehicleGallery } from "./vehicle-gallery";
import { VehicleTestimonials } from "./vehicle-testimonials";
import { BottomCTA } from "./bottom-bar";
import Star from "@/assets/images/icons/star.svg";
import Image from "next/image";

type Props = { vehiclesBySlug: Vehicle };

export function BrowseVehiclesBySlugView({ vehiclesBySlug }: Props) {
  return (
    <>
      <TopBar />
      <main className="flex flex-col gap-5 mt-[30px]">
        <div id="Main-Thumbnail" className="px-[30px]">
          <div className="flex w-full aspect-[330/177] shrink-0 overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${vehiclesBySlug.thumbnail}`}
              className="w-full h-full object-contain"
              alt={`${vehiclesBySlug.name} thumbnail`}
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        </div>

        {/* Vehicle Title and Rating */}
        <div
          id="Title"
          className="flex items-center justify-between px-4 mt-[10px]"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <p className="text-alpina-grey">
                {vehiclesBySlug.category.name} Car
              </p>
              {vehiclesBySlug.isPopular ? (
                <p className="w-fit rounded-full py-1 px-2 bg-alpina-blue font-bold text-[10px] leading-[15px] text-white">
                  POPULAR
                </p>
              ) : (
                ""
              )}
            </div>
            <h1 className="font-bold text-2xl leading-9">
              {vehiclesBySlug.name}
            </h1>
          </div>
          <div className="flex items-center gap-[2px] justify-end">
            <p className="font-bold text-sm leading-[21px]">4/5</p>
            <Image src={Star} className="w-5 h-5" alt="icon" />
          </div>
        </div>

        {/* Vehicle Specifications */}
        <VehicleSpecs
          cc={vehiclesBySlug.cc}
          horsePower={vehiclesBySlug.horse_power}
          maxSpeed={vehiclesBySlug.max_speed}
        />

        {/* About Section */}
        <section id="About" className="flex flex-col gap-[6px] px-4">
          <h2 className="font-bold">About</h2>
          <p className="leading-[28px]">{vehiclesBySlug.about}</p>
        </section>

        {/* Vehicle Gallery */}
        <VehicleGallery photos={vehiclesBySlug.photos ?? []} />

        {/* Testimonials */}
        <VehicleTestimonials testimonials={vehiclesBySlug.testimonials ?? []} />

        {/* Bottom CTA */}
        <BottomCTA
          price={vehiclesBySlug.price}
          duration={vehiclesBySlug.duration}
          slug={vehiclesBySlug.slug}
        />
      </main>
    </>
  );
}
