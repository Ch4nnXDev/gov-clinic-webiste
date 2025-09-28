import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Header Section with Image */}
      <section className="relative w-full h-[24rem] md:h-[32rem] lg:h-[40rem]">
        <Image
          src="/steth.jpeg"
          alt="About Us"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-b-xl"
          priority
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-6">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Welcome to the Anuradhapura HIV Clinic. We are dedicated to providing
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

          {/* Optional Call-to-Action */}
          <div className="mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 shadow-md hover:shadow-lg transition">
              Learn More About Our Programs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
