import { Bell, HeartPulse, Users, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <section className="flex flex-col w-full rounded-lg py-20 px-6 lg:px-20 space-y-16 bg-white">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Our Services</h1>
        <p className="text-lg text-gray-600 mt-3 leading-relaxed">
          Confidential, free, and supportive healthcare services for all individuals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
        {/* Treatment Services */}
        <div className="bg-gray-50 border border-gray-200 hover:border-blue-400 transition rounded-2xl p-8 text-center shadow-sm hover:shadow-md">
          <HeartPulse className="w-16 h-16 text-red-600 mx-auto mb-5" />
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Treatment Services</h3>

          <ul className="text-left text-gray-700 space-y-3 text-sm leading-relaxed">
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-red-600"/> Adolescent sexual health services</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-red-600"/> Treatment & care for STIs</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-red-600"/> Non-STI genital health services</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-red-600"/> HIV treatment & ongoing medical care</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-red-600"/> Sexual dysfunction counseling</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-red-600"/> LGBTQ+ friendly sexual health services</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-red-600"/> Mother-to-child STI/HIV prevention</li>
          </ul>
        </div>

        {/* Preventive Services */}
        <div className="bg-gray-50 border border-gray-200 hover:border-blue-400 transition rounded-2xl p-8 text-center shadow-sm hover:shadow-md">
          <Users className="w-16 h-16 text-indigo-600 mx-auto mb-5" />
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Preventive Services</h3>

          <ul className="text-left text-gray-700 space-y-3 text-sm leading-relaxed">
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-indigo-600"/> HIV & STI screening</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-indigo-600"/> Targeted services for key populations</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-indigo-600"/> HIV PrEP and PEP programs</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-indigo-600"/> Condom & lubricant distribution</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-indigo-600"/> Sexual health education and awareness</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-indigo-600"/> Pap smear screening</li>
          </ul>
        </div>

        {/* Laboratory Services */}
        <div className="bg-gray-50 border border-gray-200 hover:border-blue-400 transition rounded-2xl p-8 text-center shadow-sm hover:shadow-md">
          <Bell className="w-16 h-16 text-yellow-600 mx-auto mb-5" />
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Laboratory Services</h3>

          <ul className="text-left text-gray-700 space-y-3 text-sm leading-relaxed">
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-yellow-600"/> Rapid HIV testing</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-yellow-600"/> HIV Ag/Ab ELISA testing</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-yellow-600"/> HIV viral load & CD4 count testing</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-yellow-600"/> Syphilis (VDRL) testing</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-yellow-600"/> Microscopy for infections</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-yellow-600"/> Pap smear lab processing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}