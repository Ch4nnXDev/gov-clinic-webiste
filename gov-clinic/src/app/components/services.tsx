import { 
  Bell, 
  HeartPulse, 
  Users, 

} from "lucide-react";

export default function Services() {
  return (
    <section className="flex flex-col w-full rounded-lg p-30 space-y-8 min-h-screen">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Providing accessible, free and reliable healthcare services to
          every citizen with care and compassion.
        </p>
      </div>

      <hr className="border-gray-300" />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
        {/* Service Card */}
        

        <div className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 text-center">
          <HeartPulse className="w-14 h-14 text-pink-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Treatment Services</h3>
          <p className="text-gray-600 mt-2">
            Dedicated services for mothers, infants, and children to ensure a healthy future.
          </p>
        </div>

        <div className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 text-center">
          <Users className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Preventive Services</h3>
          <p className="text-gray-600 mt-2">
            Outreach programs and awareness campaigns for public well-being.
          </p>
        </div>

        <div className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 text-center">
          <Bell className="w-14 h-14 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Laborotory Services</h3>
          <p className="text-gray-600 mt-2">
            Citizen support helpline for guidance, appointments, and health advice.
          </p>
        </div>
      </div>
    </section>
  );
}
