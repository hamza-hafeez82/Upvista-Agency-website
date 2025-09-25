import { InfiniteSlider } from "@/components/ui/infinite-slider";
// Images loaded directly from public folder to bypass Sharp
const react = "/assets/heroimg.png";
const js = "/assets/heroimg.png";
const html = "/assets/heroimg.png";
const css = "/assets/heroimg.png";
const figma = "/assets/heroimg.png";
const next = "/assets/heroimg.png";
const ps = "/assets/heroimg.png";
const mern = "/assets/heroimg.png";
const AI = "/assets/heroimg.png";
const flutter = "/assets/heroimg.png";
const AWS = "/assets/heroimg.png";
const dotnet = "/assets/heroimg.png";
const devops = "/assets/heroimg.png";
const googleCloud = "/assets/heroimg.png";
const mysql = "/assets/heroimg.png";
const illustrator = "/assets/heroimg.png";
const springboot = "/assets/heroimg.png";
import Image from "next/image";

function InfiniteSliderEnhanced() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black backdrop-blur-md"></div>

      {/* Light effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl"></div>

      {/* Content container */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 text-2xl mb-8">
            Technologies We Use
          </h3>

          {/* Slider container with glass effect */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
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
}

export default InfiniteSliderEnhanced;
