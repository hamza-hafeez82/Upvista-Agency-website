"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Cosmic Background SVG + Art Images ---
function CosmicBackground() {
  // Bubble follows cursor
  const bubbleRef = useRef<HTMLImageElement>(null);
  const [stars, setStars] = useState<{cx: number, cy: number, r: number}[]>([]);
  useEffect(() => {
    // Generate stars only on client
    const arr = Array.from({ length: 60 }, () => ({
      cx: Math.random() * 1440,
      cy: Math.random() * 900,
      r: Math.random() * 1.5 + 0.3,
    }));
    setStars(arr);
  }, []);
  useEffect(() => {
    const moveBubble = (e: MouseEvent) => {
      if (bubbleRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        bubbleRef.current.style.transform = `translate(${x * 0.08}px, ${y * 0.10}px)`;
      }
    };
    window.addEventListener("mousemove", moveBubble);
    return () => window.removeEventListener("mousemove", moveBubble);
  }, []);
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2d0036] to-[#3a1c71]" />
      {/* Stars (client-only) */}
      {stars.length > 0 && (
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1440 900" fill="none">
          <defs>
            <radialGradient id="star1" cx="0.5" cy="0.5" r="0.5">
              <stop stopColor="#fff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {stars.map((star, i) => (
            <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill="url(#star1)" />
          ))}
        </svg>
      )}
      {/* Nebula/Glow overlays */}
      <div className="absolute left-1/4 top-1/5 w-96 h-96 bg-gradient-radial from-purple-700/40 via-fuchsia-500/20 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute right-1/5 bottom-1/4 w-80 h-80 bg-gradient-radial from-indigo-600/40 via-blue-400/20 to-transparent rounded-full blur-2xl opacity-50" />
      {/* Bubble - follows cursor */}
      <Image
        ref={bubbleRef}
        src="/assets/bubble.jpg"
        alt="Bubble Art"
        width={500}
        height={500}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] object-contain opacity-30 blur-2xl pointer-events-none select-none transition-transform duration-300"
        style={{ zIndex: 0 }}
      />
      {/* Rocket - floating, angled */}
      <Image
        src="/assets/rocket.jpg"
        alt="Rocket Art"
        width={420}
        height={420}
        className="absolute right-10 bottom-10 w-[320px] h-[320px] object-contain opacity-25 blur-xl pointer-events-none select-none animate-rocket-float"
        style={{ zIndex: 0, transform: "rotate(-18deg)" }}
      />
    </div>
  );
}

// --- Hero Section ---
function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center pt-32 pb-20 overflow-hidden">
      <CosmicBackground />
      {/* Huge background word */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[16vw] md:text-[10vw] font-extrabold text-white/10 tracking-tight whitespace-nowrap z-0 leading-none" style={{letterSpacing: '-0.04em'}}>Upvista</span>
      {/* Main headline */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up drop-shadow-glow">Upvista Trainings</h1>
      <p className="relative z-10 text-lg md:text-2xl text-purple-100/90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">A universe of knowledge, powered by industry experts. Join a cosmic community of learners and innovators.</p>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
        <Link href="#explore">
          <button className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-fuchsia-700 hover:to-indigo-700 transition-all duration-300 glow-btn">Browse Trainings</button>
        </Link>
        <Link href="#contact">
          <button className="px-8 py-3 bg-white/10 text-purple-100 font-bold rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-fuchsia-400/30 backdrop-blur-md glow-btn">Join Now</button>
        </Link>
      </div>
    </section>
  );
}

