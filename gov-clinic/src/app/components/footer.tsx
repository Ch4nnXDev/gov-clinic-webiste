import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/knowledge-center", label: "Knowledge Centre" },
  { href: "/clinic-days", label: "Clinic Hours" },
];

const serviceLinks = [
  { href: "/services", label: "HIV Care" },
  { href: "/services", label: "Testing & Screening" },
  { href: "/services", label: "Counselling" },
  { href: "/services", label: "Community Support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-slate-900"
            >
              Sexual Health Centre
              <span className="block text-sm font-medium text-teal-700">
                Anuradhapura
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Confidential sexual health services, information and support
              for our community.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-500 transition hover:text-teal-700"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-500 transition hover:text-teal-700"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="mailto:"
                aria-label="Email"
                className="text-slate-500 transition hover:text-teal-700"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Quick links
            </h3>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Services
            </h3>

            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Contact
            </h3>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />

                <p className="text-sm leading-5 text-slate-500">
                  Sexual Health Centre
                  <br />
                  Anuradhapura, Sri Lanka
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />

                <a
                  href="tel:"
                  className="text-sm text-slate-500 transition hover:text-teal-700"
                >
                  Contact the clinic
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />

                <a
                  href="mailto:"
                  className="text-sm text-slate-500 transition hover:text-teal-700"
                >
                  Email the centre
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sexual Health Centre Anuradhapura.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition hover:text-teal-700"
            >
              Privacy
            </Link>

            <Link
              href="/accessibility"
              className="transition hover:text-teal-700"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}