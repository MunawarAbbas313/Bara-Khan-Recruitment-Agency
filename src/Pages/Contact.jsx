// src/pages/Contact.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const contactDetails = {
  address_en:
    "Office#10, 2nd Floor, Al Fateh Plaza, Chandni Chowk Flyover, B-Block Satellite Town, Rawalpindi, 43000, Pakistan",
  address_ur:
    "آفس # 10، دوسری منزل، الفتح پلازہ، چاندنی چوک فلائی اوور، بی بلاک سیٹلائٹ ٹاؤن، راولپنڈی، 43000، پاکستان",
  phone: "+92 333 5306263",
  email: "info@barakhan.com",
  hours_en: ["Monday - Saturday: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  hours_ur: ["پیر - ہفتہ: صبح 9:00 بجے – شام 6:00 بجے", "اتوار: بند"],
 mapEmbedUrl:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.291500573171!2d73.0697!3d33.6324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ad810f9f37%3A0x66ec867396502170!2sBara%20Khan%20Recruitment%20Agency!5e0!3m2!1sen!2s!4v1729337100000!5m2!1sen!2s"
}

const Contact = () => {
  const { language } = useTheme();

  return (
    <div className="bg-white text-blue-900">
      {/* Page Header */}
      <section className="bg-blue-50 pt-28 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            {language === "en" ? "Get In Touch" : "رابطہ کریں"}
          </h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            {language === "en"
              ? "We are here to help you with your global career journey. Reach out to us with any questions."
              : "ہم آپ کے عالمی کیریئر کے سفر میں آپ کی مدد کے لیے حاضر ہیں۔ کسی بھی سوال کے ساتھ ہم سے رابطہ کریں۔"}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <ContactForm language={language} />
            <ContactInfo language={language} />
          </div>
        </div>
      </section>

      {/* Highlighted Location with Map */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
            {language === "en" ? "Our Location" : "ہمارا مقام"}
          </h2>
          <div className="rounded-2xl shadow-xl overflow-hidden border-4 border-white">
            <iframe
              src={contactDetails.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bara Khan Recruitment Agency Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactForm = ({ language }) => (
  <div className="bg-blue-50 rounded-2xl shadow-lg p-8">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">
      {language === "en" ? "Send Us a Message" : "ہمیں ایک پیغام بھیجیں"}
    </h2>
    <form action="#" method="POST" className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg font-semibold text-blue-800 mb-2">
          {language === "en" ? "Full Name" : "پورا نام"}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 border border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder={language === "en" ? "John Doe" : "جان ڈو"}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-blue-800 mb-2">
          {language === "en" ? "Email Address" : "ای میل ایڈریس"}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-semibold text-blue-800 mb-2">
          {language === "en" ? "Message" : "پیغام"}
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="w-full px-4 py-3 border border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder={
            language === "en" ? "Your message here..." : "آپ کا پیغام یہاں..."
          }
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          <FaPaperPlane className="mr-2" />
          {language === "en" ? "Send Message" : "پیغام بھیجیں"}
        </button>
      </div>
    </form>
  </div>
);

const ContactInfo = ({ language }) => (
  <div className="space-y-8">
    <InfoCard
      icon={FaMapMarkerAlt}
      title_en="Our Office"
      title_ur="ہمارا دفتر"
      content_en={contactDetails.address_en}
      content_ur={contactDetails.address_ur}
      language={language}
    />
    <InfoCard
      icon={FaPhoneAlt}
      title_en="Call or Email"
      title_ur="کال یا ای میل کریں"
      content_en={
        <>
          <a href={`tel:${contactDetails.phone}`} className="block hover:text-blue-600">
            {contactDetails.phone}
          </a>
          <a href={`mailto:${contactDetails.email}`} className="block hover:text-blue-600">
            {contactDetails.email}
          </a>
        </>
      }
      content_ur={
        <>
          <a href={`tel:${contactDetails.phone}`} className="block hover:text-blue-600">
            {contactDetails.phone}
          </a>
          <a href={`mailto:${contactDetails.email}`} className="block hover:text-blue-600">
            {contactDetails.email}
          </a>
        </>
      }
      language={language}
    />
    <InfoCard
      icon={FaClock}
      title_en="Opening Hours"
      title_ur="کھلنے کے اوقات"
      content_en={
        <>
          {contactDetails.hours_en.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </>
      }
      content_ur={
        <>
          {contactDetails.hours_ur.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </>
      }
      language={language}
    />
  </div>
);

const InfoCard = ({
  icon: Icon,
  title_en,
  title_ur,
  content_en,
  content_ur,
  language,
}) => (
  <div className="flex items-start bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex-shrink-0 mr-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-blue-700 mb-2">
        {language === "en" ? title_en : title_ur}
      </h3>
      <div className="text-lg text-blue-800">
        {language === "en" ? content_en : content_ur}
      </div>
    </div>
  </div>
);

export default Contact;
