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
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-80 w-full sm:h-[28rem]">
        <Image
          src="/pills.jpeg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/55 px-6 pt-16 text-center"><p className="eyebrow text-teal-200">Plan your visit</p>
          <h1 className="display text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
            Clinic Days & Hours
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl drop-shadow-md max-w-2xl">
            Our clinic operates on specific days to provide care and support for individuals living with HIV.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20"><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10"><p className="text-base leading-7 text-slate-700 sm:text-lg">
          Please check our schedule below for the latest updates on clinic days and hours.  
          We strive to ensure that our services are accessible and timely for all patients.
        </p>

        {/* Schedule Table */}
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200"><table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b border-slate-200 bg-slate-50 py-3 px-4 text-slate-800">Day</th><th className="border-b border-slate-200 bg-slate-50 py-3 px-4 text-slate-800">Opening Hours</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-teal-50/50" : ""}><td className="py-3 px-4 font-medium">{item.day}</td><td className="py-3 px-4">{item.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></section>
    </main>
  );
}
