import { HeartHandshake, ShieldCheck, Users, Lock, Building2, Smile } from "lucide-react";

export default function Why() {
  return (
    <section className="relative w-full py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Why Choose Us */}
        <div className="text-center mt-20 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Compassionate, confidential, and patient‑centered care that meets international standards.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
            <HeartHandshake className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              Our medical professionals are highly trained in sexual health care and patient support.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
            <Users className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Free & Accessible Services</h3>
            <p className="text-gray-600 leading-relaxed">
              As a government service, our clinic ensures accessibility and equity for all.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
            <Lock className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Confidentiality</h3>
            <p className="text-gray-600 leading-relaxed">
              Your privacy is respected at every stage of consultation, diagnosis, and care.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
            <Building2 className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Clinical Facilities</h3>
            <p className="text-gray-600 leading-relaxed">
              Equipped with updated diagnostics and a well‑trained medical team.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
            <ShieldCheck className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Safe, Inclusive Environment</h3>
            <p className="text-gray-600 leading-relaxed">
              Respectful and welcoming care for all individuals, including key populations & LGBTQ+.</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition">
            <Smile className="w-10 h-10 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassionate Patient Support</h3>
            <p className="text-gray-600 leading-relaxed">
              We prioritize comfort, dignity, and emotional well‑being in every visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}