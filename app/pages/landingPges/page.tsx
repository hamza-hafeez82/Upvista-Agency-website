"use client";

import Link from "next/link";
interface LandingPricingCardProps {
  color: "green" | "blue" | "purple";
  tier: string;
  subtitle?: string;
  price: string;
  deliveryTime: string;
  benefits: string[];
  idealFor: string;
  emoji: string;
  buttonText?: string;
}

const LandingPricingCard = ({
  color,
  tier,
  subtitle,
  price,
  deliveryTime,
  benefits,
  idealFor,
  emoji,
  buttonText,
}: LandingPricingCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg transition-all duration-500 
      hover:shadow-xl hover:shadow-${
        color === "green" ? "emerald" : color === "blue" ? "blue" : "violet"
      }-500/20
      hover:translate-y-[-8px] group
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
      ${
        color === "green"
          ? "before:from-emerald-500/0 before:via-emerald-500/5 before:to-emerald-500/0"
          : color === "blue"
          ? "before:from-blue-400/0 before:via-blue-400/5 before:to-blue-400/0"
          : "before:from-violet-500/0 before:via-violet-500/5 before:to-violet-500/0"
      } 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
    `}
    >
      {/* Corner glow effect */}
      <div
        className={`absolute right-0 top-0 h-32 w-32 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 ${
          color === "green"
            ? "bg-emerald-500/20"
            : color === "blue"
            ? "bg-blue-500/20"
            : "bg-violet-500/20"
        } blur-2xl`}
      ></div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className={`absolute inset-[-1px] rounded-xl bg-gradient-to-r ${
            color === "green"
              ? "from-emerald-500/50 via-transparent to-emerald-500/50"
              : color === "blue"
              ? "from-blue-500/50 via-transparent to-blue-500/50"
              : "from-violet-500/50 via-transparent to-violet-500/50"
          } blur-sm`}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
            {emoji}
          </span>
          <div>
            <h3
              className={`text-xl font-bold transition-all duration-300 ${
                color === "green"
                  ? "text-emerald-400 group-hover:text-emerald-300"
                  : color === "blue"
                  ? "text-blue-400 group-hover:text-blue-300"
                  : "text-violet-300 group-hover:text-violet-200"
              }`}
            >
              {tier}
            </h3>
            {subtitle && (
              <p className="text-sm italic text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6 transition-transform duration-300 group-hover:translate-x-1">
          <p className="text-3xl font-bold text-white">{price}</p>
          <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
            Delivery Time: {deliveryTime}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="mb-3 font-medium text-white">
            What&rsquo;s Included:
          </h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1"
              >
                <svg
                  className={`mt-1 h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    color === "green"
                      ? "text-emerald-400"
                      : color === "blue"
                      ? "text-blue-400"
                      : "text-violet-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 transition-all duration-300 group-hover:translate-x-1">
          <h4 className="mb-1 text-sm font-medium text-zinc-400 group-hover:text-zinc-300">
            Ideal For:
          </h4>
          <p className="text-sm text-zinc-300 group-hover:text-zinc-200">
            {idealFor}
          </p>
        </div>

        <Link
          href="/pages/contactPage"
          className="block relative overflow-hidden"
        >
          <div
            className={`absolute inset-0 ${
              color === "green"
                ? "bg-gradient-to-r from-emerald-600/40 to-emerald-400/40"
                : color === "blue"
                ? "bg-gradient-to-r from-blue-600/40 to-blue-400/40"
                : "bg-gradient-to-r from-violet-600/40 to-violet-400/40"
            } translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-20 rounded-lg blur-sm`}
          ></div>
          <button
            className={`w-full rounded-lg py-3 font-medium transition-all duration-300 
            relative overflow-hidden
            ${
              color === "green"
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500"
                : color === "blue"
                ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-300 hover:to-blue-400"
                : "bg-gradient-to-r from-violet-500 to-violet-600 text-white hover:from-violet-400 hover:to-violet-500"
            }
            hover:shadow-lg ${
              color === "green"
                ? "hover:shadow-emerald-500/30"
                : color === "blue"
                ? "hover:shadow-blue-500/30"
                : "hover:shadow-violet-500/30"
            }
            transform group-hover:scale-[1.02]
          `}
          >
            {buttonText || "Get Started"}
            <span className="absolute right-4 opacity-0 transition-all duration-300 transform translate-x-10 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const LandingPricingDemo = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen">
      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-600 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/40 group-hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-400 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-violet-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Back to Home
          </span>
        </div>
      </Link>

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-violet-900/20 blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute right-0 top-1/3 h-60 w-60 rounded-full bg-violet-700/10 blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 h-40 w-60 rounded-full bg-violet-800/10 blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-white text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight transition-all duration-300">
            <span className="inline-block"></span> Custom Landing Page Design
            Services
          </h2>
          <p className="text-center text-base text-zinc-400 md:text-lg">
            Convert Visitors into Customers with High-Impact Landing Pages
          </p>
          <p className="mx-auto max-w-3xl text-center text-base text-zinc-400 md:text-lg mt-2">
            From simple one-screen pages to conversion-focused professional
            designs — we craft landing pages that{" "}
            <strong className="text-white">perform</strong>, not just look good.
          </p>
        </div>

        <h3 className="mb-8 text-center text-2xl font-semibold text-white relative">
          <span className="inline-block transform transition-transform duration-500 hover:scale-105 hover:text-violet-200">
            {" "}
            Our Landing Page Packages
          </span>
          <span className="absolute -bottom-2 left-1/2 w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-500 transform -translate-x-1/2 rounded-full"></span>
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <LandingPricingCard
            color="green"
            emoji=""
            tier="Simple Landing Page"
            subtitle="Clean & Effective"
            price="$99"
            deliveryTime="2–3 days"
            benefits={[
              "1 custom-designed section",
              "Clean layout with your branding",
              "Mobile responsive",
              "Basic on-page SEO",
              "Static HTML/CSS/JS",
            ]}
            idealFor="MVPs, early-stage startups, or quick promos"
            buttonText="Get Started →"
          />

          <LandingPricingCard
            color="blue"
            emoji=""
            tier="Modern Landing Page"
            subtitle="Sleek & Engaging"
            price="$249"
            deliveryTime="3–5 days"
            benefits={[
              "Up to 5 well-structured sections (Hero, Features, About, CTA, Contact)",
              "Responsive, mobile-first design",
              "Scroll-based animations & transitions",
              "Lead capture form (Formspree or similar)",
              "Optimized for SEO and performance",
            ]}
            idealFor="Businesses that need to stand out and convert"
            buttonText="Choose This Plan →"
          />

          <LandingPricingCard
            color="purple"
            emoji=""
            tier="Professional Landing Page"
            subtitle="Full Conversion Funnel"
            price="$499"
            deliveryTime="5–7 days"
            benefits={[
              "Up to 8 premium sections (Hero, Benefits, Features, Testimonials, Pricing, FAQs, CTA, Footer)",
              "Fully branded UI/UX",
              "High-converting structure based on proven strategies",
              "Advanced animations & interactivity",
              "Analytics integration (Google Analytics, Hotjar)",
              "Hosting setup (Netlify, Vercel, etc.)",
            ]}
            idealFor="Campaigns, products, or high-converting services"
            buttonText="Launch My Page →"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPricingDemo;
