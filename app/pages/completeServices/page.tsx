import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Mail,
  Settings,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function CompleteServices() {
  const services = [
    {
      title: "Design & Development",
      icon: <Zap className="h-6 w-6" />,
      items: [
        "Custom UI/UX Design",
        "Responsive Web Development",
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "SEO Best Practices",
      ],
    },
    {
      title: "Deployment & Hosting",
      icon: <Globe className="h-6 w-6" />,
      items: [
        "Premium Hosting Setup",
        "Domain Registration & Configuration",
        "SSL Certificate Installation",
        "CDN Integration",
        "Server Optimization",
        "Backup Solutions",
      ],
    },
    {
      title: "Analytics & Marketing",
      icon: <BarChart3 className="h-6 w-6" />,
      items: [
        "Google Analytics Integration",
        "Conversion Tracking",
        "Email Marketing Setup",
        "CRM Integration",
        "Social Media Integration",
        "Marketing Automation",
      ],
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      items: [
        "GDPR Compliance",
        "Data Protection",
        "Regular Security Audits",
        "SSL/TLS Implementation",
        "Privacy Policy Setup",
        "Terms of Service",
      ],
    },
    {
      title: "Maintenance & Support",
      icon: <Settings className="h-6 w-6" />,
      items: [
        "24/7 Technical Support",
        "Regular Updates",
        "Performance Monitoring",
        "Bug Fixes",
        "Content Updates",
        "Security Patches",
      ],
    },
    {
      title: "Business Integration",
      icon: <Mail className="h-6 w-6" />,
      items: [
        "Email Service Setup",
        "Business Email Configuration",
        "Calendar Integration",
        "Team Collaboration Tools",
        "Document Management",
        "Workflow Automation",
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
              Complete End-to-End Digital Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your all-in-one package for a comprehensive digital presence. From
              design to deployment, we handle everything your business needs to
              succeed online.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
              Why Choose Our Complete Package?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Get everything you need in one place, saving time and ensuring
              consistency across your digital presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
              <p className="text-gray-400">
                One provider for all your digital needs means less coordination
                and faster results.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consistent Quality</h3>
              <p className="text-gray-400">
                Uniform standards and seamless integration across all services.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-400">
                Dedicated support team for all your digital needs, 24/7.
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us handle your complete digital solution. From design to
              maintenance, we&apos;ve got you covered with our comprehensive
              package.
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
