// src/pages/Services.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaFileSignature,
  FaPassport,
  FaPlaneDeparture,
  FaUserTie,
  FaHotel,
  FaHardHat,
  FaBriefcaseMedical,
  FaLaptopCode,
  FaGasPump,
  FaUtensils,
  FaUserEdit, // New icon for CV
} from "react-icons/fa";

// --- Data for this page ---

// 1. Core Services Data
const coreServices = [
  {
    icon: FaUserEdit,
    en: {
      title: "CV Building & Profile Enhancement",
      desc: "Our experts refactor your CV to meet international standards. We highlight your skills and experience to make you stand out to global employers.",
    },
    ur: {
      title: "سی وی کی تیاری اور پروفائل میں بہتری",
      desc: "ہمارے ماہرین آپ کے سی وی کو بین الاقوامی معیارات پر پورا اترنے کے لیے تیار کرتے ہیں۔ ہم عالمی آجروں کے سامنے آپ کو نمایاں کرنے کے لیے آپ کی مہارتوں اور تجربے کو اجاگر کرتے ہیں۔",
    },
  },
  {
    icon: FaUserTie,
    en: {
      title: "Interview & Skill Preparation",
      desc: "We conduct mock interviews and provide expert coaching, giving you the confidence and techniques needed to succeed in interviews with foreign companies.",
    },
    ur: {
      title: "انٹرویو اور مہارت کی تیاری",
      desc: "ہم فرضی انٹرویوز منعقد کرتے ہیں اور ماہرانہ کوچنگ فراہم کرتے ہیں، جو آپ کو غیر ملکی کمپنیوں کے ساتھ انٹرویوز میں کامیابی کے لیے درکار اعتماد اور تکنیک فراہم کرتے ہیں۔",
    },
  },
  {
    icon: FaPassport,
    en: {
      title: "Visa & Documentation Assistance",
      desc: "Navigating the complex visa process is our specialty. We provide end-to-end support for all legal paperwork, medicals, and documentation.",
    },
    ur: {
      title: "ویزا اور دستاویزات میں معاونت",
      desc: "پیچیدہ ویزا کے عمل کو نیویگیٹ کرنا ہماری خاصیت ہے۔ ہم تمام قانونی کاغذی کارروائی، میڈیکلز، اور دستاویزات کے لیے مکمل معاونت فراہم کرتے ہیں۔",
    },
  },
  {
    icon: FaPlaneDeparture,
    en: {
      title: "Pre-Departure & Post-Arrival Support",
      desc: "Our support doesn't end at the airport. We provide pre-departure briefings and assist with initial post-arrival queries to ensure a smooth transition.",
    },
    ur: {
      title: "روانگی سے پہلے اور آمد کے بعد معاونت",
      desc: "ہماری مدد ہوائی اڈے پر ختم نہیں ہوتی۔ ہم ایک ہموار منتقلی کو یقینی بنانے کے لیے روانگی سے قبل بریفنگ فراہم کرتے ہیں اور آمد کے بعد کے ابتدائی سوالات میں مدد کرتے ہیں۔",
    },
  },
];

// 2. Process Steps Data (Re-used from HomePage)
const processSteps = [
  {
    icon: FaFileSignature,
    en: { title: "1. Apply Online", desc: "Submit your application and CV through our secure online portal." },
    ur: { title: "1. آن لائن اپلائی کریں", desc: "ہمارے محفوظ آن لائن پورٹل کے ذریعے اپنی درخواست اور سی وی جمع کروائیں۔" },
  },
  {
    icon: FaUserTie,
    en: { title: "2. Interview & Vetting", desc: "Our team conducts a thorough interview and background check." },
    ur: { title: "2. انٹرویو اور جانچ پڑتال", desc: "ہماری ٹیم ایک مکمل انٹرویو اور پس منظر کی جانچ پڑتال کرتی ہے۔" },
  },
  {
    icon: FaPassport,
    en: { title: "3. Visa & Documentation", desc: "We provide expert assistance for all visa and travel documents." },
    ur: { title: "3. ویزا اور دستاویزات", desc: "ہم تمام ویزا اور سفری دستاویزات کے لیے ماہرانہ مدد فراہم کرتے ہیں۔" },
  },
  {
    icon: FaPlaneDeparture,
    en: { title: "4. Deployment", desc: "Congratulations! You are on your way to your new job abroad." },
    ur: { title: "4. روانگی", desc: "مبارک ہو! آپ بیرون ملک اپنی نئی نوکری کے لیے روانہ ہو رہے ہیں۔" },
  },
];

