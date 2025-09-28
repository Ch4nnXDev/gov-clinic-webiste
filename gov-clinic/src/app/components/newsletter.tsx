'use client';
import Image from "next/image";
import { Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export default function Newsletter() {
  const articles = [
    {
      img: "/pills.jpeg",
      title: "Essential Medicines & Public Access",
      desc: "Learn how the government ensures affordable access to life-saving medicines.",
    },
    {
      img: "/vaccination.jpeg",
      title: "National Immunization Drive",
      desc: "Latest updates on vaccination programs protecting citizens across the country.",
    },
    {
      img: "/mentalhealth.jpeg",
      title: "Mental Health & Wellbeing",
      desc: "Government initiatives to support mental health awareness and services.",
    },
    {
      img: "/community.jpeg",
      title: "Community Health Programs",
      desc: "Discover how outreach programs are improving healthcare in rural areas.",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen p-18">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Health Updates & Awareness
        </h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Stay informed with the latest medical news, government initiatives, and
          health education articles.
        </p>
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
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow hover:shadow-md transition p-4">
                <div className="relative w-full h-48">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0} // preload first image
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{article.desc}</p>
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
