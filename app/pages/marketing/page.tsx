import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Megaphone,
  Search,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Marketing() {
  const marketingServices = [
    {
      title: "Digital Marketing",
      icon: <Megaphone className="h-6 w-6" />,
      items: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Influencer Marketing",
        "Video Marketing",
        "Digital Advertising",
      ],
    },
    {
      title: "Search Engine Optimization",
      icon: <Search className="h-6 w-6" />,
      items: [
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Local SEO",
        "Keyword Research",
        "SEO Analytics",
      ],
    },
    {
      title: "Sales Growth",
      icon: <TrendingUp className="h-6 w-6" />,
      items: [
        "Sales Strategy",
        "Lead Generation",
        "Sales Funnel Optimization",
        "CRM Implementation",
        "Sales Training",
        "Performance Analytics",
      ],
    },
    {
      title: "Market Research",
      icon: <Target className="h-6 w-6" />,
      items: [
        "Competitor Analysis",
        "Market Analysis",
        "Consumer Research",
        "Trend Analysis",
        "Data Analytics",
        "Market Reports",
      ],
    },
    {
      title: "Brand Development",
      icon: <Users className="h-6 w-6" />,
      items: [
        "Brand Strategy",
        "Brand Positioning",
        "Brand Identity",
        "Brand Guidelines",
        "Brand Messaging",
        "Brand Awareness",
      ],
    },
    {
      title: "Performance Marketing",
      icon: <BarChart3 className="h-6 w-6" />,
      items: [
        "PPC Advertising",
        "Display Advertising",
        "Retargeting",
        "Conversion Optimization",
        "ROI Tracking",
        "Campaign Analytics",
      ],
    },
  ];

  const tools = [
    {
      category: "Analytics Tools",
      items: [
        "Google Analytics",
        "SEMrush",
        "Ahrefs",
        "Moz",
        "SimilarWeb",
        "Hotjar",
      ],
    },
    {
      category: "Marketing Automation",
      items: [
        "HubSpot",
        "Mailchimp",
        "ActiveCampaign",
        "Pardot",
        "Marketo",
        "SendinBlue",
      ],
    },
    {
      category: "Social Media Tools",
      items: [
        "Hootsuite",
        "Buffer",
        "Sprout Social",
        "Later",
        "SocialPilot",
        "Agorapulse",
      ],
    },
    {
      category: "CRM & Sales Tools",
      items: [
        "Salesforce",
        "Pipedrive",
        "HubSpot CRM",
        "Zoho CRM",
        "Freshsales",
        "Monday.com",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <button className="group relative px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-medium overflow-hidden shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center">
              <ArrowRight className="h-4 w-4 mr-1 rotate-180 transform group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </span>
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Marketing & Sales Growth Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Drive your business growth with our comprehensive marketing and
              sales solutions. From digital marketing to sales optimization, we
              help you achieve your goals.
            </p>
            <Link href="/pages/contactPage">
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg shadow-violet-900/30 mx-auto">
                Start Growing Today
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Our Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-violet-700/50 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-violet-900/30 text-violet-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-violet-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-violet-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Professional Marketing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((toolCategory, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-violet-700/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {toolCategory.category}
                </h3>
                <ul className="space-y-2">
                  {toolCategory.items.map((tool, toolIndex) => (
                    <li
                      key={toolIndex}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <BarChart3 className="h-4 w-4 text-violet-500" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Our Marketing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Analysis</h3>
              <p className="text-gray-400">
                Understanding your market and goals
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-400">Developing your marketing plan</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-gray-400">Implementing your strategy</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Optimization</h3>
              <p className="text-gray-400">Refining and improving results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-violet-900/50 to-indigo-900/50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
              Ready to Grow Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you achieve your marketing and sales goals. Get in
              touch to start your growth journey today.
            </p>
            <Link href="/pages/contactPage">
              <button className="bg-white text-violet-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg mx-auto">
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
