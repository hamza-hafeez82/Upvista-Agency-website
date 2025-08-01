import React, { useState } from "react";

const packages = [
  {
    key: "free",
    title: "Community Access",
    tier: "FREE",
    description: "Get a taste of quality web development education. Perfect for exploring if tech is right for you.",
    features: [
      "1 live session every Sunday (1.5 hours)",
      "Access to community Discord/Slack",
      "Basic learning resources & recordings",
      "Q&A sessions with instructors",
      "Networking opportunities with peers",
      "HTML/CSS/JavaScript basics overview",
    ],
    notIncluded: [
      "No certificates",
      "No personalized feedback", 
      "No individual projects",
      "No job preparation",
      "No direct mentor access"
    ],
    price: "FREE",
    duration: "Ongoing",
    highlight: "Perfect for beginners",
  },
  {
    key: "starter",
    title: "Foundation Builder",
    tier: "STARTER",
    description: "Build solid web development foundations without breaking the bank. Ideal for committed beginners.",
    features: [
      "3 live classes per week (4.5 hours total)",
      "HTML, CSS, JavaScript fundamentals",
      "Introduction to React & modern frameworks",
      "Responsive design principles",
      "Group projects & team collaboration",
      "Basic completion certificate",
      "Resume building workshop (group)",
      "Access to all course materials & recordings",
    ],
    price: "18,000 PKR/month",
    duration: "3 months",
    highlight: "Most popular choice",
  },
  {
    key: "premium",
    title: "Professional Development", 
    tier: "PREMIUM",
    description: "Get job-ready skills with professional mentorship. Comprehensive training for serious career changers.",
    features: [
      "5 live classes per week + weekend sessions",
      "1-on-1 monthly mentorship (2 hours/month)",
      "Personalized project assignments & feedback",
      "Individual portfolio development",
      "Frontend & Backend development",
      "Real-world client projects (supervised)",
      "Mock interviews & technical assessments",
      "Industry-recognized certifications",
      "Alumni network access",
      "Job referral network",
      "Direct instructor access",
    ],
    price: "45,000 PKR/month",
    duration: "4 months",
    highlight: "Job-ready skills",
  },
  {
    key: "jobready",
    title: "Career Guarantee",
    tier: "JOB READY",
    description: "Intensive program with guaranteed job placement. Pay only when you land a job earning 50k+ PKR/month.",
    features: [
      "Intensive daily training (6 hours/day, 5 days/week)",
      "Weekly 1-on-1 mentorship (4 hours/week)", 
      "Full-stack development mastery",
      "Real client projects with revenue sharing",
      "Advanced frameworks & technologies",
      "Interview preparation bootcamp",
      "Salary negotiation training",
      "3-month post-placement support",
      "Industry connections & direct referrals",
      "Advanced certifications (AWS, etc.)",
      "Guaranteed job placement or full refund",
    ],
    prerequisites: [
      "Pass technical assessment",
      "Complete foundation courses",
      "Demonstrate basic programming competency", 
      "Available for full-time intensive program",
      "Sign commitment contract"
    ],
    price: "15% of first year salary",
    priceNote: "(capped at 150,000 PKR)",
    duration: "6 months + 3 months support",
    highlight: "Guaranteed placement",
  },
];

