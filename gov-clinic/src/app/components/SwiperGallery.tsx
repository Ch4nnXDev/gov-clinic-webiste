'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperGallery() {
  const slides = [
    {
      img: "/pills.jpeg",
      title: "Comprehensive Healthcare Services",
      subtitle: "Providing essential medicines and care to the community."
    },
    {
      img: "/child.jpeg",
      title: "Pediatric & Family Care",
      subtitle: "Ensuring healthy growth and wellness for children and families."
    },
    {
      img: "/old.jpeg",
      title: "Elderly Care Services",
      subtitle: "Tailored healthcare programs for senior citizens."
    }
  ];

  return (
    <div className="w-full h-screen relative">
      <Swiper
        spaceBetween={0}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />

              {/* Overlay with subtle gradient for modern look */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-4 text-white text-lg md:text-2xl drop-shadow-md max-w-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
