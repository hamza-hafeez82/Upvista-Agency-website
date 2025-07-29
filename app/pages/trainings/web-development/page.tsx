"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import GlowingCubesBackground from "@/components/ui/GlowingCubesBackground";
import WebDevPackageModal from "@/components/ui/WebDevPackageModal";
import Head from 'next/head';
import NextImage from 'next/image';

function HeroSection({ onSeePackages }: { onSeePackages: () => void }) {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center pt-32 pb-16 overflow-hidden">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[16vw] md:text-[10vw] font-extrabold text-cyan-200/10 tracking-tight whitespace-nowrap z-0 leading-none" style={{letterSpacing: '-0.04em'}}>Web Dev</span>
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up drop-shadow-glow">Web Development</h1>
      <p className="relative z-10 text-lg md:text-2xl text-cyan-100/90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">Master the art of building modern, responsive, and scalable web applications from scratch to deployment.</p>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
        <button onClick={onSeePackages} className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 glow-btn">See Packages</button>
        <a href="#enroll"><button className="px-8 py-3 bg-white/10 text-cyan-100 font-bold rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-cyan-400/30 backdrop-blur-md glow-btn">Enroll Now</button></a>
      </div>
    </section>
  );
}

const frontendAssets = [
  {
    video: "/assets/trainings/circle.mp4",
    title: "HTML & Structure",
    text: "Start your journey with HTML, the backbone of every web page. Learn how to structure content, use semantic tags, and build the foundation for beautiful websites.",
    portrait: true,
  },
  {
    video: "/assets/trainings/css home.mp4",
    title: "CSS & Styling",
    text: "Bring your pages to life with CSS! Master layouts, colors, animations, and responsive design to make your sites look stunning on any device.",
    portrait: true,
  },
  {
    video: "/assets/trainings/js.mp4",
    title: "JavaScript & Interactivity",
    text: "Add interactivity and dynamic features with JavaScript. From simple scripts to complex logic, you'll learn to make your sites engaging and powerful.",
    portrait: false,
  },
  {
    video: "/assets/trainings/responsive.mp4",
    title: "Responsive Design",
    text: "Ensure your websites look great everywhere. Learn mobile-first design, media queries, and best practices for a seamless user experience.",
    portrait: false,
  },
  {
    video: "/assets/trainings/slider.mp4",
    title: "UI Components & Sliders",
    text: "Build modern UI components like sliders, modals, and more. Understand how to create reusable, interactive elements for your projects.",
    portrait: false,
  },
  {
    video: "/assets/trainings/cloud.mp4",
    title: "React & Next.js",
    text: "Dive into React and Next.js to build fast, scalable, and maintainable web applications. Learn component-based architecture and server-side rendering.",
    portrait: false,
  },
  {
    video: "/assets/trainings/cursor.mp4",
    title: "Frontend Mastery",
    text: "Combine all your skills to create professional, production-ready web apps. Get hands-on with real-world projects and best practices.",
    portrait: true,
  },
];

function FrontendSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-200 drop-shadow-glow">Frontend Development Journey</h2>
      <div className="flex flex-col gap-16">
        {frontendAssets.map((item, idx) => (
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
                    ? "rounded-3xl shadow-2xl max-h-[420px] w-auto mx-auto border-2 border-cyan-400/30 bg-black"
                    : "rounded-3xl shadow-2xl w-full max-w-md h-auto mx-auto border-2 border-cyan-400/30 bg-black"
                }
                style={{ boxShadow: '0 8px 40px 0 #6366f155' }}
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-100 mb-4 drop-shadow-glow">{item.title}</h3>
              <p className="text-lg text-cyan-100/90 mb-2 max-w-xl mx-auto md:mx-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Timeline Section */}
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-[#18181b] via-[#23234a] to-[#1e293b] rounded-3xl shadow-2xl p-10 border border-cyan-400/20">
        <h3 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-4 text-center drop-shadow-glow">Frontend Development Course Timeline</h3>
        <ul className="text-cyan-100/90 text-lg mb-6 list-disc list-inside space-y-2">
          <li><b>Duration:</b> 2 months</li>
          <li><b>Free Trial:</b> <span className="text-green-400 font-bold">4 free classes (1 week)</span> included</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-cyan-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
          <ul className="text-cyan-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>4 days a week: <b>Thursday, Friday, Saturday, Sunday</b></li>
            <li>Each day: up to 4 slots, <b>1.5 hours each</b>, starting from <b>4:00 pm onwards</b></li>
            <li>Example slots: 4:00–5:30 pm, 5:30–7:00 pm, 7:00–8:30 pm, 8:30–10:00 pm</li>
            <li>Slot assignment based on instructor & attendee availability</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-cyan-200 flex items-center gap-2 text-lg mb-1">📚 Materials Provided</div>
          <ul className="text-cyan-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Comprehensive digital notes & resources</li>
            <li>Access to code repositories & project templates</li>
            <li>Recorded sessions for revision</li>
            <li>Practice assignments & quizzes</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-cyan-200 flex items-center gap-2 text-lg mb-1">🧑‍💻 Teaching Methods</div>
          <ul className="text-cyan-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Live interactive classes via <b>Zoom</b> or <b>Google Meet</b></li>
            <li>Blend of theory & hands-on practical work</li>
            <li>Curriculum follows latest web dev trends (2025+), including AI applications</li>
            <li>Use of AI tools to accelerate learning & development</li>
            <li>Real-world projects & collaborative exercises</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 glow-btn">Register for free (1 week)</button>
        </div>
      </div>
    </section>
  );
}

// Backend assets (placeholder videos from trainings)
const backendAssets = [
  {
    video: "/assets/trainings/cloud.mp4",
    title: "Node.js & Express.js",
    text: "Build robust server-side applications and RESTful APIs using Node.js and Express.js. Learn backend fundamentals and scalable architecture.",
    portrait: false,
  },
  {
    video: "/assets/trainings/js.mp4",
    title: "API Development",
    text: "Design and implement secure, efficient APIs. Understand authentication, error handling, and best practices for backend services.",
    portrait: false,
  },
  {
    video: "/assets/trainings/cursor.mp4",
    title: "Deployment & Hosting",
    text: "Deploy your backend apps to the cloud. Learn about hosting, environment variables, and production readiness.",
    portrait: true,
  },
];

function BackendSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-200 drop-shadow-glow">Backend Development Journey</h2>
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
                    ? "rounded-3xl shadow-2xl max-h-[420px] w-auto mx-auto border-2 border-purple-400/30 bg-black"
                    : "rounded-3xl shadow-2xl w-full max-w-md h-auto mx-auto border-2 border-purple-400/30 bg-black"
                }
                style={{ boxShadow: '0 8px 40px 0 #a78bfa55' }}
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-100 mb-4 drop-shadow-glow">{item.title}</h3>
              <p className="text-lg text-purple-100/90 mb-2 max-w-xl mx-auto md:mx-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Timeline Section */}
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-[#18181b] via-[#3b2252] to-[#23234a] rounded-3xl shadow-2xl p-10 border border-purple-400/20">
        <h3 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4 text-center drop-shadow-glow">Backend Development Course Timeline</h3>
        <ul className="text-purple-100/90 text-lg mb-6 list-disc list-inside space-y-2">
          <li><b>Duration:</b> 2 months</li>
          <li><b>Free Trial:</b> <span className="text-green-400 font-bold">4 free classes (1 week)</span> included</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-purple-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
          <ul className="text-purple-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>4 days a week: <b>Thursday, Friday, Saturday, Sunday</b></li>
            <li>Each day: up to 4 slots, <b>1.5 hours each</b>, starting from <b>4:00 pm onwards</b></li>
            <li>Example slots: 4:00–5:30 pm, 5:30–7:00 pm, 7:00–8:30 pm, 8:30–10:00 pm</li>
            <li>Slot assignment based on instructor & attendee availability</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-purple-200 flex items-center gap-2 text-lg mb-1">📚 Materials Provided</div>
          <ul className="text-purple-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Comprehensive digital notes & resources</li>
            <li>Access to code repositories & project templates</li>
            <li>Recorded sessions for revision</li>
            <li>Practice assignments & quizzes</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-purple-200 flex items-center gap-2 text-lg mb-1">🧑‍💻 Teaching Methods</div>
          <ul className="text-purple-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Live interactive classes via <b>Zoom</b> or <b>Google Meet</b></li>
            <li>Blend of theory & hands-on practical work</li>
            <li>Curriculum follows latest backend dev trends (2025+), including AI applications</li>
            <li>Use of AI tools to accelerate learning & development</li>
            <li>Real-world projects & collaborative exercises</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-purple-500 hover:to-indigo-700 transition-all duration-300 glow-btn">Register for free (1 week)</button>
        </div>
      </div>
    </section>
  );
}

