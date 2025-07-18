import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const footerLinks = {
    Shop: ["Bed", "Bath", "Mattress", "Rugs", "Curtains", "Cushions"],
    "Customer Service": [
      "Contact Us",
      "FAQ",
      "Shipping Info",
      "Returns",
      "Size Guide",
      "Care Instructions",
    ],
    Company: [
      "About Us",
      "Careers",
      "Press",
      "Sustainability",
      "Store Locator",
      "Bulk Orders",
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Accessibility",
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Mobile layout */}
        <div className="block md:hidden space-y-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold tracking-wide">
                Swarattan store
              </div>
              <div className="text-xs text-gray-400 ml-2 font-medium">
                FABRIC OF HOMES
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Transform your home with our premium collection of bed, bath, and
              home decor essentials. Quality craftsmanship meets modern design.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <a
                  href="tel:6284824078"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  6284824078
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <a
                  href="mailto:swarattanenterprises@gmail.com"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  swarattanenterprises@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <a
                  href="https://www.google.com/maps?ll=31.333845,75.633552&z=14&t=m&hl=en&gl=IN&mapclient=embed&q=Basant+Hills+Jalandhar,+Punjab+144009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Punjab, India
                </a>
              </div>
            </div>
          </div>

          {/* Shop & Customer Service */}
          <div className="grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) =>
              ["Shop", "Customer Service"].includes(category) ? (
                <div key={category}>
                  <h3 className="font-semibold mb-4 text-amber-400">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>

          {/* Company & Legal */}
          <div className="grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) =>
              ["Company", "Legal"].includes(category) ? (
                <div key={category}>
                  <h3 className="font-semibold mb-4 text-amber-400">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* MD and LG layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 ">
              <div className="flex-shrink-0 flex items-center space-x-4">
                <Link href="/" className="flex items-center">
                  <img
                    src="/About.jpeg"
                    alt="Logo"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </Link>
                <div className="hidden lg:block">
                  <p className="hidden md:block text-xl font-bold text-transparent bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text">
                    Swarattan Homes
                  </p>

                  <p className="text-sm text-gray-200">For Your Own Best,</p>
                  <p className="text-sm text-gray-200">Presenting The Best.</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 py-4 mb-6 text-sm leading-relaxed">
              Transform your home with our premium collection of bed, bath, and
              home decor essentials. Quality craftsmanship meets modern design.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <a
                  href="tel:6284824078"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  6284824078
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <a
                  href="mailto:swarattanenterprises@gmail.com"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  swarattanenterprises@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <a
                  href="https://www.google.com/maps?ll=31.333845,75.633552&z=14&t=m&hl=en&gl=IN&mapclient=embed&q=Basant+Hills+Jalandhar,+Punjab+144009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Punjab, India
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4 text-amber-400">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 mt-5 pt-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link
                href="https://www.facebook.com/61572801129751"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/swarattan?igsh=ajlsN3NlNGdjeHN5"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/c/916284824078"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:swarattanenterprises@gmail.com"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-gray-400 mt-2 text-sm text-center ">
            <p>&copy; 2024 Swarattan. All rights reserved.</p>
            {/* <p className="mt-1">Made with ❤️ in India</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
