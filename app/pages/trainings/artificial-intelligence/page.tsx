"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import GlowingCubesBackground from "@/components/ui/GlowingCubesBackground";
import AIPackageModal from "@/components/ui/AIPackageModal";
import Head from 'next/head';

function HeroSection({ onSeePackages }: { onSeePackages: () => void }) {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center pt-32 pb-16 overflow-hidden">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[12vw] md:text-[8vw] font-extrabold text-violet-200/10 tracking-tight whitespace-nowrap z-0 leading-none" style={{letterSpacing: '-0.04em'}}>AI</span>
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up drop-shadow-glow">Artificial Intelligence</h1>
      <p className="relative z-10 text-lg md:text-2xl text-violet-100/90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">Master the world of AI, machine learning, and deep learning. Build intelligent systems and deploy real-world AI solutions.</p>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
        <button onClick={onSeePackages} className="px-8 py-3 bg-gradient-to-r from-violet-400 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-violet-500 hover:to-indigo-700 transition-all duration-300 glow-btn">See Packages</button>
        <a href="#enroll"><button className="px-8 py-3 bg-white/10 text-violet-100 font-bold rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-violet-400/30 backdrop-blur-md glow-btn">Enroll Now</button></a>
      </div>
    </section>
  );
}

const aiAssets = [
  {
    video: "/assets/trainings/circle.mp4",
    title: "AI Foundations",
    text: "Start with the basics: Python for AI, data handling, and the essential math behind AI (linear algebra, probability, calculus).",
    portrait: true,
  },
  {
    video: "/assets/trainings/js.mp4",
    title: "Machine Learning",
    text: "Build, train, and evaluate machine learning models. Learn supervised and unsupervised learning, feature engineering, and model selection.",
    portrait: false,
  },
  {
    video: "/assets/trainings/cloud.mp4",
    title: "Deep Learning",
    text: "Master neural networks, CNNs, RNNs, and generative AI. Work with TensorFlow and PyTorch on real-world projects.",
    portrait: false,
  },
  {
    video: "/assets/trainings/cursor.mp4",
    title: "AI Engineering & Deployment",
    text: "Deploy and scale AI models, integrate with cloud, build AI APIs, and learn MLOps best practices.",
    portrait: true,
  },
];

