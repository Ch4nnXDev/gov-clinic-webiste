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
      title: "Laboratory Services",
      subtitle: "Ensuring healthy growth and wellness for children and families."
    },
    {
      img: "/old.jpeg",
      title: "Training & Information Sessions",
      subtitle: "Tailored healthcare programs for senior citizens."
    }
  ];

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen relative">
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
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 sm:px-8">
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-snug drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-3 text-white text-sm sm:text-base md:text-xl max-w-2xl drop-shadow-md">
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
