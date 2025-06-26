import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["stunning", "responsive", "high-converting", "user-friendly", "optimized"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-black relative">
      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-500 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Back to Home</span>
        </div>
      </Link>
      
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
           <Link href="/pages/portfolio">
               <Button variant="secondary" size="sm" className="gap-4">
              Explore our portfolio <MoveRight className="w-4 h-4" />
            </Button>
           </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50 text-white">We build</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-violet-400"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-spektr-cyan-50 text-white">digital solutions</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              From captivating websites and high-converting landing pages to comprehensive branding and SEO optimization - we craft digital experiences that drive results. Our end-to-end solutions ensure your online presence works as hard as you do.
            </p>
          </div>
          <div className="flex flex-row gap-3">
           <Link href="/pages/consult">
              <Button size="lg" className="gap-4" variant="outline">
              Get a free consultation <PhoneCall className="w-4 h-4" />
            </Button>
           </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };