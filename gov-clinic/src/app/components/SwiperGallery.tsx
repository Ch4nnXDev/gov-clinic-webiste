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
      title: "Your health matters here",
      subtitle: "Confidential, compassionate sexual health care in Anuradhapura."
    },
    {
      img: "/child.jpeg",
      title: "Knowledge makes a difference",
      subtitle: "Clear answers, practical support and care without judgement."
    },
    {
      img: "/old.jpeg",
      title: "A healthier tomorrow, together",
      subtitle: "Supporting people, families and communities with trusted care."
    }
  ];

  return (
    <section className="relative h-[34rem] w-full sm:h-[38rem] lg:h-[44rem]">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/50 px-6 pt-16 text-center sm:px-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-red-200">Sexual Health Centre</p><h1 className="display max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-3 text-white text-sm sm:text-base md:text-xl max-w-2xl drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
