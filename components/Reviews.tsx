import { motion } from "framer-motion";
import React, { memo, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
// Images loaded directly from public folder to bypass Sharp
const women1 = "/assets/services/women1.jpg"
const women2 = "/assets/services/women2.png"
const women3 = "/assets/services/women3.jpg"
const women4 = "/assets/services/women4.jpg"
const women5 = "/assets/services/women5.jpg"
const men1 = "/assets/services/men1.jpg"
const men2 = "/assets/services/men2.jpg"
const men3 = "/assets/services/men3.jpg"
const men4 = "/assets/services/men4.jpg"

// Define the Testimonial interface
interface Testimonial {
  text: string;
  image: string; // Changed from StaticImageData to string
  name: string;
  role: string;
}

// Updated TestimonialsColumn component import (adjust path as needed)
import { TestimonialsColumn } from "./testimonials-columns-1";

const Testimonials = memo(() => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  // Memoized testimonials data for better performance
  const testimonials: Testimonial[] = useMemo(() => [
  {
    text: t('home.testimonials.testimonial1'),
    image: women1,
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: t('home.testimonials.testimonial2'),
    image: men1,
    name: "Bilal Ahmed",
    role: "Marketing Lead",
  },
  {
    text: t('home.testimonials.testimonial3'),
    image: women2,
    name: "Saman Malik",
    role: "Product Owner",
  },
  {
    text: t('home.testimonials.testimonial4'),
    image: men2,
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: t('home.testimonials.testimonial5'),
    image: women3,
    name: "Zainab Hussain",
    role: "Digital Strategist",
  },
  {
    text: t('home.testimonials.testimonial6'),
    image: women4,
    name: "Aliza Khan",
    role: "Creative Director",
  },
  {
    text: t('home.testimonials.testimonial7'),
    image: men3,
    name: "Farhan Siddiqui",
    role: "Brand Manager",
  },
  {
    text: t('home.testimonials.testimonial8'),
    image: women5,
    name: "Sana Sheikh",
    role: "Marketing Manager",
  },
  {
    text: t('home.testimonials.testimonial9'),
    image: men4,
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
], [t]);

  // Memoized column data
  const firstColumn = useMemo(() => testimonials.slice(0, 3), [testimonials]);
  const secondColumn = useMemo(() => testimonials.slice(3, 6), [testimonials]);
  const thirdColumn = useMemo(() => testimonials.slice(6, 9), [testimonials]);

  return (
    <section className={`relative overflow-hidden p-20 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-black/80 to-purple-950'
        : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'
    }`}>
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-600/20' : 'bg-gradient-to-br from-purple-400/25 to-pink-500/20'
        }`}></div>
        <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
          isDark ? 'bg-pink-600/20' : 'bg-gradient-to-br from-pink-500/25 to-purple-600/20'
        }`}></div>
        <div className={`absolute top-1/4 left-1/3 h-80 w-80 rounded-full blur-3xl ${
          isDark ? 'bg-violet-800/15' : 'bg-gradient-to-br from-purple-400/20 to-pink-400/15'
        }`}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"
          : "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMTUsMjMsNDIsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDE1LDIzLDQyLDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"
      }`}></div>
      
      <div className="container z-20 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className={`border py-1 px-4 rounded-lg ${
              isDark 
                ? 'border-purple-400 text-purple-300'
                : 'border-purple-500 text-white bg-gradient-to-r from-purple-600/90 to-pink-600/90 shadow-lg'
            }`}>
              {t('home.testimonials.title')}
            </div>
          </div>

          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-5 leading-tight ${
            isDark 
              ? 'text-white'
              : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-600 to-pink-600'
          }`}>
            {t('home.testimonials.subtitle')}
          </h2>
          <p className={`text-center mt-5 ${
            isDark ? 'text-violet-200' : 'text-gray-700'
          }`}>
            {t('home.testimonials.description')}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;