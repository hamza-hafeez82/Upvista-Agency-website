import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

function Hero() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      t('services.hero.title1'),
      t('services.hero.title2'),
      t('services.hero.title3'),
      t('services.hero.title4'),
      t('services.hero.title5')
    ],
    [t]
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
    <div className={`w-full ${isDark ? 'bg-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} relative`}>
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
           <Link href="/pages/portfolio">
               <Button variant="secondary" size="sm" className="gap-4">
              {t('services.hero.portfolio')} <MoveRight className="w-4 h-4" />
            </Button>
           </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>{t('services.hero.weBuild')}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute font-semibold ${isDark ? 'text-violet-400' : 'text-violet-600'}`}
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
              <span className={isDark ? 'text-white' : 'text-gray-900'}>{t('services.hero.digitalSolutions')}</span>
            </h1>

            <p className={`text-lg md:text-xl leading-relaxed tracking-tight ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl text-center`}>
              {t('services.hero.description')}
            </p>
          </div>
          <div className="flex flex-row gap-3">
           <Link href="/Consult">
              <Button size="lg" className="gap-4" variant="outline">
              {t('services.hero.consultation')} <PhoneCall className="w-4 h-4" />
            </Button>
           </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };