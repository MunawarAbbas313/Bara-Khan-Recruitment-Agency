// src/components/Footer.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

// Updated data to use 'to' props for routing
const quickLinks = [
  { to: "/", en: "Home", ur: "صفحہ اول" },
  { to: "/about", en: "About", ur: "ہمارے بارے میں" },
  { to: "/services", en: "Services", ur: "خدمات" },
  { to: "/jobs", en: "Jobs", ur: "نوکریاں" },
  { to: "/contact", en: "Contact", ur: "رابطہ کریں" },
];

const industryLinks = [
  { to: "/jobs", en: "Health Care", ur: "صحت" },
  { to: "/jobs", en: "Construction", ur: "تعمیرات" },
  { to: "/jobs", en: "Hospitality", ur: "مہمان نوازی" },
  { to: "/jobs", en: "Information Technology", ur: "انفارمیشن ٹیکنالوجی" },
  { to: "/jobs", en: "Oil, Gas & Petroleum", ur: "تیل، گیس اور پیٹرولیم" },
  { to: "/jobs", en: "Food Processing", ur: "فوڈ پروسیسنگ" },
];

const Footer = () => {
  const { language } = useTheme();

  // ✅ Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-100 text-blue-900 border-t border-blue-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Agency Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Bara Khan Agency
            </h2>
            <p className="text-blue-800 mb-6 max-w-sm">
              {language === "en"
                ? "Connecting passionate professionals with trusted employers around the world."
                : "پرجوش پیشہ ور افراد کو دنیا بھر کے قابل اعتماد آجروں سے جوڑنا۔"}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://wa.me/923335306263"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              {language === "en" ? "Quick Links" : "فوری لنکس"}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.en}>
                  <Link
                    to={link.to}
                    onClick={scrollToTop} // ✅ scrolls to top
                    className="text-blue-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    {language === "en" ? link.en : link.ur}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              {language === "en" ? "Industries" : "صنعتیں"}
            </h3>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.en}>
                  <Link
                    to={link.to}
                    onClick={scrollToTop} // ✅ scrolls to top
                    className="text-blue-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    {language === "en" ? link.en : link.ur}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">
              {language === "en" ? "Get in Touch" : "رابطہ کریں"}
            </h3>
            <ul className="space-y-4 text-blue-800">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                <span>
                  Office#10, 2nd Floor, Al Fateh Plaza, Chandni Chowk Flyover,
                  B-Block Satellite Town, Rawalpindi, Pakistan
                </span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                <a href="tel:+923335306263" className="hover:text-blue-600">
                  +92 333 5306263
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                <a
                  href="mailto:info@barakhan.com"
                  className="hover:text-blue-600"
                >
                  info@barakhan.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Footer / Copyright */}
      <div className="bg-blue-200 py-6">
        <div className="container mx-auto px-6 text-center text-blue-800 text-sm">
          © {new Date().getFullYear()}{" "}
          {language === "en"
            ? "Bara Khan Recruitment Agency. All rights reserved."
            : "بارا خان ریکروٹمنٹ ایجنسی۔ جملہ حقوق محفوظ ہیں."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
