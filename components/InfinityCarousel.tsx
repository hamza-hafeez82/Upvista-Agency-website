import { InfiniteSlider } from "@/components/ui/infinite-slider";
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
}

export default InfiniteSliderEnhanced;