// 3. Industries Data (Re-used from HomePage)
const jobCategories = [
  { icon: FaBriefcaseMedical, en: "Health Care", ur: "صحت" },
  { icon: FaHardHat, en: "Construction", ur: "تعمیرات" },
  { icon: FaHotel, en: "Hospitality", ur: "مہمان نوازی" },
  { icon: FaLaptopCode, en: "Information Technology", ur: "انفارمیشن ٹیکنالوجی" },
  { icon: FaGasPump, en: "Oil, Gas & Petroleum", ur: "تیل، گیس اور پیٹرولیم" },
  { icon: FaUtensils, en: "Food Processing", ur: "فوڈ پروسیسنگ" },
];


// --- Main Services Page Component ---

const Services = () => {
  const { language } = useTheme();

  return (
    <div className="bg-white text-blue-900">
      
      {/* 1. Page Header */}
      <section className="bg-blue-50 pt-28 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            {language === "en" ? "Our Services" : "ہماری خدمات"}
          </h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            {language === "en"
              ? "We provide comprehensive support at every step of your journey, from application to deployment."
              : "ہم آپ کے سفر کے ہر قدم پر، درخواست سے لے کر روانگی تک، جامع مدد فراہم کرتے ہیں۔"}
          </p>
        </div>
      </section>

      {/* 2. Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex"
                >
                  <Icon
                    size={48}
                    className="text-blue-600 mr-6 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                      {language === "en" ? service.en.title : service.ur.title}
                    </h3>
                    <p className="text-blue-800">
                      {language === "en" ? service.en.desc : service.ur.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* 3. Our Process Section (Re-used from Home) */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            {language === "en" ? "Your Journey With Us" : "ہمارے ساتھ آپ کا سفر"}
          </h2>
          <p className="text-lg text-blue-800 mb-16 max-w-2xl mx-auto">
            {language === "en"
              ? "A simple, transparent, and supportive 4-step process."
              : "ایک سادہ، شفاف، اور معاون 4 مرحلاتی عمل۔"}
          </p>
          
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2">
              <svg className="w-full" height="2" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" strokeDasharray="10 10" className="stroke-current text-blue-100"/>
              </svg>
            </div>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative z-10 flex flex-col items-center p-6">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-600 text-white shadow-lg mb-6">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                    {language === "en" ? step.en.title : step.ur.title}
                  </h3>
                  <p className="text-blue-800">
                    {language === "en" ? step.en.desc : step.ur.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve (Re-used from Home) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-16">
            {language === "en" ? "Industries We Serve" : "صنعتیں جن کی ہم خدمت کرتے ہیں"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {jobCategories.map((job, index) => {
              const Icon = job.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl shadow-md 
                             hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon
                    size={48}
                    className="text-blue-600 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-900 text-center">
                    {language === "en" ? job.en : job.ur}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action (Re-used from Home/About) */}
      <section className="py-16 bg-white"> 
        <div className="container mx-auto px-6">
          <div className="bg-blue-100 rounded-2xl p-8 md:p-12 text-center shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              {language === "en" ? "Ready to Start Your Journey?" : "اپنا سفر شروع کرنے کے لیے تیار ہیں؟"}
            </h3>
            <p className="text-blue-800 text-lg mb-6 max-w-xl mx-auto">
              {language === "en"
                ? "Get in touch with our team today and let us help you find your next opportunity."
                : "آج ہی ہماری ٹیم سے رابطہ کریں اور آئیے ہم آپ کو اپنا اگلا موقع تلاش کرنے میں مدد کریں۔"}
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full 
                         text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow"
            >
              {language === "en" ? "Contact Us" : "ہم سے رابطہ کریں"}
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Services;