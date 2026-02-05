import React, { memo, useMemo } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

const InfiniteSliderEnhanced = memo(() => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Define client list for easy maintenance
  const clients = useMemo(() => [
    { name: "Global Partners", logo: "/assets/clients/client-1.png" },
    { name: "Innovate Tech", logo: "/assets/clients/client-2.png" },
    { name: "Future Systems", logo: "/assets/clients/client-3.png" },
    { name: "Digital Solutions", logo: "/assets/clients/client-4.png" },
    { name: "Eco Ventures", logo: "/assets/clients/client-5.png" },
    { name: "Nexus Corp", logo: "/assets/clients/client-6.png" },
    { name: "Summit Enterprises", logo: "/assets/clients/client-7.png" },
    { name: "Velocity Group", logo: "/assets/clients/client-8.png" },
  ], []);

  return (
    <div className={`relative w-full overflow-hidden py-32 ${isDark
      ? 'bg-black'
      : 'bg-white'
      }`}>
      {/* Top SVG Divider - Soft Arc transition from previous section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-[60px] md:h-[120px] ${isDark ? 'fill-purple-950' : 'fill-purple-100'
          }`}>
          <path d="M0,0 Q600,120 1200,0 V0 H0 Z"></path>
        </svg>
      </div>

      {/* Bottom SVG Divider - Soft Arc transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-[60px] md:h-[120px] ${isDark ? 'fill-black' : 'fill-purple-50'
          }`}>
          <path d="M0,0 Q600,120 1200,0 V0 H0 Z"></path>
        </svg>
      </div>
      {/* Premium Artistic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-purple-900' : 'bg-blue-200'
          }`}></div>
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-indigo-900' : 'bg-purple-200'
          }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className={`h-px w-24 mb-8 bg-gradient-to-r ${isDark ? 'from-transparent via-purple-500 to-transparent' : 'from-transparent via-blue-500 to-transparent'
            }`}></div>
          <h3 className={`text-center font-bold tracking-[0.2em] uppercase text-sm mb-4 ${isDark ? 'text-purple-400' : 'text-blue-600'
            }`}>
            {t('carousel.technologies')}
          </h3>
          <h2 className={`text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
            }`}>
            Collaborating with Visionaries
          </h2>
          <p className={`text-center max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
            We take pride in partnering with companies that are shaping the future of global technology.
          </p>
        </div>

        {/* Artistic Slider Container */}
        <div className="relative group">
          {/* Edge Fades for seamless transition */}
          <div className={`absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-gradient-to-r ${isDark ? 'from-black to-transparent' : 'from-white to-transparent'
            }`}></div>
          <div className={`absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-gradient-to-l ${isDark ? 'from-black to-transparent' : 'from-white to-transparent'
            }`}></div>

          <InfiniteSlider
            gap={60}
            duration={40}
            reverse
            className="py-10"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className={`group relative flex items-center justify-center p-8 rounded-2xl transition-all duration-500 min-w-[280px] h-[140px] ${isDark
                  ? 'bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20'
                  : 'bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl'
                  }`}
              >
                {/* Spotlight effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-purple-500/10 rounded-2xl"></div>

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4">
                  <div className="relative w-full h-12">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className={`object-contain transition-all duration-500 ${isDark ? 'invert opacity-50' : 'opacity-40'
                        } group-hover:opacity-100 group-hover:scale-110`}
                      onError={(e) => {
                        // Fallback name if image is missing
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentNode?.parentNode as HTMLElement;
                        if (parent) {
                          const fallback = parent.querySelector('.fallback-name') as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }
                      }}
                    />
                    {/* Fallback text when image is not present yet */}
                    <div className="fallback-name hidden absolute inset-0 flex items-center justify-center">
                      <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white/30' : 'text-gray-300'
                        } group-hover:text-purple-500 transition-colors duration-300`}>
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover:border-purple-500/50 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 group-hover:border-purple-500/50 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 group-hover:border-purple-500/50 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-purple-500/50 transition-all duration-500"></div>
              </div>
            ))}
          </InfiniteSlider>

          <InfiniteSlider
            gap={60}
            duration={50}
            className="py-10"
          >
            {[...clients].reverse().map((client, index) => (
              <div
                key={`rev-${index}`}
                className={`group relative flex items-center justify-center p-8 rounded-2xl transition-all duration-500 min-w-[280px] h-[140px] ${isDark
                  ? 'bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20'
                  : 'bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl'
                  }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/10 rounded-2xl"></div>

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4">
                  <div className="relative w-full h-12">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className={`object-contain transition-all duration-500 ${isDark ? 'invert opacity-50' : 'opacity-40'
                        } group-hover:opacity-100 group-hover:scale-110`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentNode?.parentNode as HTMLElement;
                        if (parent) {
                          const fallback = parent.querySelector('.fallback-name') as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }
                      }}
                    />
                    <div className="fallback-name hidden absolute inset-0 flex items-center justify-center">
                      <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white/30' : 'text-gray-300'
                        } group-hover:text-blue-500 transition-colors duration-300`}>
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover:border-blue-500/50 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 group-hover:border-blue-500/50 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 group-hover:border-blue-500/50 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-blue-500/50 transition-all duration-500"></div>
              </div>
            ))}
          </InfiniteSlider>
        </div>

        {/* Premium footer note for the slider */}
        <div className="mt-20 flex justify-center">
          <div className={`flex items-center gap-4 px-6 py-2 rounded-full border ${isDark ? 'border-white/10 bg-white/5 text-gray-400' : 'border-gray-200 bg-gray-50 text-gray-600'
            }`}>
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide">Join 50+ industry leaders trust us globally</span>
          </div>
        </div>
      </div>
    </div>
  );
});

InfiniteSliderEnhanced.displayName = 'InfiniteSliderEnhanced';

export default InfiniteSliderEnhanced;
