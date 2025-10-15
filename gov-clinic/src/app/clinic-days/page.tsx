import Image from "next/image";

export default function ClinicDaysPage() {
  const schedule = [
    { day: "Monday", hours: "8:00 AM – 4:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 4:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 4:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 4:00 PM" },
    { day: "Friday", hours: "8:00 AM – 4:00 PM" },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-[500px]">
        <Image
          src="/pills.jpeg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Clinic Days & Hours
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl drop-shadow-md max-w-2xl">
            Our clinic operates on specific days to provide care and support for individuals living with HIV.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Please check our schedule below for the latest updates on clinic days and hours.  
          We strive to ensure that our services are accessible and timely for all patients.
        </p>

        {/* Schedule Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-300 py-2 px-4 text-gray-800">Day</th>
                <th className="border-b border-gray-300 py-2 px-4 text-gray-800">Opening Hours</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4">{item.day}</td>
                  <td className="py-2 px-4">{item.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
