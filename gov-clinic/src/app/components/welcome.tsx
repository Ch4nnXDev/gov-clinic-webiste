'use client';
import Image from 'next/image';

export default function Welcome() {

  return (
    <section
      aria-labelledby="clinic-welcome-heading"
      className="relative w-full py-16 px-6 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="eyebrow">Sexual health services</p>
          <h1
            id="clinic-welcome-heading"
            className="display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
          >
            Confidential care and support, close to home
          </h1>

          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            The Anuradhapura Sexual Health Centre provides confidential clinical care, evidence-based information and respectful support for individuals and families.
          </p>

          <div className="flex justify-center md:justify-start">
            <a href="https://www.know4sure.lk" target="_blank" rel="noreferrer" className="rounded-xl bg-red-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-red-800">Plan your visit</a>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:w-1/2">
          <div className="relative col-span-2 h-52 overflow-hidden rounded-2xl shadow-lg sm:h-64">
            <Image
              src="/doctor.jpeg"
              alt="Doctor providing care"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="relative h-40 overflow-hidden rounded-2xl shadow-lg sm:h-48">
            <Image
              src="/child.jpeg"
              alt="Child receiving healthcare"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="relative h-40 overflow-hidden rounded-2xl shadow-lg sm:h-48">
            <Image
              src="/labb.jpeg"
              alt="Clinic laboratory"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
