'use client';
import {useGetArticles} from "@/hooks/getArticles";
import Image from "next/image";

import { Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export default function Newsletter() {
  const { data } = useGetArticles();
  
  return (
    <section className="flex flex-col min-h-screen p-18">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
      
        </h1>
      </div>

      <hr className="mt-6 border-gray-300" />

      {/* Carousel */}
      <div className="mt-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Scrollbar, Navigation]}
        >
          {data?.articles?.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="bg-white rounded-xl shadow hover:shadow-md transition p-4">
                <div className="relative w-full h-48">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                   
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  
                </h3>
                <button className="mt-4 text-blue-600 hover:underline text-sm font-medium">
                  Read More →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
