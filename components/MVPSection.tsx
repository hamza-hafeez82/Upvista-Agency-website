import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    title: "Consultation",
    desc:
      "Understand your vision, users, constraints, and success metrics to shape a viable scope.",
  },
  {
    title: "Idea refinement",
    desc:
      "Clarify the core value proposition, prioritize features, and align on measurable outcomes.",
  },
  {
    title: "Architecture design",
    desc:
      "Design a pragmatic, scalable foundation covering data, APIs, deployment, and observability.",
  },
  {
    title: "MVP development",
    desc:
      "Build the core product with quality baselines, focusing on speed-to-learning and reliability.",
  },
  {
    title: "Launch and marketing",
    desc:
      "Prepare GTM, tracking, and feedback loops to validate assumptions with real users.",
  },
  {
    title: "Robust features",
    desc:
      "Iterate based on insights, adding depth to workflows and improving user experience.",
  },
  {
    title: "Scale & secure infrastructure",
    desc:
      "Harden security, automate operations, and scale infrastructure with confidence.",
  },
];

export default function MVPSection() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  // Theming tokens
  const borderColor = isDark ? "border-white/10" : "border-neutral-200";
  const mutedText = isDark ? "text-neutral-300" : "text-neutral-600";
  const headingText = isDark ? "text-white" : "text-neutral-900";
  const subHeadingText = isDark ? "text-neutral-200" : "text-neutral-800";
  const secondaryText = isDark ? "text-neutral-200 hover:text-white" : "text-neutral-700 hover:text-neutral-900";

  // Motion state
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useMemo(() => steps.map(() => React.createRef<HTMLLIElement>()), []);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -45% 0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idxAttr = entry.target.getAttribute("data-step-index");
        if (!idxAttr) return;
        const idx = Number(idxAttr);
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          setActiveIndex((prev) => (idx > prev ? idx : prev));
        }
      });
    }, options);

    itemRefs.forEach((ref, idx) => {
      if (ref.current) {
        ref.current.setAttribute("data-step-index", String(idx));
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, [itemRefs]);

  // Keyboard navigation for accessibility and deep-linking
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      const dir = e.key === "ArrowDown" ? 1 : -1;
      const next = Math.min(Math.max(activeIndex + dir, 0), steps.length - 1);
      const nextId = `mvp-step-${String(next + 1).padStart(2, "0")}`;
      const target = document.getElementById(nextId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${nextId}`);
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  // Background tokens inspired by hero
  const gradientBg = isDark
    ? "bg-gradient-to-br from-black via-black/80 to-purple-950"
    : "bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100";
  const blobA = isDark ? "bg-purple-600/20" : "bg-gradient-to-br from-purple-400/25 to-pink-500/20";
  const blobB = isDark ? "bg-pink-600/20" : "bg-gradient-to-br from-pink-500/25 to-purple-600/20";
  const blobC = isDark ? "bg-violet-800/15" : "bg-gradient-to-br from-purple-400/20 to-pink-400/15";
  const gridOverlay = isDark
    ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"
    : "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMTUsMjMsNDIsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDE1LDIzLDQyLDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10";

  return (
    <section
      ref={sectionRef}
      aria-labelledby="mvp-title"
      tabIndex={0}
      className={`relative w-full ${gradientBg}`}
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${blobA}`}></div>
        <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${blobB}`}></div>
        <div className={`absolute top-1/4 left-1/3 h-80 w-80 rounded-full blur-3xl ${blobC}`}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 ${gridOverlay}`} aria-hidden="true"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="md:grid md:grid-cols-12 md:gap-12">
            {/* Left sticky summary */}
            <div className="md:col-span-5 md:sticky md:top-24 self-start">
              <h2
                id="mvp-title"
                className={`text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 inline-block overflow-visible leading-[1.15] mb-3 md:mb-4 pb-2 md:pb-3`}
              >
                {t('mvp.title')}
              </h2>
              <p className={`mt-4 text-base md:text-lg leading-relaxed ${subHeadingText}`}>
                {t('mvp.subhead')}
              </p>
              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="/Consult"
                  className={`group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm md:text-base text-white shadow-md transition-all
                  bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400/40`}
                >
                  {t('mvp.cta.primary')}
                </Link>
                <Link
                  href="/Services"
                  className={`inline-flex items-center gap-1 text-sm md:text-base underline underline-offset-6 decoration-transparent hover:decoration-current transition-all ${secondaryText}`}
                >
                  {t('mvp.cta.secondary')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right scrollytelling steps */}
            <div className="mt-12 md:mt-0 md:col-span-7">
              <ol className="space-y-10">
                {steps.map((s, idx) => {
                  const stepId = `mvp-step-${String(idx + 1).padStart(2, "0")}`;
                  const isActive = idx <= activeIndex;
                  return (
                    <li
                      id={stepId}
                      key={s.title}
                      ref={itemRefs[idx]}
                      className={`group pt-8 ${idx === 0 ? "" : `border-t ${borderColor}`} 
                        opacity-0 translate-y-6 scale-[0.985]
                        transition-all duration-700 ease-out
                        will-change-transform will-change-opacity
                        motion-reduce:transition-none motion-reduce:transform-none motion-reduce:blur-0 motion-reduce:opacity-100
                        [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100`}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`mt-1 text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300 group-[.is-visible]:opacity-100 opacity-80`}>
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h3
                            className={`text-lg md:text-xl ${headingText} transition-all duration-300 ${isActive ? "font-semibold" : "font-medium"
                              }`}
                          >
                            {t(`mvp.steps.${idx + 1}.title`)}
                          </h3>
                          <p className={`mt-2 text-sm md:text-base leading-relaxed ${mutedText}`}>
                            {t(`mvp.steps.${idx + 1}.desc`)}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced-motion: disable decoration animations (none currently) */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-blob, .animate-gradient, .animate-fade-in-up { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

