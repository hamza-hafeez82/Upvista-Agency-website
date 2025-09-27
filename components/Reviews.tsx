import { motion } from "framer-motion";
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

const testimonials: Testimonial[] = [
  {
    text: "Their team crafted a beautiful and functional website for us. It boosted our visibility and client trust dramatically.",
    image: women1,
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "We needed a landing page that converts — and they delivered. Clean design, fast loading, and optimized perfectly.",
    image: men1,
    name: "Bilal Ahmed",
    role: "Marketing Lead",
  },
  {
    text: "The UI/UX design exceeded our expectations. Intuitive layouts and consistent branding helped elevate our digital product.",
    image: women2,
    name: "Saman Malik",
    role: "Product Owner",
  },
  {
    text: "From branding to website development, everything was handled with creativity and professionalism.",
    image: men2,
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Their landing page design helped us increase conversions by 35% — visually stunning and mobile-friendly.",
    image: women3,
    name: "Zainab Hussain",
    role: "Digital Strategist",
  },
  {
    text: "Great collaboration and clear process. They understood our needs and built a custom solution that reflects our brand.",
    image: women4,
    name: "Aliza Khan",
    role: "Creative Director",
  },
  {
    text: "Professional team and timely delivery. Our branding is now modern, bold, and consistent across platforms.",
    image: men3,
    name: "Farhan Siddiqui",
    role: "Brand Manager",
  },
  {
    text: "They helped us rebrand and redesign our website — the result was a sleek and modern experience that stands out.",
    image: women5,
    name: "Sana Sheikh",
    role: "Marketing Manager",
  },
  {
    text: "UI/UX revamp brought clarity to our service offering. Our users now stay longer and explore more.",
    image: men4,
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-black p-20 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950 to-black opacity-80 z-0"></div>
      
      <div className="container z-10 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-violet-400 py-1 px-4 rounded-lg text-violet-300">
              Testimonials
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
            What our users say
          </h2>
          <p className="text-center mt-5 text-violet-200">
            See what our customers have to say about us.
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
};

export default Testimonials;