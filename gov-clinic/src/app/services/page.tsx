import Image from 'next/image';
import { Heart, Users, Stethoscope, BookOpen } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      title: "Medical Treatment",
      desc: "Comprehensive HIV care and ongoing management for all patients.",
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: "Counseling & Mental Health",
      desc: "Professional support for emotional well-being and mental health.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Community Outreach",
      desc: "Educational programs and awareness campaigns for the community.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Support Groups",
      desc: "Peer counseling and group sessions for shared experiences and guidance.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px]">
        <Image
          src="/pills.jpeg"
          alt=""

          fill
          style={{ objectFit: 'cover' }}
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Our Services
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl drop-shadow-md max-w-2xl">
            Supporting individuals living with HIV through quality healthcare and community programs.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-0 mt-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center group"
            >
              <div className="mb-4 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
