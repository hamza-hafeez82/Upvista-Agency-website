"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import GlowingCubesBackground from "@/components/ui/GlowingCubesBackground";
import SoftwarePackageModal from "@/components/ui/PackageModal";
import Head from 'next/head';

function HeroSection({ onSeePackages }: { onSeePackages: () => void }) {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center pt-32 pb-16 overflow-hidden">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[15vw] md:text-[9vw] font-extrabold text-indigo-200/10 tracking-tight whitespace-nowrap z-0 leading-none" style={{letterSpacing: '-0.04em'}}>Software</span>
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-up drop-shadow-glow bg-gradient-to-r from-indigo-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">Software Development</h1>
      <p className="relative z-10 text-lg md:text-2xl text-indigo-100/90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">Build robust, scalable, and modern software solutions with hands-on, project-based learning.</p>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
        <button onClick={onSeePackages} className="px-8 py-3 bg-gradient-to-r from-indigo-400 to-violet-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-indigo-500 hover:to-violet-700 transition-all duration-300 glow-btn">See Packages</button>
        <a href="#enroll"><button className="px-8 py-3 bg-white/10 text-indigo-100 font-bold rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-indigo-400/30 backdrop-blur-md glow-btn">Enroll Now</button></a>
      </div>
    </section>
  );
}

const coreAssets = [
  {
    video: "/assets/trainings/js.mp4",
    title: "Programming Fundamentals",
    text: "Master Python, Java, and C# basics. Build a strong foundation in logic, algorithms, and problem-solving.",
    portrait: false,
  },
  {
    video: "/assets/trainings/cursor.mp4",
    title: "Object-Oriented Design",
    text: "Learn OOP principles, design patterns, and how to architect maintainable software.",
    portrait: true,
  },
  {
    video: "/assets/trainings/css home.mp4",
    title: "Team Collaboration",
    text: "Work on real-world projects, use Git, and collaborate with others in a professional workflow.",
    portrait: false,
  },
];

function CoreProgrammingSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-200 drop-shadow-glow">Core Programming Journey</h2>
      <div className="flex flex-col gap-16">
        {coreAssets.map((item, idx) => (
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
                    ? "rounded-3xl shadow-2xl max-h-[420px] w-auto mx-auto border-2 border-indigo-400/30 bg-black"
                    : "rounded-3xl shadow-2xl w-full max-w-md h-auto mx-auto border-2 border-indigo-400/30 bg-black"
                }
                style={{ boxShadow: '0 8px 40px 0 #6366f155' }}
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-100 mb-4 drop-shadow-glow">{item.title}</h3>
              <p className="text-lg text-indigo-100/90 mb-2 max-w-xl mx-auto md:mx-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Timeline Section */}
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-[#18181b] via-[#23234a] to-[#1e293b] rounded-3xl shadow-2xl p-10 border border-indigo-400/20">
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-200 mb-4 text-center drop-shadow-glow">Core Programming Course Timeline</h3>
        <ul className="text-indigo-100/90 text-lg mb-6 list-disc list-inside space-y-2">
          <li><b>Duration:</b> 2 months</li>
          <li><b>Free Trial:</b> <span className="text-green-400 font-bold">4 free classes (1 week)</span> included</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-indigo-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
          <ul className="text-indigo-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>4 days a week: <b>Thursday, Friday, Saturday, Sunday</b></li>
            <li>Each day: up to 4 slots, <b>1.5 hours each</b>, starting from <b>4:00 pm onwards</b></li>
            <li>Example slots: 4:00–5:30 pm, 5:30–7:00 pm, 7:00–8:30 pm, 8:30–10:00 pm</li>
            <li>Slot assignment based on instructor & attendee availability</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-indigo-200 flex items-center gap-2 text-lg mb-1">📚 Materials Provided</div>
          <ul className="text-indigo-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Comprehensive digital notes & resources</li>
            <li>Access to code repositories & project templates</li>
            <li>Recorded sessions for revision</li>
            <li>Practice assignments & quizzes</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-indigo-200 flex items-center gap-2 text-lg mb-1">🧑‍💻 Teaching Methods</div>
          <ul className="text-indigo-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Live interactive classes via <b>Zoom</b> or <b>Google Meet</b></li>
            <li>Blend of theory & hands-on practical work</li>
            <li>Curriculum follows latest software dev trends (2025+), including AI applications</li>
            <li>Use of AI tools to accelerate learning & development</li>
            <li>Real-world projects & collaborative exercises</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-400 to-violet-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-indigo-500 hover:to-violet-700 transition-all duration-300 glow-btn">Register for free (1 week)</button>
        </div>
      </div>
    </section>
  );
}

const backendAssets = [
  {
    video: "/assets/trainings/cloud.mp4",
    title: "Backend Systems",
    text: "Build scalable backend systems, RESTful APIs, and integrate with databases.",
    portrait: false,
  },
  {
    video: "/assets/trainings/slider.mp4",
    title: "API Security & Auth",
    text: "Implement authentication, authorization, and secure your backend services.",
    portrait: false,
  },
  {
    video: "/assets/trainings/responsive.mp4",
    title: "Testing & Debugging",
    text: "Write tests, debug code, and ensure your software is reliable and maintainable.",
    portrait: true,
  },
];

function BackendSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-violet-200 drop-shadow-glow">Backend Development Journey</h2>
      <div className="flex flex-col gap-16">
        {backendAssets.map((item, idx) => (
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
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-[#18181b] via-[#3b2252] to-[#23234a] rounded-3xl shadow-2xl p-10 border border-violet-400/20">
        <h3 className="text-3xl md:text-4xl font-bold text-violet-200 mb-4 text-center drop-shadow-glow">Backend Development Course Timeline</h3>
        <ul className="text-violet-100/90 text-lg mb-6 list-disc list-inside space-y-2">
          <li><b>Duration:</b> 2 months</li>
          <li><b>Free Trial:</b> <span className="text-green-400 font-bold">4 free classes (1 week)</span> included</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-violet-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
          <ul className="text-violet-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>4 days a week: <b>Thursday, Friday, Saturday, Sunday</b></li>
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
            <li>Curriculum follows latest backend dev trends (2025+), including AI applications</li>
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

const devopsAssets = [
  {
    video: "/assets/trainings/cloud.mp4",
    title: "DevOps & Deployment",
    text: "Learn CI/CD, automate deployments, and manage cloud infrastructure.",
    portrait: false,
  },
  {
    video: "/assets/trainings/slider.mp4",
    title: "Monitoring & Scaling",
    text: "Monitor applications, scale systems, and ensure high availability.",
    portrait: false,
  },
  {
    video: "/assets/trainings/circle.mp4",
    title: "AI in Software Development",
    text: "Leverage AI tools to boost productivity, automate tasks, and innovate in software engineering.",
    portrait: true,
  },
];

function DevOpsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-200 drop-shadow-glow">DevOps & AI Journey</h2>
      <div className="flex flex-col gap-16">
        {devopsAssets.map((item, idx) => (
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
                    ? "rounded-3xl shadow-2xl max-h-[420px] w-auto mx-auto border-2 border-blue-400/30 bg-black"
                    : "rounded-3xl shadow-2xl w-full max-w-md h-auto mx-auto border-2 border-blue-400/30 bg-black"
                }
                style={{ boxShadow: '0 8px 40px 0 #60a5fa55' }}
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-100 mb-4 drop-shadow-glow">{item.title}</h3>
              <p className="text-lg text-blue-100/90 mb-2 max-w-xl mx-auto md:mx-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Timeline Section */}
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-[#18181b] via-[#23234a] to-[#1e293b] rounded-3xl shadow-2xl p-10 border border-blue-400/20">
        <h3 className="text-3xl md:text-4xl font-bold text-blue-200 mb-4 text-center drop-shadow-glow">DevOps & AI Course Timeline</h3>
        <ul className="text-blue-100/90 text-lg mb-6 list-disc list-inside space-y-2">
          <li><b>Duration:</b> 1.5 months</li>
          <li><b>Free Trial:</b> <span className="text-green-400 font-bold">4 free classes (1 week)</span> included</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-blue-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
          <ul className="text-blue-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>4 days a week: <b>Thursday, Friday, Saturday, Sunday</b></li>
            <li>Each day: up to 4 slots, <b>1.5 hours each</b>, starting from <b>4:00 pm onwards</b></li>
            <li>Example slots: 4:00–5:30 pm, 5:30–7:00 pm, 7:00–8:30 pm, 8:30–10:00 pm</li>
            <li>Slot assignment based on instructor & attendee availability</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-blue-200 flex items-center gap-2 text-lg mb-1">📚 Materials Provided</div>
          <ul className="text-blue-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Comprehensive digital notes & resources</li>
            <li>Access to code repositories & project templates</li>
            <li>Recorded sessions for revision</li>
            <li>Practice assignments & quizzes</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-blue-200 flex items-center gap-2 text-lg mb-1">🧑‍💻 Teaching Methods</div>
          <ul className="text-blue-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Live interactive classes via <b>Zoom</b> or <b>Google Meet</b></li>
            <li>Blend of theory & hands-on practical work</li>
            <li>Curriculum follows latest DevOps & AI trends (2025+), including AI applications</li>
            <li>Use of AI tools to accelerate learning & development</li>
            <li>Real-world projects & collaborative exercises</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-blue-500 hover:to-indigo-700 transition-all duration-300 glow-btn">Register for free (1 week)</button>
        </div>
      </div>
    </section>
  );
}

function MotivationalSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-200 mb-6 drop-shadow-glow">Shape the Future with Software & AI</h2>
        <p className="text-indigo-100/90 text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Software development is evolving at lightning speed. With AI, you&apos;ll build smarter, faster, and more impactful solutions than ever before. The boundaries of what&apos;s possible are expanding—now is your time to lead the way.
        </p>
        <p className="text-indigo-100/80 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          AI is not just a tool, it&apos;s your creative partner. Automate the mundane, accelerate your workflow, and focus on innovation. The world needs developers who can harness AI to solve real problems and create the next generation of technology.
        </p>
        <p className="text-indigo-100/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Start your journey today. Learn, build, and shape the future of software with us. The next big breakthrough could be yours!
        </p>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-400 to-violet-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-indigo-500 hover:to-violet-700 transition-all duration-300 glow-btn">Enroll Now</button>
        </div>
      </div>
    </section>
  );
}

export default function SoftwareDevTrainingPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Software Development Training | Upvista Digital | Innovate, Engineer, Lead</title>
        <meta name="description" content="Upvista’s Software Development Training is a transformative experience, empowering you to become a creator, innovator, and leader in the digital world. Join a movement of engineers and visionaries." />
        <meta name="keywords" content="Upvista, Upvista Digital, Software Development Training, Learn Software Engineering, Backend, DevOps, AI, Community, Innovation, Pakistan, Global, Empowerment, Collaboration" />
        <meta property="og:title" content="Software Development Training | Upvista Digital | Innovate, Engineer, Lead" />
        <meta property="og:description" content="Upvista’s Software Development Training is a transformative experience—empowering you to become a creator, innovator, and leader in the digital world. Join a movement of engineers and visionaries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upvistadigital.com/pages/trainings/software-development" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development Training | Upvista Digital | Innovate, Engineer, Lead" />
        <meta name="twitter:description" content="Upvista’s Software Development Training is a transformative experience, empowering you to become a creator, innovator, and leader in the digital world. Join a movement of engineers and visionaries." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/pages/trainings/software-development" />
        {/* Course Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'Software Development Training',
          description: 'Upvista’s Software Development Training is a transformative journey for aspiring engineers. Learn programming, backend, DevOps, and AI in a collaborative, visionary community.',
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
        <CoreProgrammingSection />
        <BackendSection />
        <DevOpsSection />
        <MotivationalSection />
        <SoftwarePackageModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
      <Footer />
      <style jsx global>{`
        .glow-btn {
          box-shadow: 0 0 16px 0 #6366f155, 0 2px 8px 0 #0004;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #6366f188) drop-shadow(0 0 2px #fff2);
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