// --- Animated Value Props ---
function AnimatedValueProps() {
  const features = [
    { icon: "🪐", title: "Expert Instructors", desc: "Learn from industry leaders with real-world experience." },
    { icon: "🚀", title: "Hands-On Learning", desc: "Project-based, practical training for real skills." },
    { icon: "🌌", title: "Flexible Modes", desc: "Online & in-person options to fit your schedule." },
    { icon: "✨", title: "Recognized Certificates", desc: "Boost your career with credentials that matter." },
  ];
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4" id="why">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-100 animate-fade-in-up">Why Upvista Trainings?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={f.title} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up border border-fuchsia-400/20" style={{ animationDelay: `${i * 100}ms` }}>
            <span className="text-4xl mb-4 animate-bounce-slow drop-shadow-glow">{f.icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-fuchsia-200 drop-shadow-glow">{f.title}</h3>
            <p className="text-purple-100/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Category Parallax Grid ---
function CategoryParallaxGrid() {
  const cats = [
    { icon: "💻", title: "Software Development" },
    { icon: "🤖", title: "Data Science & AI" },
    { icon: "📈", title: "Digital Marketing" },
    { icon: "🎨", title: "Design & UI/UX" },
    { icon: "💼", title: "Business & Management" },
    { icon: "🔒", title: "Cybersecurity" },
    { icon: "☁️", title: "Cloud & DevOps" },
    { icon: "🏥", title: "Industry-Specific" },
  ];
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4" id="explore">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-100 animate-fade-in-up">Explore Trainings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cats.map((cat, i) => (
          <div key={cat.title} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer group animate-fade-in-up border border-fuchsia-400/10" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform animate-bounce-slow drop-shadow-glow">{cat.icon}</span>
            <h3 className="text-lg font-semibold text-fuchsia-200 mb-1 drop-shadow-glow">{cat.title}</h3>
            <span className="text-xs text-purple-200/80">See Trainings</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- How It Works Stepper ---
function HowItWorksStepper() {
  const steps = [
    { step: 1, title: "Choose Training", icon: "🔭" },
    { step: 2, title: "Enroll", icon: "📝" },
    { step: 3, title: "Learn & Practice", icon: "💡" },
    { step: 4, title: "Get Certified", icon: "🎓" },
    { step: 5, title: "Advance Career", icon: "🚀" },
  ];
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-100 animate-fade-in-up">How It Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {steps.map((s, i) => (
          <div key={s.step} className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
            <span className="text-3xl mb-2 animate-bounce-slow drop-shadow-glow">{s.icon}</span>
            <span className="text-lg font-semibold text-fuchsia-200 mb-1 drop-shadow-glow">{s.title}</span>
            {s.step < 5 && <span className="hidden md:block w-12 h-1 bg-gradient-to-r from-fuchsia-400 to-indigo-400 my-2 rounded-full"></span>}
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Featured Trainings Carousel ---
function FeaturedTrainingsCarousel() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-100 animate-fade-in-up">Featured Trainings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 animate-fade-in-up border border-fuchsia-400/10" style={{ animationDelay: `${i * 120}ms` }}>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/assets/community/xpertaide.png" alt="Trainer" width={48} height={48} className="rounded-full border-2 border-fuchsia-400/30" />
              <div>
                <h4 className="font-semibold text-fuchsia-200 drop-shadow-glow">AI for Everyone</h4>
                <span className="text-xs text-purple-200/80">by Jane Doe</span>
              </div>
            </div>
            <p className="text-purple-100/80 mb-4">Kickstart your AI journey with hands-on projects and real-world applications. Next batch: <span className="font-semibold text-fuchsia-200">July 15</span></p>
            <button className="mt-auto px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-fuchsia-700 hover:to-indigo-700 transition-all glow-btn">Enroll</button>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Testimonials Animated ---
function TestimonialsAnimated() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-100 animate-fade-in-up">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up border border-fuchsia-400/10" style={{ animationDelay: `${i * 120}ms` }}>
            <Image src="/assets/community/dawar.jpeg" alt="Learner" width={64} height={64} className="rounded-full mb-4 border-2 border-fuchsia-400/30" />
            <p className="text-purple-100/80 mb-4">“Upvista Trainings helped me switch careers and land my dream job in tech. The trainers are amazing!”</p>
            <span className="font-semibold text-fuchsia-200">Ali Raza</span>
            <span className="text-xs text-purple-200/80">Marketing → Data Science</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Trainer Carousel ---
function TrainerCarousel() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-100 animate-fade-in-up">Meet the Trainers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[1,2,3,4].map((i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up border border-fuchsia-400/10" style={{ animationDelay: `${i * 80}ms` }}>
            <Image src="/assets/community/xpertaide.png" alt="Trainer" width={64} height={64} className="rounded-full mb-3 border-2 border-fuchsia-400/30" />
            <span className="font-semibold text-fuchsia-200 mb-1 drop-shadow-glow">Jane Doe</span>
            <span className="text-xs text-purple-200/80 mb-2">AI & Data Science</span>
            <p className="text-purple-100/80 text-sm">10+ years in industry, ex-Google, passionate about teaching and mentoring.</p>
            <a href="#" className="mt-2 text-indigo-300 hover:underline text-xs">LinkedIn</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Big Call To Action ---
function BigCallToAction() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4 flex flex-col items-center text-center animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-100">Start Your Learning Journey Today</h2>
      <p className="text-lg text-purple-100/80 mb-8 max-w-xl">Join thousands of learners who have transformed their careers with Upvista Trainings. The future belongs to the skilled—be one of them!</p>
      <Link href="#contact">
        <button className="px-10 py-4 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-fuchsia-700 hover:to-indigo-700 transition-all duration-300 glow-btn">Get Started</button>
      </Link>
    </section>
  );
}

// --- FAQ Accordion ---
function FAQAccordion() {
  const faqs = [
    { q: "Do I get a certificate?", a: "Yes, all our trainings come with industry-recognized certificates." },
    { q: "Are trainings online or in-person?", a: "We offer both online and in-person options for most trainings." },
    { q: "Can I get career support?", a: "Absolutely! We offer career guidance, resume reviews, and interview prep." },
    { q: "How do I enroll?", a: "Just click 'Enroll' on any training or contact us for custom requests." },
  ];
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-100 animate-fade-in-up">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-white/10 backdrop-blur-md rounded-xl shadow p-4 group animate-fade-in-up border border-fuchsia-400/10" style={{ animationDelay: `${i * 80}ms` }}>
            <summary className="font-semibold text-fuchsia-200 cursor-pointer group-open:text-indigo-300 transition-colors text-lg drop-shadow-glow">{faq.q}</summary>
            <p className="text-purple-100/80 mt-2">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// // --- Contact Form Modern ---
function ContactFormModern() {
  return (
    <section className="w-full max-w-2xl mx-auto py-20 px-4" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-purple-100 animate-fade-in-up">Contact Us</h2>
      <form className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 flex flex-col gap-4 animate-fade-in-up delay-100 border border-fuchsia-400/10">
        <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg border border-fuchsia-400/20 bg-black/30 text-purple-100 focus:ring-2 focus:ring-fuchsia-400 outline-none" />
        <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg border border-fuchsia-400/20 bg-black/30 text-purple-100 focus:ring-2 focus:ring-fuchsia-400 outline-none" />
        <textarea placeholder="How can we help you?" className="px-4 py-3 rounded-lg border border-fuchsia-400/20 bg-black/30 text-purple-100 focus:ring-2 focus:ring-fuchsia-400 outline-none min-h-[100px]" />
        <button type="submit" className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold rounded-lg shadow hover:from-fuchsia-700 hover:to-indigo-700 transition-all glow-btn">Send Message</button>
      </form>
    </section>
  );
}


// --- Main Page ---
export default function TrainingsPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
        <CosmicBackground />
        <HeroSection />
        <AnimatedValueProps />
        <CategoryParallaxGrid />
        <HowItWorksStepper />
        <FeaturedTrainingsCarousel />
        <TestimonialsAnimated />
        <TrainerCarousel />
        <BigCallToAction />
        <FAQAccordion />
        <ContactFormModern />
      </main>
      <Footer />
      {/* Animations & Effects */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #a21caf88) drop-shadow(0 0 2px #fff2);
        }
        .glow-btn {
          box-shadow: 0 0 16px 0 #a21caf55, 0 2px 8px 0 #0004;
        }
        @keyframes rocket-float {
          0%, 100% { transform: rotate(-18deg) translateY(0); }
          50% { transform: rotate(-18deg) translateY(-24px); }
        }
        .animate-rocket-float {
          animation: rocket-float 5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
} 