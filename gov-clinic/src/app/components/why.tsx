export default function Why() {
  return (
    <section className="relative w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing accessible, reliable, and compassionate healthcare 
            for every individual in our community. Here’s what makes us different:
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-xl font-semibold text-gray-800">Trusted Expertise</h3>
            <p className="mt-2 text-gray-600">
              Our doctors and healthcare staff are highly trained professionals with 
              years of experience in treating and supporting patients with care and dignity.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-xl font-semibold text-gray-800">Free & Accessible Care</h3>
            <p className="mt-2 text-gray-600">
              As a government clinic, our services are designed to be accessible and affordable 
              for everyone, ensuring no one is left behind.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-xl font-semibold text-gray-800">Community Focused</h3>
            <p className="mt-2 text-gray-600">
              We work closely with our community to provide education, prevention programs, 
              and long-term support tailored to local needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-xl font-semibold text-gray-800">Confidential Services</h3>
            <p className="mt-2 text-gray-600">
              We respect your privacy and ensure that all consultations, diagnoses, 
              and treatments are handled with complete confidentiality.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-xl font-semibold text-gray-800">Modern Facilities</h3>
            <p className="mt-2 text-gray-600">
              Our clinic is equipped with modern medical technology to ensure accurate 
              diagnosis and effective treatment.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-xl font-semibold text-gray-800">Compassionate Care</h3>
            <p className="mt-2 text-gray-600">
              We prioritize patient well-being, providing healthcare with empathy, 
              respect, and a commitment to improving quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
