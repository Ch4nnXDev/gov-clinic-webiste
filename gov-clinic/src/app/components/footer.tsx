export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-15">
      <div className="max-w-7xl mx-auto px-6 p-10 grid grid-cols-1 md:grid-cols-3 gap-20">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sexual Health Centre Anuradhapura is an accredited centre of the Postgraduate Institute of Medicine, University of Colombo.  
            We are committed to delivering high-quality healthcare services, supporting patient well-being, and advancing community health.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
          <div className="text-gray-300 text-sm space-y-2">
            <p><span className="font-semibold">Telephone:</span> +94 252236461</p>
            <p><span className="font-semibold">Mobile:</span> +94 70 707 1 707</p>
            <p><span className="font-semibold">Email:</span> stdclinic.anuradhapura@gmail.com</p>
            <p><span className="font-semibold">Web:</span> sexualhealthcentreanuradhapura.lk</p>
            <p><span className="font-semibold">Address:</span> Sexual Health Centre, Teaching Hospital, Anuradhapura</p>
          </div>
        </div>

        {/* Accreditation / Social Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Accreditation & Follow Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Accredited by the Postgraduate Institute of Medicine, University of Colombo.
          </p>
          <div className="flex space-x-4">
            <span className="hover:text-cyan-400 cursor-pointer transition">Facebook</span>
            <span className="hover:text-cyan-400 cursor-pointer transition">Twitter</span>
            <span className="hover:text-cyan-400 cursor-pointer transition">Instagram</span>
          </div>
        </div>

      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm space-y-1">
        <p>© {new Date().getFullYear()} Sexual Health Centre Anuradhapura. Developed by CK Technologies.</p>

      </div>
    </footer>
  );
}
