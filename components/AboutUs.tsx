import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Users, ShoppingCart, Cloud, Stethoscope, GraduationCap, CreditCard, Brush } from "lucide-react";
import devImg from "../assets/openart-image_4QJTrC6j_1741402906187_raw.jpg";

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

type Stat = {
  number: string;
  label: string;
  icon: React.ReactNode;
};

export default function AboutUs() {
  const skills: Skill[] = [
    {
      name: "Web Development",
      percentage: 100,
      color: "from-violet-500 to-indigo-600",
    },
    {
      name: "UI/UX Design",
      percentage: 100,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Maintenance",
      percentage: 85,
      color: "from-emerald-500 to-teal-600",
    },
    { name: "Branding", percentage: 77, color: "from-amber-500 to-orange-600" },

    {
      name: "App Development",
      percentage: 77,
      color: "from-amber-500 to-orange-600",
    },

    { name: "DevOps", percentage: 77, color: "from-blue-500 to-cyan-600" },

    {
      name: "AI automation",
      percentage: 77,
      color: "from-amber-500 to-orange-600",
    },

    {
      name: "Graphics Designing",
      percentage: 77,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const stats: Stat[] = [
    {
      number: "",
      label: "Years of Experience",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "",
      label: "Projects Completed",
      icon: <Code className="h-6 w-6" />,
    },
    {
      number: "",
      label: "Satisfied Clients",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "",
      label: "Technologies Utilized",
      icon: <Cpu className="h-6 w-6" />,
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-b from-gray-950 to-black text-white min-h-screen">
      <Head>
        <title>About Upvista | Innovative Digital Solutions</title>
        <meta
          name="description"
          content="Learn about Upvista - your partner for innovative digital solutions that transform businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-violet-900/30 border border-violet-700/40">
              <span className="text-violet-300 text-sm font-medium">
                Transforming Digital Presence
              </span>
            </div>
            <h1 className="text-4xl p-4 md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Designing Experiences That Inspire Action
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mb-8">
              From idea to execution, We dont just build websites — we build
              journeys that connect with people, build trust, and convert
              visitors into loyal customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pages/services">
                <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg shadow-violet-900/30">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/pages/contactPage">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 border border-gray-700">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Card Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-700/40">
              <span className="text-violet-300 text-sm font-medium">
                About Upvista
              </span>
            </div>
            <h2 className="text-3xl p-1 md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
              Partnering for Your Digital Growth
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              We blend innovation with technical excellence to deliver solutions
              that exceed expectations. Our team crafts powerful, tailored
              digital experiences that help businesses grow, engage, and lead in
              todays competitive landscape.
            </p>
            <p className="text-gray-300 mb-8">
              Upvista combines deep tech expertise with creative insight to
              build digital solutions that work — and wow. We listen,
              collaborate, and deliver results that solve your challenges and
              move your business forward.
            </p>
            <Link href="/pages/portfolio">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 border border-gray-700 flex items-center gap-2">
                View Our Projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-violet-900/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/60 to-transparent mix-blend-overlay z-10 rounded-xl"></div>
              <Image
                src={devImg}
                alt="Digital innovation team at work"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Skills Section with Modern Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/50 rounded-3xl shadow-xl shadow-violet-600/60">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-700/40">
            <span className="text-violet-300 text-sm font-medium">
              Expertise That Drives Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Real Expertise Across Digital Niches
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We deliver tailored solutions for a variety of industries and business models. Our team brings deep, hands-on experience in each niche—no fluff, just proven results.
          </p>
        </div>

        {/* Animated Niche Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* E-commerce */}
          <div className="relative bg-gradient-to-br from-violet-800/80 to-indigo-900/80 border border-violet-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float">
            <ShoppingCart className="w-14 h-14 mb-4 text-cyan-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">E-commerce</h3>
            <p className="text-cyan-100 text-center">Custom online stores, payment integration, product management, and conversion optimization for B2C & B2B brands.</p>
          </div>
          {/* SaaS */}
          <div className="relative bg-gradient-to-br from-indigo-800/80 to-violet-900/80 border border-indigo-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-delay">
            <Cloud className="w-14 h-14 mb-4 text-fuchsia-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">SaaS Platforms</h3>
            <p className="text-fuchsia-100 text-center">Robust, scalable SaaS solutions with user management, billing, analytics, and cloud integration.</p>
          </div>
          {/* Healthcare */}
          <div className="relative bg-gradient-to-br from-emerald-800/80 to-cyan-900/80 border border-emerald-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-slow">
            <Stethoscope className="w-14 h-14 mb-4 text-emerald-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
            <p className="text-emerald-100 text-center">HIPAA-compliant apps, patient portals, telemedicine, and secure health data management.</p>
          </div>
          {/* EdTech */}
          <div className="relative bg-gradient-to-br from-pink-800/80 to-violet-900/80 border border-pink-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float">
            <GraduationCap className="w-14 h-14 mb-4 text-pink-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">EdTech</h3>
            <p className="text-pink-100 text-center">Learning management systems, e-learning platforms, and interactive educational tools.</p>
          </div>
          {/* FinTech */}
          <div className="relative bg-gradient-to-br from-cyan-800/80 to-blue-900/80 border border-cyan-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-delay">
            <CreditCard className="w-14 h-14 mb-4 text-cyan-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">FinTech</h3>
            <p className="text-cyan-100 text-center">Secure payment gateways, digital wallets, and financial analytics platforms.</p>
          </div>
          {/* Portfolio & Creative */}
          <div className="relative bg-gradient-to-br from-indigo-800/80 to-pink-900/80 border border-indigo-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-slow">
            <Brush className="w-14 h-14 mb-4 text-indigo-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">Portfolio & Creative</h3>
            <p className="text-indigo-100 text-center">Personal portfolios, creative agency sites, and digital showcases for artists and professionals.</p>
          </div>
        </div>
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-float-delay { animation: float 3s 1s ease-in-out infinite; }
          .animate-float-slow { animation: float 4s 0.5s ease-in-out infinite; }
        `}</style>
      </section>
    </div>
  );
}
