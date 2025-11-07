'use client';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Welcome() {

  function appointmentClick() {
    window.location.href = "https://www.know4sure.lk";
  }

  return (
    <section
      aria-labelledby="clinic-welcome-heading"
      className="relative w-full py-16 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
          <h1
            id="clinic-welcome-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Welcome to Anuradhapura HIV Clinic
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            We are committed to providing high-quality healthcare services for you
            and your family. Our experienced medical professionals ensure your
            well-being with care and expertise. Together, we work toward a healthier tomorrow.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              onClick={appointmentClick}
              className="border border-blue-600 text-blue-600 rounded-xl px-6 py-3 hover:bg-blue-600 hover:text-white transition-all"
            >
              Book an Appointment
            </Button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/child.jpeg"
              alt="Child receiving healthcare"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/doctor.jpeg"
              alt="Doctor consulting patient"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="relative w-full h-64 sm:h-80 col-span-1 sm:col-span-2 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/sign.jpg"
              alt="Clinic sign"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
