import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Shop: ["Bed", "Bath", "Mattress", "Rugs", "Curtains", "Cushions"],
    "Customer Service": ["Contact Us", "FAQ", "Shipping Info", "Returns", "Size Guide", "Care Instructions"],
    Company: ["About Us", "Careers", "Press", "Sustainability", "Store Locator", "Bulk Orders"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold tracking-wide">SPACES</div>
              <div className="text-xs text-gray-400 ml-2 font-medium">FABRIC OF HAPPY HOMES</div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Transform your home with our premium collection of bed, bath, and home decor essentials. Quality
              craftsmanship meets modern design.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <span>support@spaces.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-amber-400">{category}</h3>
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

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; 2024 Spaces. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
