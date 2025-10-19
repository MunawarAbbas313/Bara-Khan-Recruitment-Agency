// src/pages/Reviews.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaStar, FaHeart, FaPaperPlane } from "react-icons/fa";

// --- Data for this page ---

// Expanded testimonial list for a detailed page
const testimonialsData = [
  {
    id: 1,
    name: "Ahmed Ali",
    title_en: "Civil Engineer",
    title_ur: "سول انجینئر",
    location_en: "UAE",
    location_ur: "متحدہ عرب امارات",
    country_code: "ae", // For flag API
    rating: 5,
    quote_en: "Bara Khan Agency found me my dream job in Dubai. The process was smooth, professional, and they handled all my paperwork. Highly recommended!",
    quote_ur: "بارا خان ایجنسی نے مجھے دبئی میں میرے خوابوں کی نوکری تلاش کر دی۔ یہ عمل ہموار، پیشہ ورانہ تھا، اور انہوں نے میری تمام کاغذی کارروائی سنبھالی۔ انتہائی سفارش کی جاتی ہے!",
  },
  {
    id: 2,
    name: "Fatima Noor",
    title_en: "Registered Nurse",
    title_ur: "رجسٹرڈ نرس",
    location_en: "Saudi Arabia",
    location_ur: "سعودی عرب",
    country_code: "sa",
    rating: 5,
    quote_en: "I am grateful for their visa assistance. The team was very supportive and guided me through the complex medical and documentation process.",
    quote_ur: "میں ان کی ویزا معاونت کے لیے شکر گزار ہوں۔ ٹیم بہت معاون تھی اور انہوں نے مجھے پیچیدہ طبی اور دستاویزی عمل میں رہنمائی کی۔",
  },
  {
    id: 3,
    name: "Usman Khan",
    title_en: "Project Manager",
    title_ur: "پروجیکٹ مینیجر",
    location_en: "Qatar",
    location_ur: "قطر",
    country_code: "qa",
    rating: 5,
    quote_en: "A very transparent and reliable agency. They connected me with a top construction firm in Doha. My deployment was faster than I expected.",
    quote_ur: "ایک بہت ہی شفاف اور قابل اعتماد ایجنسی۔ انہوں نے مجھے دوحہ میں ایک اعلیٰ تعمیراتی فرم سے ملوایا۔ میری روانگی میری توقع سے زیادہ تیز تھی۔",
  },
  {
    id: 4,
    name: "Bilal Malik",
    title_en: "IT Specialist",
    title_ur: "آئی ٹی اسپیشلسٹ",
    location_en: "Malaysia",
    location_ur: "ملائیشیا",
    country_code: "my",
    rating: 4,
    quote_en: "Good experience. They have strong connections in the IT sector in Kuala Lumpur. The interview preparation service was very helpful.",
    quote_ur: "اچھا تجربہ۔ کوالالمپور میں آئی ٹی سیکٹر میں ان کے مضبوط روابط ہیں۔ انٹرویو کی تیاری کی سروس بہت مددگار تھی۔",
  },
  {
    id: 5,
    name: "Aisha Begum",
    title_en: "Hotel Staff",
    title_ur: "ہوٹل اسٹاف",
    location_en: "Bahrain",
    location_ur: "بحرین",
    country_code: "bh",
    rating: 5,
    quote_en: "Thank you Bara Khan Agency! I am now working in a 5-star hotel in Manama. They are very honest people and helped me a lot.",
    quote_ur: "شکریہ بارا خان ایجنسی! میں اب منامہ کے ایک 5 اسٹار ہوٹل میں کام کر رہی ہوں۔ وہ بہت ایماندار لوگ ہیں اور انہوں نے میری بہت مدد کی۔",
  },
  {
    id: 6,
    name: "Zainab Hassan",
    title_en: "Caregiver",
    title_ur: "نگہداشت کرنے والی",
    location_en: "Europe",
    location_ur: "یورپ",
    country_code: "eu",
    rating: 5,
    quote_en: "The best agency for anyone looking to work in Europe. They handled my complex visa case perfectly. I am very happy with their service.",
    quote_ur: "یورپ میں کام کرنے کے خواہشمند ہر فرد کے لیے بہترین ایجنسی۔ انہوں نے میرا پیچیدہ ویزا کیس بالکل ٹھیک سنبھالا۔ میں ان کی سروس سے بہت خوش ہوں۔",
  },
];

