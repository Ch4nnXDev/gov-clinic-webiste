export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Anuradhapura HIV Clinic</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Providing high-quality healthcare services to individuals living with HIV in Sri Lanka.  
            Committed to community support and patient well-being.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Address: Anuradhapura, Sri Lanka</li>
            <li>Phone: +94 123 456 789</li>
            <li>Email: info@anuradhapurahivclinic.lk</li>
            <li>Hours: Mon – Fri, 8:00 AM – 4:00 PM</li>
          </ul>
        </div>

        {/* Follow / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer transition">Facebook</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Twitter</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Instagram</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm space-y-1">
        <p>© {new Date().getFullYear()} Anuradhapura HIV Clinic. Developed by CK Technologies.</p>
        <p>🇱🇰 Sri Lanka</p>
      </div>
    </footer>
  );
}
