import { Photo } from "@/types";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // jika ingin pakai navigation
import { Navigation } from "swiper/modules";

type Props = {
  photos: Photo[];
};

export function VehicleGallery({ photos }: Props) {
  const [gallery, setGallery] = useState<{
    isOpen: boolean;
    image: string | null;
  }>({
    isOpen: false,
    image: null,
  });

  const showAndClose = (image: string | null) => {
    setGallery({ isOpen: !gallery.isOpen, image });
  };

  return (
    <section id="Gallery" className="flex flex-col gap-3 ">
      <h2 className="font-bold px-4">Gallery</h2>

      <div className="swiper-gallery w-full overflow-hidden">
        <div className="swiper-wrapper">
          {photos.map((photo, i) => (
            <div className="swiper-slide !w-fit ms-4" key={i}>
              <button
                className="flex w-[130px] h-[100px] shrink-0 rounded-[20px] overflow-hidden bg-[#1D68B4]"
                onClick={() => showAndClose(photo.photo)}
                aria-label={`Open photo ${i}`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${photo.photo}`}
                  className="w-full h-full object-cover"
                  alt={`Vehicle photo ${i}`}
                  width={500}
                  height={300}
                  loading="lazy"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {gallery.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02020C]/90 px-4">
          <div className="relative bg-white rounded-[20px] shadow-lg w-full max-w-md aspect-[360/270] overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${gallery.image}`}
              className="w-full h-full object-cover"
              alt="gallery image"
              width={500}
              height={300}
            />
            <button
              onClick={() => showAndClose(null)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full py-[14px] px-[24px] font-bold shadow-md hover:bg-gray-200"
              aria-label="Close Photo"
            >
              Close Photo
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
