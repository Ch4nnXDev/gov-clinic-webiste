import Image from 'next/image';
import { Heart, Users, Stethoscope, BookOpen, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10 text-teal-700" />,
      title: "Medical Treatment",
      desc: "Comprehensive HIV care and ongoing management for all patients.",
    },
    {
      icon: <Heart className="w-10 h-10 text-teal-700" />,
      title: "Counseling & Mental Health",
      desc: "Professional support for emotional well-being and mental health.",
    },
    {
      icon: <Users className="w-10 h-10 text-teal-700" />,
      title: "Community Outreach",
      desc: "Educational programs and awareness campaigns for the community.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-teal-700" />,
      title: "Support Groups",
      desc: "Peer counseling and group sessions for shared experiences and guidance.",
    },
  ];

  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-80 w-full sm:h-[28rem]">
        <Image
          src="/pills.jpeg"
          alt=""

          fill
          style={{ objectFit: 'cover' }}
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/55 px-6 pt-16 text-center"><p className="eyebrow text-teal-200">Support at every step</p>
          <h1 className="display text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl drop-shadow-md max-w-2xl">
            Supporting individuals living with HIV through quality healthcare and community programs.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20"><div className="mx-auto max-w-2xl text-center"><h2 className="section-title">Practical care, human connection</h2><p className="mt-4 text-slate-600">You can expect respectful conversations, clear information and care tailored to your needs.</p></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-sm leading-6 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div><div className="mt-12 rounded-2xl bg-teal-800 p-7 text-white sm:flex sm:items-center sm:justify-between sm:p-10"><div><h2 className="text-2xl font-bold">Not sure where to start?</h2><p className="mt-2 text-teal-100">Visit during clinic hours and our team will help you find the right support.</p></div><a href="/clinic-days" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-teal-800 sm:mt-0">Clinic hours <ArrowRight className="h-4 w-4" /></a></div>
      </section>
    </main>
  );
}
