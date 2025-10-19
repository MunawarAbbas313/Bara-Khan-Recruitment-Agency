// src/pages/HomePage.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import Counter from "../Components/Counter";
import WhatsAppButton from "../Components/WhatsAppButton";

// --- React Icons ---
import {
  FaFileSignature,
  FaPassport,
  FaPlaneDeparture,
  FaUserTie,
  FaHeart,
  FaHotel,
  FaHardHat,
  FaBriefcaseMedical,
  FaLaptopCode,
  FaGasPump,
  FaUtensils
} from "react-icons/fa";

// --- Data for Sections (with Flag API codes) ---
const partnerCountries = [
  { name: "Europe", code: "eu" },
  { name: "Qatar", code: "qa" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Malaysia", code: "my" },
  { name: "Kuwait", code: "kw" },
  { name: "UAE", code: "ae" },
  { name: "Oman", code: "om" },
  { name: "Bahrain", code: "bh" },
];

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

const services = [
  {
    icon: FaBriefcaseMedical,
    en: { title: "Professional CV Building", desc: "We craft your CV to meet international standards." },
    ur: { title: "پروفیشنل سی وی بنانا", desc: "ہم آپ کا سی وی بین الاقوامی معیار کے مطابق بناتے ہیں۔" },
  },
  {
    icon: FaUserTie,
    en: { title: "Interview Preparation", desc: "Get expert coaching to confidently handle interviews." },
    ur: { title: "انٹرویو کی تیاری", desc: "اعتماد سے انٹرویوز کو سنبھالنے کے لیے ماہرانہ کوچنگ حاصل کریں۔" },
  },
  {
    icon: FaPassport,
    en: { title: "Visa & Legal Assistance", desc: "Navigating the complexities of visas and paperwork." },
    ur: { title: "ویزا اور قانونی معاونت", desc: "ویزا اور کاغذی کارروائی کی پیچیدگیوں کو سنبھالنا۔" },
  },
];

// Replace the old jobCategories array with this one
const jobCategories = [
  { icon: FaBriefcaseMedical, en: "Health Care", ur: "صحت" },
  { icon: FaHardHat, en: "Construction", ur: "تعمیرات" },
  { icon: FaHotel, en: "Hospitality", ur: "مہمان نوازی" },
  { icon: FaLaptopCode, en: "Information Technology", ur: "انفارمیشن ٹیکنالوجی" },
  { icon: FaGasPump, en: "Oil, Gas & Petroleum", ur: "تیل، گیس اور پیٹرولیم" },
  { icon: FaUtensils, en: "Food Processing", ur: "فوڈ پروسیسنگ" },
];
const testimonials = [
  {
    quote_en: "Bara Khan Agency found me my dream job in Dubai. The process was smooth and professional.",
    quote_ur: "بارا خان ایجنسی نے مجھے دبئی میں میرے خوابوں کی نوکری تلاش کر دی۔ یہ عمل ہموار اور پیشہ ورانہ تھا۔",
    name: "Ahmed Ali",
    title_en: "Civil Engineer, UAE",
    title_ur: "سول انجینئر، متحدہ عرب امارات",
  },
  {
    quote_en: "I am grateful for their visa assistance. I am now working in Saudi Arabia thanks to them.",
    quote_ur: "میں ان کی ویزا معاونت کے لیے شکر گزار ہوں۔ میں اب ان کی بدولت سعودی عرب میں کام کر رہا ہوں۔",
    name: "Fatima Noor",
    title_en: "Nurse, KSA",
    title_ur: "نرس، سعودی عرب",
  },
  {
    quote_en: "Highly recommended. They handled all the paperwork for my move to Qatar.",
    quote_ur: "بہت سفارش کی جاتی ہے۔ انہوں نے قطر منتقل ہونے کے لیے میری تمام کاغذی کارروائی سنبھالی۔",
    name: "Usman Khan",
    title_en: "Project Manager, Qatar",
    title_ur: "پروجیکٹ مینیجر، قطر",
  },
];


// --- Main HomePage Component ---

const HomePage = () => {
  // We only need 'language' from context now
  const { language } = useTheme();

  return (
    // Base theme from your About.jsx
    <div className="bg-white text-blue-900">
      
      {/* New Component Order */}
      <HeroSection language={language} />
      <PartnerCountriesSection language={language} />
      <StatsSection language={language} />
      <HowItWorksSection language={language} />
      <ServicesSection language={language} />
      <FeaturedJobsSection language={language} />
      <TestimonialsSection language={language} />
    

      <WhatsAppButton />
    </div>
  );
};

// --- Sub-Components (New Theme + New Order + Bilingual) ---

// 1. (NEW) HERO SECTION
const HeroSection = ({ language }) => (
  // Added pb-16 for better vertical spacing
  <section className="pt-24 pb-16 bg-blue-50 "> 
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content (Unchanged) */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
            {language === "en"
              ? "Your Gateway to Global Careers"
              : "عالمی کیریئر کے لیے آپ کا گیٹ وے"}
          </h1>
          <p className="mt-4 text-lg text-blue-800 max-w-lg mx-auto md:mx-0">
            {language === "en"
              ? "Connecting talented professionals from Pakistan with premier employers worldwide."
              : "پاکستان سے باصلاحیت پیشہ ور افراد کو دنیا بھر کے اعلیٰ آجروں سے جوڑنا۔"}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-full 
                       text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            {language === "en" ? "Find Your Job" : "اپنی نوکری تلاش کریں"}
          </a>
        </div>
        
        {/* Image Section (FIXED) */}
        <div className="flex justify-center">
          <img
            // Replaced the small thumbnail with a high-quality placeholder
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2qPIztLRtgmVSG4yaFtquNbltiibpVlTOw&s"
            alt="Professionals working abroad"
            
            // --- FIX IS HERE ---
            // Added w-full and h-auto to make the image responsive
            className="rounded-2xl shadow-xl w-full h-auto" 
            // -------------------
          />
          {/* Replace with your actual image, e.g., /assets/hero-image.jpg */}
        </div>
      </div>
    </div>
  </section>
);

// 2. (MOVED UP) PARTNER COUNTRIES
const PartnerCountriesSection = ({ language }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-16">
        {language === "en" ? "Our Global Reach" : "ہماری عالمی رسائی"}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {partnerCountries.map((country) => (
          <div
            key={country.name}
            className="flex flex-col items-center justify-center p-6 bg-blue-50 
                       rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300
                       min-w-[150px]"
          >
            <img
              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
              alt={`${country.name} flag`}
              className="w-20 h-auto mb-4 rounded-md shadow-sm"
            />
            <p className="text-xl font-semibold text-blue-900">{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3. STATS SECTION
const StatsSection = ({ language }) => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-16">
        {language === "en" ? "Our Impact in Numbers" : "اعداد و شمار میں ہمارا اثر"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { target: "500", suffix: "+", en: "Successful Candidates", ur: "کامیاب امیدوار" },
          { target: "20", suffix: "+", en: "Partner Countries", ur: "شراکت دار ممالک" },
          { target: "10", suffix: "+", en: "Years of Experience", ur: "سالوں کا تجربہ" },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <span className="text-blue-700 text-5xl md:text-6xl font-extrabold">
              <Counter target={stat.target} suffix={stat.suffix} />
            </span>
            <p className="mt-4 text-xl font-semibold text-blue-900">
              {language === "en" ? stat.en : stat.ur}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 4. HOW IT WORKS
const HowItWorksSection = ({ language }) => (
  <section className="py-20 bg-white">
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
);

// 5. OUR SERVICES
const ServicesSection = ({ language }) => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-16 text-center">
        {language === "en" ? "We Prepare You For Success" : "ہم آپ کو کامیابی کے لیے تیار کرتے ہیں"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Icon
                size={48}
                className="text-blue-600 mb-6"
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                {language === "en" ? service.en.title : service.ur.title}
              </h3>
              <p className="text-blue-800">
                {language === "en" ? service.en.desc : service.ur.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// 6. FEATURED JOB CATEGORIES
// 6. FEATURED JOB CATEGORIES
const FeaturedJobsSection = ({ language }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-16">
        {language === "en" ? "Opportunities We Offer" : "مواقع جو ہم پیش کرتے ہیں"}
      </h2>
      {/* Updated grid for 6 items */}
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
);

// 7. TESTIMONIALS
const TestimonialsSection = ({ language }) => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-16 text-center">
        {language === "en" ? "What Our Candidates Say" : "ہمارے امیدوار کیا کہتے ہیں"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col p-8 bg-white rounded-2xl shadow-lg"
          >
            <FaHeart className="text-blue-600 text-3xl mb-4" />
            <p className="text-blue-800 text-lg mb-6 italic">
              "{language === "en" ? testimonial.quote_en : testimonial.quote_ur}"
            </p>
            <div className="mt-auto">
              <p className="text-xl font-semibold text-blue-700">
                {testimonial.name}
              </p>
              <p className="text-blue-700/80">
                {language === "en" ? testimonial.title_en : testimonial.title_ur}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);




export default HomePage;