export default function WebDevPackageModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  if (!open) return null;
  const pkg = packages[current];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-[#18181b] via-[#312e81] to-[#23234a] rounded-3xl shadow-2xl p-0 w-full max-w-[98vw] sm:max-w-3xl max-h-[98vh] mx-2 animate-fade-in-up border border-violet-400/30 flex flex-col items-center justify-between">
        {/* Header with package tabs */}
        <div className="w-full flex items-center justify-between px-2 sm:px-10 pt-4 sm:pt-8 pb-2 sm:pb-4 border-b border-violet-400/20 bg-violet-950/30 rounded-t-3xl">
          <div className="flex gap-2 sm:gap-4 w-full justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-violet-700 scrollbar-track-transparent">
            {packages.map((p, idx) => (
              <button
                key={p.key}
                className={`px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 focus:outline-none whitespace-nowrap relative ${current === idx ? 'bg-violet-400 text-[#18181b] shadow-lg' : 'bg-violet-900/40 text-violet-200 hover:bg-violet-800/60'}`}
                onClick={() => setCurrent(idx)}
              >
                <div className="flex flex-col items-center">
                  <span className={`text-xs font-bold ${current === idx ? 'text-[#18181b]' : 'text-violet-300'}`}>
                    {p.tier}
                  </span>
                  <span>{p.title.split(' ')[0]}</span>
                </div>
                {p.highlight && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {p.highlight === "Most popular choice" ? "🔥" : p.highlight === "Guaranteed placement" ? "💎" : "✨"}
                  </div>
                )}
              </button>
            ))}
          </div>
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-8 text-violet-200 hover:text-violet-400 text-2xl font-bold focus:outline-none z-10"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {/* Content */}
        <div className="w-full max-w-xl sm:max-w-2xl mx-auto flex flex-col items-center overflow-y-auto max-h-[60vh] px-2 py-4 sm:py-6 flex-1">
          <div className="w-full text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${pkg.key === 'free' ? 'bg-green-500 text-white' : pkg.key === 'starter' ? 'bg-blue-500 text-white' : pkg.key === 'premium' ? 'bg-purple-500 text-white' : 'bg-gold-500 text-black'}`}>
                {pkg.tier}
              </span>
              {pkg.highlight && (
                <span className="text-green-400 text-xs font-semibold">• {pkg.highlight}</span>
              )}
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-violet-100 drop-shadow-glow mb-2">{pkg.title}</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
              <span className="text-violet-300 font-bold text-lg sm:text-2xl">{pkg.price}</span>
              {pkg.priceNote && (
                <span className="text-violet-400 text-sm">{pkg.priceNote}</span>
              )}
              <span className="text-violet-200 text-sm sm:text-lg">• {pkg.duration}</span>
            </div>
            {pkg.key === "free" && (
              <div className="mb-2 text-green-400 text-xs sm:text-base font-semibold">✨ No commitment required</div>
            )}
            {pkg.key === "jobready" && (
              <div className="mb-2 text-yellow-400 text-xs sm:text-base font-semibold">💎 Pay only when you get a job</div>
            )}
          </div>
          <p className="text-violet-100/90 mb-4 sm:mb-6 text-center text-base sm:text-lg">{pkg.description}</p>
          
          {/* Features */}
          <div className="w-full mb-4 sm:mb-6">
            <h4 className="font-bold text-violet-200 text-lg mb-2">✅ What's Included:</h4>
            <ul className="list-disc list-inside text-violet-200/90 pl-2 w-full text-sm sm:text-base">
              {pkg.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Not Included (for Free tier) */}
          {pkg.notIncluded && (
            <div className="w-full mb-4 sm:mb-6">
              <h4 className="font-bold text-red-400 text-lg mb-2">❌ Not Included:</h4>
              <ul className="list-disc list-inside text-red-300/90 pl-2 w-full text-sm sm:text-base">
                {pkg.notIncluded.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Prerequisites (for Job Ready tier) */}
          {pkg.prerequisites && (
            <div className="w-full mb-4 sm:mb-6">
              <h4 className="font-bold text-yellow-400 text-lg mb-2">📋 Prerequisites:</h4>
              <ul className="list-disc list-inside text-yellow-300/90 pl-2 w-full text-sm sm:text-base">
                {pkg.prerequisites.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Timeline & details */}
          <div className="space-y-6 w-full">
            <div>
              <div className="font-bold text-violet-200 flex items-center gap-2 text-lg mb-1">🕒 Timings & Slots</div>
              <ul className="text-violet-100/90 text-base ml-4 list-disc list-inside">
                <li>2-3 days a week: <b>Friday, Saturday, Sunday</b></li>
                <li>Each day: up to 4 slots, <b>1.5 hours each</b>, starting from <b>4:00 pm onwards</b></li>
                <li>Example slots: 4:00–5:30 pm, 5:30–7:00 pm, 7:00–8:30 pm, 8:30–10:00 pm</li>
                <li>Slot assignment based on instructor & attendee availability</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-violet-200 flex items-center gap-2 text-lg mb-1">📚 Materials Provided</div>
              <ul className="text-violet-100/90 text-base ml-4 list-disc list-inside">
                <li>Comprehensive digital notes & resources</li>
                <li>Access to code repositories & project templates</li>
                <li>Recorded sessions for revision</li>
                <li>Practice assignments & quizzes</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-violet-200 flex items-center gap-2 text-lg mb-1">🧑‍💻 Teaching Methods</div>
              <ul className="text-violet-100/90 text-base ml-4 list-disc list-inside">
                <li>Live interactive classes via <b>Zoom</b> or <b>Google Meet</b></li>
                <li>Blend of theory & hands-on practical work</li>
                <li>Curriculum follows latest web dev trends (2025+), including AI applications</li>
                <li>Use of AI tools to accelerate learning & development</li>
                <li>Real-world projects & collaborative exercises</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sticky Footer */}
        <div className="w-full flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 px-2 sm:px-10 py-4 sm:py-6 border-t border-violet-400/20 bg-violet-950/30 rounded-b-3xl sticky bottom-0 z-10">
          <button
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 font-bold rounded-xl shadow transition-all duration-300 text-base sm:text-lg ${
              pkg.key === 'free' 
                ? 'bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700' 
                : pkg.key === 'starter'
                ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700'
                : pkg.key === 'premium'
                ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700'
                : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
            } glow-btn`}
            onClick={() => {/* TODO: registration logic or scroll to enroll */}}
          >
            {pkg.key === 'free' ? 'Join Community' :
             pkg.key === 'starter' ? 'Start Learning' :
             pkg.key === 'premium' ? 'Go Premium' :
             'Apply for Program'}
          </button>
          <button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/10 text-violet-100 font-bold rounded-xl border border-violet-400/30 backdrop-blur-md hover:bg-violet-900/30 transition-all duration-300 text-base sm:text-lg"
            onClick={onClose}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
} 