import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      {/* Header Section with Image */}
      <section className="relative h-80 w-full sm:h-[28rem]">
        <Image
          src="/steth.jpeg"
          alt="About Us"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-b-xl"
          priority
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/55 pt-16"><div className="text-center"><p className="eyebrow text-teal-200">Our promise</p><h1 className="display text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
            About Us
          </h1></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20"><div className="grid gap-8 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1fr_.8fr] md:p-12">
        <div className="space-y-6">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Welcome to the Sexual Health Centre Anuradhapura. We are dedicated to providing
            comprehensive care and support for individuals living with HIV.
            Our clinic is committed to improving the health and well-being of our
            patients through a wide range of services, including medical treatment,
            counseling, and community support.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We aim to empower our patients and the community with knowledge,
            compassion, and professional care. Your health and safety are our
            top priorities.
          </p>

          <Link href="/services" className="inline-block rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800">Discover our services</Link></div>
          <aside className="rounded-2xl bg-teal-50 p-6"><h2 className="text-xl font-bold text-slate-900">What guides us</h2><ul className="mt-5 space-y-4 text-sm leading-6 text-slate-700"><li><strong className="block text-teal-800">Privacy</strong>Your information and your story are treated with care.</li><li><strong className="block text-teal-800">Respect</strong>Everyone deserves dignified, judgement-free care.</li><li><strong className="block text-teal-800">Partnership</strong>We work with people and communities for better health.</li></ul></aside>
        </div>
      </section>
    </main>
  );
}
