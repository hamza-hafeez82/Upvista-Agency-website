import React, { useState } from "react";

const packages = [
  {
    key: "foundations",
    title: "AI Foundations",
    description:
      "Build a strong foundation in Artificial Intelligence. Learn core concepts, Python for AI, data handling, and essential math for AI (linear algebra, probability, calculus).",
    features: [
      "Python for AI",
      "Data handling & preprocessing",
      "Math for AI (linear algebra, probability, calculus)",
      "Core AI concepts",
      "Project-based learning",
      "Team collaboration",
    ],
    price: "30,000 PKR (2 months)",
    duration: "2 months",
  },
  {
    key: "ml",
    title: "Machine Learning",
    description:
      "Learn to build, train, and deploy machine learning models. Cover supervised/unsupervised learning, model evaluation, and use of popular ML libraries (scikit-learn, pandas, etc.).",
    features: [
      "Supervised & unsupervised learning",
      "Model evaluation & selection",
      "scikit-learn, pandas, numpy",
      "Feature engineering",
      "Real-world ML projects",
    ],
    price: "35,000 PKR (2 months)",
    duration: "2 months",
  },
  {
    key: "dl",
    title: "Deep Learning",
    description:
      "Master deep learning with neural networks, CNNs, RNNs, and modern frameworks (TensorFlow, PyTorch). Work on image, text, and generative AI projects.",
    features: [
      "Neural networks, CNNs, RNNs",
      "TensorFlow & PyTorch",
      "Image & text AI projects",
      "Generative AI basics",
      "AI for real-world applications",
    ],
    price: "40,000 PKR (2 months)",
    duration: "2 months",
  },
  {
    key: "engineering",
    title: "AI Engineering & Deployment",
    description:
      "Learn to deploy, scale, and integrate AI models into products. Cover MLOps, cloud deployment, APIs, and responsible AI practices.",
    features: [
      "MLOps & model deployment",
      "Cloud AI (AWS, GCP, Azure)",
      "Building AI APIs",
      "Responsible & ethical AI",
      "Portfolio development & mentorship",
      "End-to-end projects & job prep",
    ],
    price: "45,000 PKR (2 months)",
    perMonth: "20,000 PKR/month",
    duration: "2 months",
  },
];

export default function AIPackageModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
                className={`px-3 sm:px-4 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 focus:outline-none whitespace-nowrap ${current === idx ? 'bg-violet-400 text-[#18181b] shadow-lg' : 'bg-violet-900/40 text-violet-200 hover:bg-violet-800/60'}`}
                onClick={() => setCurrent(idx)}
              >
                {p.title.split(' ')[0]}
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
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-violet-100 drop-shadow-glow mb-2">{pkg.title}</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
              <span className="text-violet-300 font-bold text-lg sm:text-2xl">{pkg.price}</span>
              <span className="text-violet-200 text-sm sm:text-lg">{pkg.duration}</span>
            </div>
            <div className="mb-2 text-green-400 text-xs sm:text-base font-semibold">1 week free trial included</div>
            {pkg.key === "engineering" && (
              <div className="mb-2 text-violet-400 text-xs sm:text-base font-semibold">or {pkg.perMonth} (all modules included)</div>
            )}
          </div>
          <p className="text-violet-100/90 mb-4 sm:mb-6 text-center text-base sm:text-lg">{pkg.description}</p>
          <ul className="list-disc list-inside text-violet-200/90 mb-4 sm:mb-6 pl-2 w-full text-sm sm:text-base">
            {pkg.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
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
                <li>Curriculum follows latest AI trends (2025+), including generative AI</li>
                <li>Use of AI tools to accelerate learning & development</li>
                <li>Real-world projects & collaborative exercises</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sticky Footer */}
        <div className="w-full flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 px-2 sm:px-10 py-4 sm:py-6 border-t border-violet-400/20 bg-violet-950/30 rounded-b-3xl sticky bottom-0 z-10">
          <button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-violet-400 to-indigo-600 text-white font-bold rounded-xl shadow hover:from-violet-500 hover:to-indigo-700 transition-all duration-300 glow-btn text-base sm:text-lg"
            onClick={() => {/* TODO: registration logic or scroll to enroll */}}
          >
            Register for free (1 week)
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