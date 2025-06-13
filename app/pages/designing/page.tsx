import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Image as ImageIcon,
  Video,
  Type,
  Layers,
  Sparkles,
  PenTool,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Designing() {
  const designServices = [
    {
      title: "Brand Identity Design",
      icon: <Palette className="h-6 w-6" />,
      items: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette Creation",
        "Typography Selection",
        "Brand Voice & Messaging",
        "Visual Identity System",
      ],
    },
    {
      title: "Digital Graphics",
      icon: <ImageIcon className="h-6 w-6" />,
      items: [
        "Social Media Graphics",
        "Web Banners & Ads",
        "Digital Illustrations",
        "Infographics",
        "Email Templates",
        "Digital Artwork",
      ],
    },
    {
      title: "Print Design",
      icon: <Type className="h-6 w-6" />,
      items: [
        "Business Cards",
        "Brochures & Flyers",
        "Packaging Design",
        "Magazine Layouts",
        "Posters & Banners",
        "Print Advertisements",
      ],
    },
    {
      title: "Motion Graphics",
      icon: <Video className="h-6 w-6" />,
      items: [
        "Animated Logos",
        "Video Intros/Outros",
        "Social Media Animations",
        "Explainer Videos",
        "Motion Graphics",
        "Animated Infographics",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Layers className="h-6 w-6" />,
      items: [
        "Website Design",
        "Mobile App Design",
        "User Interface Design",
        "User Experience Design",
        "Wireframing",
        "Prototyping",
      ],
    },
    {
      title: "Photo Editing",
      icon: <PenTool className="h-6 w-6" />,
      items: [
        "Photo Retouching",
        "Color Correction",
        "Background Removal",
        "Photo Manipulation",
        "Image Enhancement",
        "Photo Restoration",
      ],
    },
  ];

  const tools = [
    {
      category: "Design Software",
      items: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "Canva Pro",
        "Affinity Designer",
        "CorelDRAW",
      ],
    },
    {
      category: "Photo Editing",
      items: [
        "Adobe Photoshop",
        "Lightroom",
        "Capture One",
        "GIMP",
        "Affinity Photo",
        "Luminar",
      ],
    },
    {
      category: "Vector Graphics",
      items: [
        "Adobe Illustrator",
        "Inkscape",
        "Affinity Designer",
        "CorelDRAW",
        "Sketch",
        "Figma",
      ],
    },
    {
      category: "Motion & Video",
      items: [
        "Adobe After Effects",
        "Premiere Pro",
        "DaVinci Resolve",
        "Final Cut Pro",
        "Motion",
        "Blender",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowRight className="h-4 w-4 rotate-180 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Professional Design Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From brand identity to motion graphics, we create stunning visual
              experiences that elevate your brand and captivate your audience.
            </p>
            <Link href="/pages/contactPage">
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg shadow-violet-900/30 mx-auto">
                Start Your Design Project
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Our Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
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
            Professional Design Tools
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
                      <Sparkles className="h-4 w-4 text-violet-500" />
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
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-400">
                Understanding your brand, goals, and requirements
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Concept</h3>
              <p className="text-gray-400">
                Creating initial designs and concepts
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Refinement</h3>
              <p className="text-gray-400">
                Refining designs based on feedback
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-400">
                Finalizing and delivering your designs
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
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create stunning designs that make your brand stand out.
              Get in touch to start your design journey today.
            </p>
            <Link href="/pages/contactPage">
              <button className="bg-white text-violet-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg mx-auto">
                Start Your Project
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
