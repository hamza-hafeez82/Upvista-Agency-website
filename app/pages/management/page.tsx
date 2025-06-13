import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Share2,
  Calendar,
  FileText,
  BarChart3,
  Settings,
  Globe,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Management() {
  const managementServices = [
    {
      title: "Social Media Management",
      icon: <Share2 className="h-6 w-6" />,
      items: [
        "Content Strategy",
        "Post Creation & Scheduling",
        "Community Management",
        "Social Media Audits",
        "Analytics & Reporting",
        "Crisis Management",
      ],
    },
    {
      title: "Project Management",
      icon: <Calendar className="h-6 w-6" />,
      items: [
        "Project Planning",
        "Resource Allocation",
        "Timeline Management",
        "Risk Assessment",
        "Progress Tracking",
        "Quality Assurance",
      ],
    },
    {
      title: "Content Management",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "Content Calendar",
        "Blog Management",
        "SEO Optimization",
        "Content Audits",
        "Editorial Planning",
        "Content Distribution",
      ],
    },
    {
      title: "Community Management",
      icon: <Users className="h-6 w-6" />,
      items: [
        "Community Building",
        "Engagement Strategy",
        "Moderation",
        "Event Planning",
        "Feedback Management",
        "Growth Strategy",
      ],
    },
    {
      title: "Digital Asset Management",
      icon: <Settings className="h-6 w-6" />,
      items: [
        "Asset Organization",
        "Version Control",
        "Access Management",
        "Backup Solutions",
        "Metadata Management",
        "Workflow Automation",
      ],
    },
    {
      title: "Website Management",
      icon: <Globe className="h-6 w-6" />,
      items: [
        "Content Updates",
        "Performance Monitoring",
        "Security Management",
        "Backup Management",
        "Plugin Updates",
        "Technical Support",
      ],
    },
  ];

  const tools = [
    {
      category: "Social Media Tools",
      items: [
        "Hootsuite",
        "Buffer",
        "Sprout Social",
        "Later",
        "Canva",
        "SocialPilot",
      ],
    },
    {
      category: "Project Management",
      items: ["Asana", "Trello", "Monday.com", "Jira", "Basecamp", "ClickUp"],
    },
    {
      category: "Analytics & Reporting",
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
      category: "Content Management",
      items: [
        "WordPress",
        "HubSpot",
        "Contentful",
        "Drupal",
        "Wix",
        "Squarespace",
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
              Professional Management Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Streamline your digital presence with our comprehensive management
              services. From social media to project management, we handle it
              all.
            </p>
            <Link href="/pages/contactPage">
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg shadow-violet-900/30 mx-auto">
                Get Started
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
            Our Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementServices.map((service, index) => (
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
            Professional Management Tools
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
            Our Management Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-400">
                Evaluating your current management needs and goals
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-400">
                Developing a comprehensive management plan
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-400">Executing the management strategy</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Optimization</h3>
              <p className="text-gray-400">
                Continuous improvement and refinement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-violet-900/50 to-indigo-900/50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
              Ready to Streamline Your Management?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us handle your management needs while you focus on growing
              your business. Get in touch to start optimizing your operations
              today.
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