// --- Main Reviews Page Component ---

const Reviews = () => {
  const { language } = useTheme();

  return (
    <div className="bg-white text-blue-900">
      
      {/* 1. Page Header */}
      <PageHeader language={language} />

      {/* 2. Testimonials Grid Section */}
      <TestimonialsGrid language={language} />

      {/* 3. Leave a Review CTA */}
      <LeaveReviewCTA language={language} />

    </div>
  );
};

// --- Sub-Components ---

// 1. Page Header
const PageHeader = ({ language }) => (
  <section className="bg-blue-50 pt-28 pb-16 text-center">
    <div className="container mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        {language === "en" ? "What Our Candidates Say" : "ہمارے امیدوار کیا کہتے ہیں"}
      </h1>
      <p className="text-lg text-blue-800 max-w-3xl mx-auto">
        {language === "en"
          ? "Real stories from professionals who trusted us with their global career journey."
          : "ان پیشہ ور افراد کی حقیقی کہانیاں جنہوں نے اپنے عالمی کیریئر کے سفر میں ہم پر بھروسہ کیا۔"}
      </p>
    </div>
  </section>
);

// 2. Testimonials Grid
const TestimonialsGrid = ({ language }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((item) => (
          <TestimonialCard key={item.id} item={item} language={language} />
        ))}
      </div>
    </div>
  </section>
);

// 3. Testimonial Card
const TestimonialCard = ({ item, language }) => (
  <div className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col h-full border border-blue-100">
    <FaHeart className="text-blue-600 text-3xl mb-4" />
    
    {/* Star Rating */}
    <RatingStars rating={item.rating} />
    
    {/* Quote */}
    <p className="text-blue-800 text-lg my-6 italic flex-grow">
      "{language === "en" ? item.quote_en : item.quote_ur}"
    </p>
    
    {/* Author Info */}
    <div className="mt-auto flex items-center">
      <img
        src={`https://flagcdn.com/w40/${item.country_code}.png`}
        alt={`${item.location_en} flag`}
        className="w-10 h-auto rounded-full mr-4 border border-blue-100"
      />
      <div>
        <p className="text-xl font-semibold text-blue-700">{item.name}</p>
        <p className="text-blue-700/80">
          {language === "en" ? item.title_en : item.title_ur} | {language === "en" ? item.location_en : item.location_ur}
        </p>
      </div>
    </div>
  </div>
);

// 4. Rating Stars Helper
const RatingStars = ({ rating }) => (
  <div className="flex space-x-1 text-yellow-500">
    {Array(rating)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} />
      ))}
  </div>
);

// 5. Leave a Review CTA
const LeaveReviewCTA = ({ language }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="bg-blue-100 rounded-2xl p-8 md:p-12 text-center shadow-md">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
          {language === "en" ? "Share Your Success Story" : "اپنی کامیابی کی کہانی شیئر کریں"}
        </h3>
        <p className="text-blue-800 text-lg mb-6 max-w-xl mx-auto">
          {language === "en"
            ? "Did we help you find your dream job? We would be honored to hear from you."
            : "کیا ہم نے آپ کو اپنے خوابوں کی نوکری تلاش کرنے میں مدد کی؟ ہمیں آپ سے سن کر فخر ہوگا۔"}
        </p>
        <a
          href="mailto:info@barakhan.com" // Link to your email
          className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full 
                     text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow"
        >
          <FaPaperPlane className="mr-2" />
          {language === "en" ? "Submit Your Review" : "اپنا جائزہ جمع کروائیں"}
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;