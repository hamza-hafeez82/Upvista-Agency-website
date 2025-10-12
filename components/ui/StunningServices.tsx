"use client";
import React, { useState } from "react";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

// Placeholder SVGs for each service (replace with custom SVGs or Lottie animations)
const ServiceSVG = ({ name }: { name: string }) => {
  const initial = typeof name === 'string' && name.length > 0 ? name[0] : '?';
  return (
    <div className="w-16 h-16 flex items-center justify-center mb-4">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" stroke="#00FFD0" strokeWidth="4" fill="#0F172A" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="16" fill="#00FFD0">{initial}</text>
      </svg>
    </div>
  );
};

interface ServicePhase {
  title: string;
  description: string;
}
interface Service {
  name: string;
  title: string;
  summary: string;
  phases: ServicePhase[];
}
interface Module {
  name: string;
  accent: string;
  description: string;
  services: Service[];
}

export const StunningServices = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

const modules: Module[] = [
  {
    name: t('services.module1.name'),
    accent: "from-cyan-900 via-emerald-800 to-blue-950",
    description: t('services.module1.description'),
    services: [
      {
        name: t('services.module1.service1.name'),
        title: t('services.module1.service1.title'),
        summary: t('services.module1.service1.summary'),
        phases: [
          { title: t('services.module1.service1.phase1.title'), description: t('services.module1.service1.phase1.description') },
          { title: t('services.module1.service1.phase2.title'), description: t('services.module1.service1.phase2.description') },
          { title: t('services.module1.service1.phase3.title'), description: t('services.module1.service1.phase3.description') },
          { title: t('services.module1.service1.phase4.title'), description: t('services.module1.service1.phase4.description') },
          { title: t('services.module1.service1.phase5.title'), description: t('services.module1.service1.phase5.description') },
          { title: t('services.module1.service1.phase6.title'), description: t('services.module1.service1.phase6.description') },
        ],
      },
      {
        name: t('services.module1.service2.name'),
        title: t('services.module1.service2.title'),
        summary: t('services.module1.service2.summary'),
        phases: [
          { title: t('services.module1.service2.phase1.title'), description: t('services.module1.service2.phase1.description') },
          { title: t('services.module1.service2.phase2.title'), description: t('services.module1.service2.phase2.description') },
          { title: t('services.module1.service2.phase3.title'), description: t('services.module1.service2.phase3.description') },
          { title: t('services.module1.service2.phase4.title'), description: t('services.module1.service2.phase4.description') },
        ],
      },
      {
        name: t('services.module1.service3.name'),
        title: t('services.module1.service3.title'),
        summary: t('services.module1.service3.summary'),
        phases: [
          { title: t('services.module1.service3.phase1.title'), description: t('services.module1.service3.phase1.description') },
          { title: t('services.module1.service3.phase2.title'), description: t('services.module1.service3.phase2.description') },
          { title: t('services.module1.service3.phase3.title'), description: t('services.module1.service3.phase3.description') },
          { title: t('services.module1.service3.phase4.title'), description: t('services.module1.service3.phase4.description') },
          { title: t('services.module1.service3.phase5.title'), description: t('services.module1.service3.phase5.description') },
        ],
      },
      {
        name: t('services.module1.service4.name'),
        title: t('services.module1.service4.title'),
        summary: t('services.module1.service4.summary'),
        phases: [
          { title: t('services.module1.service4.phase1.title'), description: t('services.module1.service4.phase1.description') },
          { title: t('services.module1.service4.phase2.title'), description: t('services.module1.service4.phase2.description') },
          { title: t('services.module1.service4.phase3.title'), description: t('services.module1.service4.phase3.description') },
          { title: t('services.module1.service4.phase4.title'), description: t('services.module1.service4.phase4.description') },
        ],
      },
      {
        name: t('services.module1.service5.name'),
        title: t('services.module1.service5.title'),
        summary: t('services.module1.service5.summary'),
        phases: [
          { title: t('services.module1.service5.phase1.title'), description: t('services.module1.service5.phase1.description') },
          { title: t('services.module1.service5.phase2.title'), description: t('services.module1.service5.phase2.description') },
          { title: t('services.module1.service5.phase3.title'), description: t('services.module1.service5.phase3.description') },
          { title: t('services.module1.service5.phase4.title'), description: t('services.module1.service5.phase4.description') },
        ],
      },
      {
        name: t('services.module1.service6.name'),
        title: t('services.module1.service6.title'),
        summary: t('services.module1.service6.summary'),
        phases: [
          { title: t('services.module1.service6.phase1.title'), description: t('services.module1.service6.phase1.description') },
          { title: t('services.module1.service6.phase2.title'), description: t('services.module1.service6.phase2.description') },
          { title: t('services.module1.service6.phase3.title'), description: t('services.module1.service6.phase3.description') },
          { title: t('services.module1.service6.phase4.title'), description: t('services.module1.service6.phase4.description') },
        ],
      },
    ],
  },
  {
    name: t('services.module2.name'),
    accent: "from-pink-600 via-fuchsia-700 to-violet-900",
    description: t('services.module2.description'),
    services: [
      {
        name: t('services.module2.service1.name'),
        title: t('services.module2.service1.title'),
        summary: t('services.module2.service1.summary'),
        phases: [
          { title: t('services.module2.service1.phase1.title'), description: t('services.module2.service1.phase1.description') },
          { title: t('services.module2.service1.phase2.title'), description: t('services.module2.service1.phase2.description') },
          { title: t('services.module2.service1.phase3.title'), description: t('services.module2.service1.phase3.description') },
          { title: t('services.module2.service1.phase4.title'), description: t('services.module2.service1.phase4.description') },
        ],
      },
      {
        name: t('services.module2.service2.name'),
        title: t('services.module2.service2.title'),
        summary: t('services.module2.service2.summary'),
        phases: [
          { title: t('services.module2.service2.phase1.title'), description: t('services.module2.service2.phase1.description') },
          { title: t('services.module2.service2.phase2.title'), description: t('services.module2.service2.phase2.description') },
          { title: t('services.module2.service2.phase3.title'), description: t('services.module2.service2.phase3.description') },
          { title: t('services.module2.service2.phase4.title'), description: t('services.module2.service2.phase4.description') },
        ],
      },
      {
        name: t('services.module2.service3.name'),
        title: t('services.module2.service3.title'),
        summary: t('services.module2.service3.summary'),
        phases: [
          { title: t('services.module2.service3.phase1.title'), description: t('services.module2.service3.phase1.description') },
          { title: t('services.module2.service3.phase2.title'), description: t('services.module2.service3.phase2.description') },
          { title: t('services.module2.service3.phase3.title'), description: t('services.module2.service3.phase3.description') },
          { title: t('services.module2.service3.phase4.title'), description: t('services.module2.service3.phase4.description') },
        ],
      },
    ],
  },
  {
    name: t('services.module3.name'),
    accent: "from-teal-600 via-cyan-700 to-blue-900",
    description: t('services.module3.description'),
    services: [
      {
        name: t('services.module3.service1.name'),
        title: t('services.module3.service1.title'),
        summary: t('services.module3.service1.summary'),
        phases: [
          { title: t('services.module3.service1.phase1.title'), description: t('services.module3.service1.phase1.description') },
          { title: t('services.module3.service1.phase2.title'), description: t('services.module3.service1.phase2.description') },
          { title: t('services.module3.service1.phase3.title'), description: t('services.module3.service1.phase3.description') },
          { title: t('services.module3.service1.phase4.title'), description: t('services.module3.service1.phase4.description') },
        ],
      },
      {
        name: t('services.module3.service2.name'),
        title: t('services.module3.service2.title'),
        summary: t('services.module3.service2.summary'),
        phases: [
          { title: t('services.module3.service2.phase1.title'), description: t('services.module3.service2.phase1.description') },
          { title: t('services.module3.service2.phase2.title'), description: t('services.module3.service2.phase2.description') },
          { title: t('services.module3.service2.phase3.title'), description: t('services.module3.service2.phase3.description') },
          { title: t('services.module3.service2.phase4.title'), description: t('services.module3.service2.phase4.description') },
        ],
      },
      {
        name: t('services.module3.service3.name'),
        title: t('services.module3.service3.title'),
        summary: t('services.module3.service3.summary'),
        phases: [
          { title: t('services.module3.service3.phase1.title'), description: t('services.module3.service3.phase1.description') },
          { title: t('services.module3.service3.phase2.title'), description: t('services.module3.service3.phase2.description') },
          { title: t('services.module3.service3.phase3.title'), description: t('services.module3.service3.phase3.description') },
          { title: t('services.module3.service3.phase4.title'), description: t('services.module3.service3.phase4.description') },
        ],
      },
      {
        name: t('services.module3.service4.name'),
        title: t('services.module3.service4.title'),
        summary: t('services.module3.service4.summary'),
        phases: [
          { title: t('services.module3.service4.phase1.title'), description: t('services.module3.service4.phase1.description') },
          { title: t('services.module3.service4.phase2.title'), description: t('services.module3.service4.phase2.description') },
          { title: t('services.module3.service4.phase3.title'), description: t('services.module3.service4.phase3.description') },
          { title: t('services.module3.service4.phase4.title'), description: t('services.module3.service4.phase4.description') },
        ],
      },
      {
        name: t('services.module3.service5.name'),
        title: t('services.module3.service5.title'),
        summary: t('services.module3.service5.summary'),
        phases: [
          { title: t('services.module3.service5.phase1.title'), description: t('services.module3.service5.phase1.description') },
          { title: t('services.module3.service5.phase2.title'), description: t('services.module3.service5.phase2.description') },
          { title: t('services.module3.service5.phase3.title'), description: t('services.module3.service5.phase3.description') },
          { title: t('services.module3.service5.phase4.title'), description: t('services.module3.service5.phase4.description') },
        ],
      },
    ],
  },
  {
    name: t('services.module4.name'),
    accent: "from-amber-700 via-yellow-700 to-yellow-900",
    description: t('services.module4.description'),
    services: [
      {
        name: t('services.module4.service1.name'),
        title: t('services.module4.service1.title'),
        summary: t('services.module4.service1.summary'),
        phases: [
          { title: t('services.module4.service1.phase1.title'), description: t('services.module4.service1.phase1.description') },
          { title: t('services.module4.service1.phase2.title'), description: t('services.module4.service1.phase2.description') },
          { title: t('services.module4.service1.phase3.title'), description: t('services.module4.service1.phase3.description') },
          { title: t('services.module4.service1.phase4.title'), description: t('services.module4.service1.phase4.description') },
        ],
      },
    ],
  },
];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setCurrentPhase(0);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-gradient-to-br from-black via-violet-950 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className={`${isDark ? 'bg-violet-500' : 'bg-blue-600'} text-white px-4 py-1 rounded-full text-sm font-semibold mb-4`}>{t('services.badge')}</span>
          <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} text-center mb-4 tracking-tight`}>{t('services.title')}</h2>
          <p className={`text-lg ${isDark ? 'text-violet-200' : 'text-gray-600'} max-w-2xl text-center`}>{t('services.subtitle')}</p>
        </div>
        <div className="flex flex-col gap-16">
          {modules.map((module) => (
            <motion.div
              key={module.name}
              layout
              transition={{ layout: { duration: 0.5, type: "spring" } }}
              className={`rounded-3xl p-1 bg-gradient-to-br ${module.accent} shadow-2xl`}
            >
              <div className={`rounded-[inherit] ${isDark ? 'bg-black/80' : 'bg-white/95'} p-8 md:p-12 flex flex-col items-center`}>
                <motion.h3 layout className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} tracking-tight flex items-center gap-3`}>
                  <span className={`inline-block w-3 h-3 rounded-full ${isDark ? 'bg-gradient-to-br from-white/80 to-violet-400' : 'bg-gradient-to-br from-blue-500 to-purple-500'} shadow-md`}></span>
                  {module.name}
                </motion.h3>
                <motion.p layout className={`text-lg ${isDark ? 'text-cyan-200' : 'text-gray-600'} mb-6 text-center max-w-xl`}>
                  {module.description}
                </motion.p>
                {expandedModule !== module.name && (
                  <motion.button
                    layout
                    className={`px-8 py-3 rounded-full ${isDark ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-black' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'} font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}
                    onClick={() => setExpandedModule(module.name)}
                  >
                    {t('services.exploreSuite')}
                  </motion.button>
                )}
                <AnimatePresence initial={false}>
                  {expandedModule === module.name && (
                    <motion.div
                      key="expand"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.35 } } }}
                      exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.25 } } }}
                      style={{ overflow: "hidden" }}
                      className="w-full mt-8"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                        exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12 place-items-center">
                          {module.services.map((service) => (
                            <motion.div
                              key={service.name}
                              whileHover={{ scale: 1.06, boxShadow: isDark ? "0 8px 32px 0 rgba(0,255,208,0.15)" : "0 8px 32px 0 rgba(59,130,246,0.2)" }}
                              className={`relative ${isDark ? 'bg-gradient-to-br from-cyan-900/60 to-emerald-900/60 border-cyan-700' : 'bg-white border-blue-200'} border rounded-3xl p-8 shadow-xl cursor-pointer flex flex-col items-center min-h-[260px] max-w-xs w-full backdrop-blur-md transition-all duration-300`}
                              onClick={() => openModal(service)}
                            >
                              <ServiceSVG name={service.name} />
                              <h4 className={`text-lg font-semibold ${isDark ? 'text-cyan-100' : 'text-gray-900'} mb-2 text-center`}>{service.title}</h4>
                              <p className={`${isDark ? 'text-cyan-200' : 'text-gray-600'} mb-2 text-center`}>{service.summary}</p>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-center mt-8">
                          <button
                            className={`px-6 py-2 rounded-full ${isDark ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-black' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'} font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}
                            onClick={() => setExpandedModule(null)}
                          >
                            {t('services.collapseSuite')}
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
        {selectedService && (
          <ServiceModal
            open={modalOpen}
            onClose={closeModal}
            phases={selectedService.phases}
            currentPhase={currentPhase}
            setCurrentPhase={setCurrentPhase}
          />
        )}
        {/* Insights & Impact Section */}
        <section className="mt-32 mb-8">
          <div className={`max-w-5xl mx-auto rounded-3xl ${isDark ? 'bg-gradient-to-br from-[#0f172a]/80 via-[#312e81]/70 to-[#00ffd0]/10 border-cyan-900' : 'bg-white border-gray-200'} backdrop-blur-xl shadow-2xl p-10 md:p-16 flex flex-col items-center gap-12 border`}>
            <h2 className={`text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-cyan-300 to-violet-400' : 'bg-gradient-to-r from-blue-600 to-purple-600'} text-center mb-4 tracking-tight flex items-center gap-3`} style={{lineHeight: '1.25'}}>
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill={isDark ? "#00FFD0" : "#3B82F6"} fillOpacity="0.15"/><path d="M16 8v8l6 3" stroke={isDark ? "#00FFD0" : "#3B82F6"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {t('services.insights.title')}
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <span className={`text-5xl font-bold ${isDark ? 'text-cyan-300' : 'text-cyan-600'} animate-pulse`}>98%</span>
                <span className={`text-lg ${isDark ? 'text-cyan-100' : 'text-gray-700'} mt-2 text-center`} style={{lineHeight: '1.7'}}>{t('services.insights.stat1')}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={`text-5xl font-bold ${isDark ? 'text-violet-300' : 'text-violet-600'} animate-pulse`}>1.2h</span>
                <span className={`text-lg ${isDark ? 'text-violet-100' : 'text-gray-700'} mt-2 text-center`} style={{lineHeight: '1.7'}}>{t('services.insights.stat2')}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={`text-5xl font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-600'} animate-pulse`}>4.9/5</span>
                <span className={`text-lg ${isDark ? 'text-emerald-100' : 'text-gray-700'} mt-2 text-center`} style={{lineHeight: '1.7'}}>{t('services.insights.stat3')}</span>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className={`flex-1 ${isDark ? 'bg-black/30 border-cyan-900' : 'bg-gray-50 border-gray-200'} backdrop-blur-lg rounded-2xl p-6 border shadow-lg flex flex-col items-center`}>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-cyan-200' : 'text-blue-700'} mb-4 tracking-tight`}>{t('services.vision.title')}</h3>
                <p className={`text-lg ${isDark ? 'text-cyan-100' : 'text-gray-700'} mb-4 text-center`} style={{lineHeight: '1.7'}}>
                  {t('services.vision.content')}
                </p>
                <h4 className={`text-xl font-semibold ${isDark ? 'text-cyan-100' : 'text-blue-700'} mb-2 mt-4 tracking-tight`}>{t('services.standards.title')}</h4>
                <ul className={`${isDark ? 'text-cyan-100' : 'text-gray-700'} text-base space-y-2 list-disc list-inside text-left max-w-md mx-auto`} style={{lineHeight: '1.7'}}>
                  <li><span className={`font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>{t('services.standards.item1.title')}:</span> {t('services.standards.item1.description')}</li>
                  <li><span className={`font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>{t('services.standards.item2.title')}:</span> {t('services.standards.item2.description')}</li>
                  <li><span className={`font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>{t('services.standards.item3.title')}:</span> {t('services.standards.item3.description')}</li>
                  <li><span className={`font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>{t('services.standards.item4.title')}:</span> {t('services.standards.item4.description')}</li>
                  <li><span className={`font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>{t('services.standards.item5.title')}:</span> {t('services.standards.item5.description')}</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-10">
              <a href="/contact" className={`px-8 py-4 rounded-full ${isDark ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-black' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'} font-bold text-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-3`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M2 12h20M12 2v20" stroke={isDark ? "#0f172a" : "#ffffff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t('services.cta.button')}
              </a>
              <span className={`${isDark ? 'text-cyan-200' : 'text-gray-700'} mt-4 text-lg`} style={{lineHeight: '1.7'}}>{t('services.cta.text')}</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}; 