// Database assets (placeholder videos from trainings)
const databaseAssets = [
  {
    video: "/assets/trainings/sql.jpeg",
    title: "SQL & Relational Databases",
    text: "Master the basics of SQL and relational databases. Learn to design schemas, write queries, and manage data effectively.",
    portrait: false,
  },
  {
    video: "/assets/trainings/js.mp4",
    title: "NoSQL & MongoDB",
    text: "Explore NoSQL concepts and get hands-on with MongoDB for flexible, scalable data storage.",
    portrait: false,
  },
  {
    video: "/assets/trainings/cursor.mp4",
    title: "Database Integration",
    text: "Connect your databases to backend applications. Learn CRUD operations, security, and best practices.",
    portrait: true,
  },
];

function DatabaseSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-200 drop-shadow-glow">Database Essentials Journey</h2>
      <div className="flex flex-col gap-16">
        {databaseAssets.map((item, idx) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              {item.video.endsWith('.jpeg') ? (
                <NextImage
                  src={item.video}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="rounded-3xl shadow-2xl w-full max-w-md h-auto mx-auto border-2 border-emerald-400/30 bg-black"
                  style={{ boxShadow: '0 8px 40px 0 #34d39955' }}
                />
              ) : (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className={
                    item.portrait
                      ? "rounded-3xl shadow-2xl max-h-[420px] w-auto mx-auto border-2 border-emerald-400/30 bg-black"
                      : "rounded-3xl shadow-2xl w-full max-w-md h-auto mx-auto border-2 border-emerald-400/30 bg-black"
                  }
                  style={{ boxShadow: '0 8px 40px 0 #34d39955' }}
                />
              )}
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-100 mb-4 drop-shadow-glow">{item.title}</h3>
              <p className="text-lg text-emerald-100/90 mb-2 max-w-xl mx-auto md:mx-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Timeline Section */}
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-[#18181b] via-[#14532d] to-[#1e293b] rounded-3xl shadow-2xl p-10 border border-emerald-400/20">
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-200 mb-4 text-center drop-shadow-glow">Database Essentials Course Timeline</h3>
        <ul className="text-emerald-100/90 text-lg mb-6 list-disc list-inside space-y-2">
          <li><b>Duration:</b> 1.5 months</li>
          <li><b>Free Trial:</b> <span className="text-green-400 font-bold">4 free classes (1 week)</span> included</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-emerald-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
          <ul className="text-emerald-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>4 days a week: <b>Thursday, Friday, Saturday, Sunday</b></li>
            <li>Each day: up to 4 slots, <b>1.5 hours each</b>, starting from <b>4:00 pm onwards</b></li>
            <li>Example slots: 4:00–5:30 pm, 5:30–7:00 pm, 7:00–8:30 pm, 8:30–10:00 pm</li>
            <li>Slot assignment based on instructor & attendee availability</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-emerald-200 flex items-center gap-2 text-lg mb-1">📚 Materials Provided</div>
          <ul className="text-emerald-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Comprehensive digital notes & resources</li>
            <li>Access to code repositories & project templates</li>
            <li>Recorded sessions for revision</li>
            <li>Practice assignments & quizzes</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-bold text-emerald-200 flex items-center gap-2 text-lg mb-1">🧑‍💻 Teaching Methods</div>
          <ul className="text-emerald-100/90 text-base ml-4 list-disc list-inside space-y-1">
            <li>Live interactive classes via <b>Zoom</b> or <b>Google Meet</b></li>
            <li>Blend of theory & hands-on practical work</li>
            <li>Curriculum follows latest database trends (2025+), including AI applications</li>
            <li>Use of AI tools to accelerate learning & development</li>
            <li>Real-world projects & collaborative exercises</li>
          </ul>
        </div>
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-green-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-emerald-500 hover:to-green-700 transition-all duration-300 glow-btn">Register for free (1 week)</button>
        </div>
      </div>
    </section>
  );
}

export default function WebDevTrainingPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Web Development Training | Upvista Digital | Build, Belong, Become</title>
        <meta name="description" content="Upvista’s Web Development Training is more than a course, it’s a journey of mastery, mentorship, and belonging. Join a movement of creators, learn from visionaries, and build the digital future together." />
        <meta name="keywords" content="Upvista, Upvista Digital, Web Development Training, Learn Web Development, Frontend, Backend, Fullstack, Community, Innovation, Pakistan, Global, Empowerment, Collaboration" />
        <meta property="og:title" content="Web Development Training | Upvista Digital | Build, Belong, Become" />
        <meta property="og:description" content="Upvista’s Web Development Training is more than a course, it’s a journey of mastery, mentorship, and belonging. Join a movement of creators, learn from visionaries, and build the digital future together." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upvistadigital.com/pages/trainings/web-development" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Training | Upvista Digital | Build, Belong, Become" />
        <meta name="twitter:description" content="Upvista’s Web Development Training is more than a course—it’s a journey of mastery, mentorship, and belonging. Join a movement of creators, learn from visionaries, and build the digital future together." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/pages/trainings/web-development" />
        {/* Course Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'Web Development Training',
          description: 'Upvista’s Web Development Training is a transformative journey for aspiring developers. Learn frontend, backend, and fullstack skills in a collaborative, visionary community.',
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
        <FrontendSection />
        <BackendSection />
        <DatabaseSection />
        {/* Motivational Section */}
        <section className="w-full max-w-4xl mx-auto py-20 px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-6 drop-shadow-glow">The Future is Bright for Web Developers</h2>
            <p className="text-cyan-100/90 text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              The world of web development is on the brink of a revolution. With the rise of AI, the way we build, design, and launch digital experiences is evolving faster than ever. AI is not here to replace developers—it&apos;s here to empower you. Imagine building complex, beautiful, and intelligent web applications in half the time, with half the effort, and at a fraction of the cost.
            </p>
            <p className="text-cyan-100/80 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              As AI tools become your creative partners, you&apos;ll be able to automate repetitive tasks, generate code, optimize designs, and focus on what truly matters: innovation and user experience. The demand for skilled web developers who can harness AI is skyrocketing, and those who adapt will lead the next wave of digital transformation.
            </p>
            <p className="text-cyan-100/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Now is the perfect time to start your journey. By learning web development today, you&apos;re not just preparing for a job—you&apos;re preparing to shape the future. Embrace the power of AI, unlock your creativity, and become a pioneer in the new era of web development. The web is waiting for your ideas. Let&apos;s build the future together!
            </p>
            <div className="text-center mt-6">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 glow-btn">Enroll Now</button>
            </div>
          </div>
        </section>
        <WebDevPackageModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
      <Footer />
      <style jsx global>{`
        .glow-btn {
          box-shadow: 0 0 16px 0 #22d3ee55, 0 2px 8px 0 #0004;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #38bdf888) drop-shadow(0 0 2px #fff2);
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