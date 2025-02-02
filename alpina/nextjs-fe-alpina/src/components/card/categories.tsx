"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Category } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  categories: Category[];
};

export const CategoryCard = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();
  return (
    <section
      id="Category"
      className="flex flex-col py-5 gap-3 px-4 bg-[#F9FAFB] mt-[30px]"
    >
      <h2 className="font-bold">Our Category</h2>
      <div className="w-full overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide !w-fit p-[1px] cursor-pointer"
              onClick={() => router.push(`/category/${category.slug}`)}
            >
              <div className="flex items-center w-fit rounded-full text-nowrap p-[10px_14px] gap-[10px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${category.icon}`}
                  className="w-6 h-6"
                  alt="icon"
                  width={500}
                  height={300}
                />
                <p className="font-bold text-sm leading-[21px]">
                  {category.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
