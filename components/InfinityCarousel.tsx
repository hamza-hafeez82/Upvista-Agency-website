import React, { memo, useMemo } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
// Images loaded directly from public folder to bypass Sharp
const react = "/assets/logoSliders/react.png";
const js = "/assets/logoSliders/js.png";
const html = "/assets/logoSliders/html.png";
const css = "/assets/logoSliders/css.png";
const figma = "/assets/logoSliders/figma.png";
const next = "/assets/logoSliders/next.png";
const ps = "/assets/logoSliders/ps.png";
const mern = "/assets/logoSliders/mern.png";
const AI = "/assets/logoSliders/AI.png";
const flutter = "/assets/logoSliders/flutter.png";
const AWS = "/assets/logoSliders/AWS.png";
const dotnet = "/assets/logoSliders/dotnet.png";
const devops = "/assets/logoSliders/devops.png";
const googleCloud = "/assets/logoSliders/googleCloud.png";
const mysql = "/assets/logoSliders/MySQL.png";
const illustrator = "/assets/logoSliders/illustrator.png";
const springboot = "/assets/logoSliders/springboot.png";
import Image from "next/image";

const InfiniteSliderEnhanced = memo(() => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  return (
    <div className={`relative w-full overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-black via-black/80 to-purple-950'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-600/20' : 'bg-gradient-to-br from-blue-400/25 to-purple-500/20'
        }`}></div>
        <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
          isDark ? 'bg-indigo-600/20' : 'bg-gradient-to-br from-indigo-500/25 to-violet-600/20'
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

      {/* Content container */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className={`text-center font-bold text-transparent bg-clip-text text-2xl mb-8 ${
            isDark 
              ? 'bg-gradient-to-r from-white to-purple-600' 
              : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700'
          }`}>
            {t('carousel.technologies')}
          </h3>

          {/* Slider container with glass effect */}
          <div className={`backdrop-blur-lg rounded-2xl shadow-xl p-8 ${
            isDark 
              ? 'bg-white/10 border border-white/20' 
              : 'bg-white/80 border border-blue-200/50 shadow-blue-200/20'
          }`}>
            <InfiniteSlider
              gap={44}
              duration={50}
              reverse
              className="w-full flex items-center justify-center"
            >
              {/* Enhanced logo items */}
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={react}
                  alt="React logo"
                  width={100}
                  height={64}
                  className="h-16 w-[100px] object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  React
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={next}
                  alt="Next.js logo"
                  width={120}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Next.js
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={js}
                  alt="JavaScript logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  JavaScript
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={html}
                  alt="HTML logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  HTML
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={css}
                  alt="CSS logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  CSS
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={AWS}
                  alt="AWS logo"
                  width={120}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Amazon cloud
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={googleCloud}
                  alt="googleCloud logo"
                  width={120}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Google Cloud
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={dotnet}
                  alt="dotnet logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  .NET
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={devops}
                  alt="devops logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  DevOps
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={mysql}
                  alt="MySQL logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  MySQL database
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={springboot}
                  alt="springboot logo"
                  width={120}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Spring Boot
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={AI}
                  alt="AI logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  AI automation
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={mern}
                  alt="mern stack logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  MERN stack
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={flutter}
                  alt="flutter logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Flutter
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={figma}
                  alt="Figma logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Figma
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={illustrator}
                  alt="illustrator logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Adobe illustrator
                </span>
              </div>

              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                {/* White glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-24 h-16 bg-white/80 blur-2xl rounded-xl"></div>
                </div>
                <Image
                  src={ps}
                  alt="Photoshop logo"
                  width={100}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full z-20">
                  Photoshop
                </span>
              </div>
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </div>
  );
});

InfiniteSliderEnhanced.displayName = 'InfiniteSliderEnhanced';

export default InfiniteSliderEnhanced;
