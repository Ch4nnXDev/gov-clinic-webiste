import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Award,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-sky-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-4">
              Sexual Health Centre Anuradhapura
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm">
              An accredited centre of the Postgraduate Institute of Medicine,
              University of Colombo, dedicated to providing professional,
              confidential, and compassionate sexual healthcare services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-sky-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-sky-600 transition">
                  Appointments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-5">
              Contact Information
            </h4>

            <div className="space-y-4 text-sm text-slate-600">
              <a
                href="tel:+94252236461"
                className="flex items-start gap-3 hover:text-sky-600 transition"
              >
                <Phone size={18} />
                <span>+94 25 223 6461</span>
              </a>

              <a
                href="tel:+94707071707"
                className="flex items-start gap-3 hover:text-sky-600 transition"
              >
                <Phone size={18} />
                <span>+94 70 707 1707</span>
              </a>

              <a
                href="mailto:stdclinic.anuradhapura@gmail.com"
                className="flex items-start gap-3 hover:text-sky-600 transition"
              >
                <Mail size={18} />
                <span>stdclinic.anuradhapura@gmail.com</span>
              </a>

              <a
                href="https://sexualhealthcentreanuradhapura.lk"
                className="flex items-start gap-3 hover:text-sky-600 transition"
              >
                <Globe size={18} />
                <span>sexualhealthcentreanuradhapura.lk</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  Sexual Health Centre,
                  <br />
                  Teaching Hospital,
                  <br />
                  Anuradhapura
                </span>
              </div>
            </div>
          </div>

          {/* Accreditation */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-5">
              Accreditation
            </h4>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
              <Award className="text-sky-600 mb-3" size={28} />

              <p className="text-sm text-slate-600 leading-relaxed">
                Accredited by the Postgraduate Institute of Medicine,
                University of Colombo.
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 hover:bg-sky-600 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Sexual Health Centre Anuradhapura.
            All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Developed by
            <span className="font-semibold text-sky-700 ml-1">
              Scale Lanka
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}