function AISection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-violet-200 drop-shadow-glow">AI Learning Journey</h2>
      <div className="flex flex-col gap-16">
        {aiAssets.map((item, idx) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className={
                  item.portrait
                    ? "rounded-3xl shadow-2xl max-h-[420px] w-auto mx-auto border-2 border-violet-400/30 bg-black"
                    : "rounded-3xl shadow-2xl w-full max-w-md h-auto mx-auto border-2 border-violet-400/30 bg-black"
                }
                style={{ boxShadow: '0 8px 40px 0 #a78bfa55' }}
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-violet-100 mb-4 drop-shadow-glow">{item.title}</h3>
              <p className="text-lg text-violet-100/90 mb-2 max-w-xl mx-auto md:mx-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Timeline Section */}
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-[#18181b] via-[#312e81] to-[#23234a] rounded-3xl shadow-2xl p-10 border border-violet-400/20">
        <h3 className="text-3xl md:text-4xl font-bold text-violet-200 mb-4 text-center drop-shadow-glow">AI Course Timeline</h3>
        <ul className="text-violet-100/90 text-lg mb-6 list-disc list-inside space-y-2">
          <li><b>Duration:</b> 8 months (all modules)</li>
          <li><b>Free Trial:</b> <span className="text-green-400 font-bold">4 free classes (1 week)</span> included</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-violet-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
          <ul className="text-violet-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>2-3 days a week: <b>Friday, Saturday, Sunday</b></li>
            <li>Each day: up to 4 slots, <b>1.5 hours each</b>, starting from <b>4:00 pm onwards</b></li>
            <li>Example slots: 4:00–5:30 pm, 5:30–7:00 pm, 7:00–8:30 pm, 8:30–10:00 pm</li>
            <li>Slot assignment based on instructor & attendee availability</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-violet-200 flex items-center gap-2 text-lg mb-1">📚 Materials Provided</div>
          <ul className="text-violet-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Comprehensive digital notes & resources</li>
            <li>Access to code repositories & project templates</li>
            <li>Recorded sessions for revision</li>
            <li>Practice assignments & quizzes</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-violet-200 flex items-center gap-2 text-lg mb-1">🧑‍💻 Teaching Methods</div>
          <ul className="text-violet-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Live interactive classes via <b>Zoom</b> or <b>Google Meet</b></li>
            <li>Blend of theory & hands-on practical work</li>
            <li>Curriculum follows latest AI trends (2025+), including generative AI</li>
            <li>Use of AI tools to accelerate learning & development</li>
            <li>Real-world projects & collaborative exercises</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-violet-400 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-violet-500 hover:to-indigo-700 transition-all duration-300 glow-btn">Register for free (1 week)</button>
        </div>
      </div>
    </section>
  );
}

export default function AITrainingPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Artificial Intelligence Training | Upvista Digital | Imagine, Create, Transform</title>
        <meta name="description" content="Upvista’s AI Training is a journey into the future, where you don’t just learn AI, you become a pioneer. Join a movement of creators, researchers, and innovators shaping tomorrow." />
        <meta name="keywords" content="Upvista, Upvista Digital, Artificial Intelligence Training, Learn AI, Machine Learning, Deep Learning, Community, Innovation, Pakistan, Global, Empowerment, Collaboration" />
        <meta property="og:title" content="Artificial Intelligence Training | Upvista Digital | Imagine, Create, Transform" />
        <meta property="og:description" content="Upvista’s AI Training is a journey into the future where you don’t just learn AI, you become a pioneer. Join a movement of creators, researchers, and innovators shaping tomorrow." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upvistadigital.com/pages/trainings/artificial-intelligence" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artificial Intelligence Training | Upvista Digital | Imagine, Create, Transform" />
        <meta name="twitter:description" content="Upvista’s AI Training is a journey into the future—where you don’t just learn AI, you become a pioneer. Join a movement of creators, researchers, and innovators shaping tomorrow." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/pages/trainings/artificial-intelligence" />
        {/* Course Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'Artificial Intelligence Training',
          description: 'Upvista’s AI Training is a transformative journey for aspiring AI engineers and researchers. Learn machine learning, deep learning, and AI engineering in a collaborative, visionary community.',
          provider: {
            '@type': 'Organization',
            name: 'Upvista Digital',
            sameAs: 'https://upvistadigital.com/'
          }
        }) }} />
      </Head>
      <GlowingCubesBackground />
      <Header />
      <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
        <HeroSection onSeePackages={() => setModalOpen(true)} />
        <AISection />
        {/* Motivational Section */}
        <section className="w-full max-w-4xl mx-auto py-20 px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-violet-200 mb-6 drop-shadow-glow">AI is Transforming the World</h2>
            <p className="text-violet-100/90 text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              Artificial Intelligence is revolutionizing every industry. From healthcare to finance, AI is powering smarter decisions, automating tasks, and unlocking new possibilities. The demand for AI talent is skyrocketing.
            </p>
            <p className="text-violet-100/80 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              By learning AI today, you’re preparing for the most exciting and impactful careers of tomorrow. Whether you want to build intelligent apps, analyze data, or create the next breakthrough in deep learning, this is your launchpad.
            </p>
            <p className="text-violet-100/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Embrace the future, unlock your creativity, and become a leader in the AI revolution. The world is waiting for your ideas. Let’s build the future together!
            </p>
            <div className="text-center mt-6">
              <button className="px-8 py-3 bg-gradient-to-r from-violet-400 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-violet-500 hover:to-indigo-700 transition-all duration-300 glow-btn">Enroll Now</button>
            </div>
          </div>
        </section>
        <AIPackageModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
      <Footer />
      <style jsx global>{`
        .glow-btn {
          box-shadow: 0 0 16px 0 #a78bfa55, 0 2px 8px 0 #0004;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #a78bfa88) drop-shadow(0 0 2px #fff2);
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </>
  );
} 