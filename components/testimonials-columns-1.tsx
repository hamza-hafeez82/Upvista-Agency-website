import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = memo((props: {
  className?: string;
  testimonials: Testimonial[]; // Define the type for testimonials
  duration?: number;
}) => {
  const { isDark } = useTheme();
  
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 "
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className={`p-10 rounded-3xl backdrop-blur-sm max-w-xs w-full transition-all duration-300 ${
                    isDark 
                      ? 'border border-white/20 shadow-lg bg-white/10 hover:bg-white/20'
                      : 'border border-gray-200/60 shadow-lg bg-white/90 hover:bg-white'
                  }`}
                  key={i}
                >
                  <div className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-white' : 'text-gray-700'
                  }`}>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className={`font-medium tracking-tight leading-5 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {name}
                      </div>
                      <div className={`leading-5 tracking-tight ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
});

TestimonialsColumn.displayName = 'TestimonialsColumn';