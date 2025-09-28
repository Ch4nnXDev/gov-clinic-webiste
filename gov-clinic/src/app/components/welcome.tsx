import Image from 'next/image';
import { Button } from "@/components/ui/button"

export default function Welcome() {
  return (
    <section
      aria-labelledby="clinic-welcome-heading"
      className="relative w-full py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h1
            id="clinic-welcome-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Welcome to Anuradhapura HIV Clinic
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We are committed to providing high-quality healthcare services for you
            and your family. Our experienced medical professionals ensure your
            well-being with care and expertise. Together, we work toward a healthier tomorrow.
          </p>
          <Button className="w-80 border-2 border-blue-500 bg-white text-blue-500 rounded-4xl py-3 shadow-md hover:shadow-lg transition">
            Book an Appointment
          </Button>
        </div>


        <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
          <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/child.jpeg"
              alt="Child receiving healthcare"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg translate-y-8 md:translate-y-12">
            <Image
              src="/doctor.jpeg"
              alt="Doctor consulting patient"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64 md:h-80 col-span-2 rounded-xl overflow-hidden shadow-lg -translate-y-4 md:-translate-y-8">
            <Image
              src="/elder.jpeg"
              alt="Elderly care support"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
