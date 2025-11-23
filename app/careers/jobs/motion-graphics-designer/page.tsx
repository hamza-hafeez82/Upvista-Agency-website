"use client";

import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../../contexts/CareersLanguageContext";

export default function MotionGraphicsDesignerPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const handleApplyClick = () => {
    setShowAssessmentPopup(true);
  };


  return (
    <>
      <Head>
        <title>Motion Graphics Designer | Upvista Digital Careers - Internship to Full-Time</title>
        <meta name="description" content="Join Upvista Digital as a Motion Graphics Designer. Create engaging SaaS explainer videos, work with a dynamic team, and transition from internship to full-time. Apply now." />
        <meta name="keywords" content="Motion Graphics Designer Job, Motion Graphics Internship, Video Designer Position, After Effects Designer, Explainer Video Creator, Motion Design Careers, Animation Designer Jobs" />
        <meta property="og:title" content="Motion Graphics Designer | Upvista Digital Careers" />
        <meta property="og:description" content="Join Upvista Digital as a Motion Graphics Designer. Create engaging SaaS explainer videos and transition from internship to full-time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/jobs/motion-graphics-designer" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/careers/jobs/design.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Motion Graphics Designer | Upvista Digital Careers" />
        <meta name="twitter:description" content="Join Upvista Digital as a Motion Graphics Designer. Apply now." />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/jobs/motion-graphics-designer" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          'title': 'Motion Graphics Designer',
          'description': 'Join Upvista Digital as a Motion Graphics Designer. Create engaging SaaS explainer videos, work with a dynamic team, and transition from internship to full-time employment.',
          'identifier': {
            '@type': 'PropertyValue',
            'name': 'Upvista Digital',
            'value': 'MOTION_GRAPHICS_DESIGNER_001'
          },
          'datePosted': '2024-01-01',
          'validThrough': '2025-12-31',
          'employmentType': 'INTERN',
          'hiringOrganization': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'sameAs': 'https://www.upvistadigital.com'
          },
          'jobLocation': {
            '@type': 'Place',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Lahore',
              'addressRegion': 'Punjab',
              'addressCountry': 'PK'
            }
          },
          'url': 'https://www.upvistadigital.com/careers/jobs/motion-graphics-designer'
        }) }} />
      </Head>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'}`}>
        <CareersHeader />
      
      {/* Back Button */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers/apply">
            <button className={`inline-flex items-center gap-2 transition-colors mb-8 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <ArrowLeft className="w-4 h-4" />
              {t('careers.motionGraphicsDesigner.backButton')}
            </button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('careers.motionGraphicsDesigner.hero.badge')}
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('careers.motionGraphicsDesigner.hero.title')}
            </h1>
            
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('careers.motionGraphicsDesigner.hero.subtitle')}
            </p>
            
            <div className={`flex flex-wrap justify-center gap-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>{t('careers.motionGraphicsDesigner.hero.tags.remote')}</span>
              <span>{t('careers.motionGraphicsDesigner.hero.tags.internship')}</span>
              <span>{t('careers.motionGraphicsDesigner.hero.tags.hours')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.application.title')}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>1</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.application.step1.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.application.step1.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>2</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.application.step2.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.application.step2.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>3</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.application.step3.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.application.step3.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>4</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.application.step4.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.application.step4.desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Position Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.overview.title')}</h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('careers.motionGraphicsDesigner.overview.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Position Description */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.role.title')}</h2>
            
            {/* Role Type */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.role.type.title')}</h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong className={isDark ? 'text-white' : 'text-gray-900'}>{t('careers.motionGraphicsDesigner.role.type.internship')}</strong> → then <strong className={isDark ? 'text-white' : 'text-gray-900'}>{t('careers.motionGraphicsDesigner.role.type.fulltime')}</strong> upon successful completion
              </p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                {t('careers.motionGraphicsDesigner.role.type.desc')}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.role.responsibilities.title')}</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.responsibilities.item1')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.responsibilities.item2')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.responsibilities.item3')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.responsibilities.item4')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.responsibilities.item5')}</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.role.requirements.title')}</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.requirements.item1')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.requirements.item2')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.requirements.item3')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.requirements.item4')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.requirements.item5')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.role.requirements.item6')}</li>
              </ul>
            </div>

            {/* Workload */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.role.workload.title')}</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong className={isDark ? 'text-white' : 'text-gray-900'}>{t('careers.motionGraphicsDesigner.role.workload.amount')}</strong>
              </p>
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('careers.motionGraphicsDesigner.role.workload.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Duration */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.duration.title')}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.details.duration.desc')}</p>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.hours.title')}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><strong className={isDark ? 'text-white' : 'text-gray-900'}>{t('careers.motionGraphicsDesigner.details.hours.time')}</strong></p>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.motionGraphicsDesigner.details.hours.desc')}</p>
              </div>

              {/* Location */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.location.title')}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.motionGraphicsDesigner.details.location.desc')}</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">{t('careers.motionGraphicsDesigner.details.location.includes')}</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('careers.motionGraphicsDesigner.details.location.item1')}</li>
                    <li>{t('careers.motionGraphicsDesigner.details.location.item2')}</li>
                    <li>{t('careers.motionGraphicsDesigner.details.location.item3')}</li>
                    <li>{t('careers.motionGraphicsDesigner.details.location.item4')}</li>
                  </ul>
                </div>
              </div>

              {/* Stipend */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.stipend.title')}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.motionGraphicsDesigner.details.stipend.desc')}</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">{t('careers.motionGraphicsDesigner.details.stipend.includes')}</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('careers.motionGraphicsDesigner.details.stipend.item1')}</li>
                    <li>{t('careers.motionGraphicsDesigner.details.stipend.item2')}</li>
                    <li>{t('careers.motionGraphicsDesigner.details.stipend.item3')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.benefits.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.benefits.internship.title')}</h4>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item1')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item2')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item3')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item4')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item5')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item6')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item7')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item8')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item9')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.internship.item10')}</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.details.benefits.fulltime.title')}</h4>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.fulltime.item1')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.fulltime.item2')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.fulltime.item3')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.fulltime.item4')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.fulltime.item5')}</li>
                    <li>• {t('careers.motionGraphicsDesigner.details.benefits.fulltime.item6')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.motionGraphicsDesigner.apply.title')}</h2>
            <div className={`space-y-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="text-lg">
                {t('careers.motionGraphicsDesigner.apply.submit')}
              </p>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className="mb-2">
                  <strong className={isDark ? 'text-white' : 'text-gray-900'}>{t('careers.motionGraphicsDesigner.apply.email')}</strong>{' '}
                  <a href="mailto:careers@upvistadigital.com" className={`${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}>
                    careers@upvistadigital.com
                  </a>
                </p>
                <p>
                  <strong className={isDark ? 'text-white' : 'text-gray-900'}>{t('careers.motionGraphicsDesigner.apply.website')}</strong>{' '}
                  <a href="https://www.upvistadigital.com/careers/" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}>
                    https://www.upvistadigital.com/careers/
                  </a>
                </p>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-purple-900/20 border border-purple-500/30' : 'bg-purple-50 border border-purple-200'}`}>
                <p className="font-semibold mb-2">{t('careers.motionGraphicsDesigner.apply.timeline.title')}</p>
                <p>{t('careers.motionGraphicsDesigner.apply.timeline.desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Button */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button 
              onClick={handleApplyClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              {t('careers.motionGraphicsDesigner.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('careers.motionGraphicsDesigner.cta.desc')}</p>
          </motion.div>
        </div>
      </section>

      <CareersFooter />

      {/* Assessment Popup */}
      <AssessmentPopup
        isOpen={showAssessmentPopup}
        onClose={() => setShowAssessmentPopup(false)}
        
        position={t('careers.motionGraphicsDesigner.position')}
      />
    </div>
    </>
  );
}

