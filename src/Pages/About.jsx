// src/pages/About.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaRegEye, FaRegCheckCircle, FaBullseye } from "react-icons/fa";

const About = () => {
  const { language } = useTheme();

  return (
    // Main container with padding for the navbar (pt-28)
    <section className="bg-blue-50 text-blue-900 py-20 pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          {language === "en"
            ? "About Bara Khan Recruitment Agency"
            : "بارا خان ریکروٹمنٹ ایجنسی کے بارے میں"}
        </h1>
        <p className="text-center text-blue-800 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          {language === "en"
            ? "At Bara Khan Recruitment Agency, we connect passionate professionals with trusted employers around the world. Our mission is to provide reliable manpower solutions with honesty, transparency, and professionalism."
            : "بارا خان ریکروٹمنٹ ایجنسی میں، ہم پرجوش پیشہ ور افراد کو دنیا بھر کے قابل اعتماد آجروں سے جوڑتے ہیں۔ ہمارا مشن ایمانداری، شفافیت اور پیشہ ورانہ مہارت کے ساتھ قابل اعتماد افرادی قوت کے حل فراہم کرنا ہے۔"}
        </p>

        {/* Experience & Values Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          
          {/* Our Experience Text */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {language === "en" ? "Our Experience" : "ہمارا تجربہ"}
            </h2>
            <p className="text-blue-800 text-base leading-relaxed">
              {language === "en"
                ? "Over the years, we’ve built strong relationships with reputable companies across the Gulf, Europe, and Asia. We specialize in skilled and unskilled labor recruitment, ensuring both job seekers and employers find the right match. Our dedicated team ensures that each candidate is well-prepared, well-informed, and ready to represent Pakistan globally with pride."
                : "سالوں کے دوران، ہم نے خلیج، یورپ اور ایشیا میں معروف کمپنیوں کے ساتھ مضبوط تعلقات استوار کیے ہیں۔ ہم ہنر مند اور غیر ہنر مند لیبر کی بھرتی میں مہارت رکھتے ہیں، اس بات کو یقینی بناتے ہوئے کہ ملازمت کے متلاشی اور آجر دونوں صحیح مماثلت تلاش کریں۔ ہماری سرشار ٹیم اس بات کو یقینی بناتی ہے کہ ہر امیدوار اچھی طرح سے تیار، باخبر اور فخر کے ساتھ عالمی سطح پر پاکستان کی نمائندگی کرنے کے لیے تیار ہو۔"}
            </p>
          </div>

          {/* Our Values Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <FaRegCheckCircle className="text-blue-600 text-3xl mr-3 flex-shrink-0" />
              <h3 className="text-2xl font-semibold text-blue-700">
                {language === "en" ? "Our Core Values" : "ہماری بنیادی اقدار"}
              </h3>
            </div>
            <ul className="space-y-3 text-base text-blue-800">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✅</span>
                {language === "en" ? "Transparency in all processes" : "تمام عمل میں شفافیت"}
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✅</span>
                {language === "en" ? "Professional guidance for every applicant" : "ہر درخواست دہندہ کے لیے پیشہ ورانہ رہنمائی"}
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✅</span>
                {language === "en" ? "Trust and long-term partnerships" : "اعتماد اور طویل مدتی شراکت داری"}
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✅</span>
                {language === "en" ? "Commitment to quality and reliability" : "معیار اور وشوسنییتا سے وابستگی"}
              </li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          
          {/* Our Mission Card */}
          <div className="bg-blue-100 p-8 rounded-2xl shadow-md">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-blue-600 text-3xl mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-semibold text-blue-700">
                {language === "en" ? "Our Mission" : "ہمارا مشن"}
              </h2>
            </div>
            <p className="text-blue-800 text-base leading-relaxed">
              {language === "en"
                ? "Our goal is to empower individuals by providing career opportunities that improve their lives and contribute to the global workforce. We aim to be recognized as one of Pakistan’s most reliable overseas recruitment agencies."
                : "ہمارا مقصد افراد کو کیریئر کے مواقع فراہم کرکے بااختیار بنانا ہے جو ان کی زندگیوں کو بہتر بناتے ہیں اور عالمی افرادی قوت میں حصہ ڈالتے ہیں۔ ہمارا مقصد پاکستان کی سب سے قابل اعتماد بیرون ملک بھرتی ایجنسیوں میں سے ایک کے طور پر پہچانا جانا ہے۔"}
            </p>
          </div>
          
          {/* Our Vision Card (NEW) */}
          <div className="bg-blue-100 p-8 rounded-2xl shadow-md">
            <div className="flex items-center mb-4">
              <FaRegEye className="text-blue-600 text-3xl mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-semibold text-blue-700">
                {language === "en" ? "Our Vision" : "ہمارا وژن"}
              </h2>
            </div>
            <p className="text-blue-800 text-base leading-relaxed">
              {language === "en"
                ? "To be the most trusted and respected recruitment partner for both our clients and candidates, bridging the gap between Pakistani talent and global opportunities with unwavering integrity and excellence."
                : "اپنے کلائنٹس اور امیدواروں دونوں کے لیے سب سے قابل اعتماد اور قابل احترام بھرتی پارٹنر بننا، پاکستانی ٹیلنٹ اور عالمی مواقع کے درمیان غیر متزلزل سالمیت اور فضیلت کے ساتھ فرق کو پر کرنا۔"}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg border border-blue-100">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            {language === "en" ? "Want to Work Abroad?" : "بیرون ملک کام کرنا چاہتے ہیں؟"}
          </h3>
          <p className="text-blue-800 text-base mb-5">
            {language === "en"
              ? "Get in touch with our team today and let us help you find your next opportunity."
              : "آج ہی ہماری ٹیم سے رابطہ کریں اور آئیے ہم آپ کو اپنا اگلا موقع تلاش کرنے میں مدد کریں۔"}
          </p>
          <a
            href="https://wa.me/923335306263" // Consistent WhatsApp number
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            {language === "en" ? "Contact via WhatsApp" : "واٹس ایپ پر رابطہ کریں"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;