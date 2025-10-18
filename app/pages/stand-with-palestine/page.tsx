"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StandWithPalestinePage: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <>
      <Header />
      <div className={`min-h-screen pt-20 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-purple-950/30 to-black text-white'
          : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-900'
      }`}>
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-gradient-to-br from-purple-400/15 to-pink-500/10'
          }`}></div>
          <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/10' : 'bg-gradient-to-br from-pink-500/15 to-purple-600/10'
          }`}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-16 max-w-5xl">
          {/* Back Button */}
          <Link 
            href="/"
            className={`inline-flex items-center gap-2 mb-12 transition-all duration-300 ${
              isDark 
                ? 'text-purple-400 hover:text-purple-300' 
                : 'text-purple-700 hover:text-purple-900'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>

          {/* Title Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border mb-6 ${
              isDark 
                ? 'bg-purple-900/30 border-purple-700/40'
                : 'bg-gradient-to-r from-purple-600/90 to-pink-600/90 border-purple-500/70 shadow-lg'
            }`}>
              <span className={`text-sm font-medium ${
                isDark ? 'text-purple-300' : 'text-white'
              }`}>
                Humanity • Compassion • Justice
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDark 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600'
            }`}>
              We Stand With Palestine
            </h1>
            
            <div className={`w-24 h-1 mx-auto mb-8 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600'
            }`}></div>
          </div>

          {/* Introduction */}
          <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 mb-12 ${
            isDark 
              ? 'bg-white/5 border-purple-500/20'
              : 'bg-white/80 border-purple-200/50 shadow-lg'
          }`}>
            <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              At Upvista Digital, we believe that technology serves humanity, and humanity deserves dignity, freedom, and justice. We recognize that the pursuit of innovation must never come at the cost of human compassion. Today, we stand in solidarity with the Palestinian people—not as a political statement, but as a moral imperative rooted in our shared humanity.
            </p>
            
            <p className={`text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              We condemn the ongoing genocide, the displacement of families, and the systematic denial of basic human rights. We advocate for peace, justice, and the recognition of Palestinian voices in every possible way within our capacity as a digital agency.
            </p>
          </div>

          {/* Our Position */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Position
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                We firmly condemn the violence, persecution, and suffering inflicted upon innocent civilians. The loss of life—of children, mothers, fathers, and the elderly—is a tragedy that transcends borders, religions, and politics. We reject all forms of oppression and stand for the fundamental human rights that every person deserves: the right to live safely, the right to self-determination, and the right to exist with dignity.
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                We call for an immediate end to the violence, the lifting of blockades that prevent access to essential resources, and the establishment of a peaceful agreement that honors the rights and aspirations of the Palestinian people. We believe that lasting peace can only be built on the foundation of justice, mutual respect, and the recognition of shared humanity.
              </p>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                As a company rooted in Pakistan, we understand the importance of standing up for oppressed communities. Our faith, our values, and our conscience compel us to speak out against injustice wherever it occurs.
              </p>
            </div>
          </div>

          {/* Sacred Texts Section */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Voices of Compassion: Sacred Wisdom
            </h2>

            {/* Quote from the Quran */}
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-purple-500/30'
                : 'bg-gradient-to-br from-purple-50/80 to-pink-50/80 border-purple-300/50 shadow-lg'
            }`}>
              <div className={`text-sm font-semibold mb-4 tracking-wider ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
                FROM THE HOLY QURAN
              </div>
              <blockquote className={`text-xl md:text-2xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-purple-200' : 'text-purple-900'
              }`}>
                "O you who have believed, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives. Whether one is rich or poor, Allah is more worthy of both. So follow not [personal] inclination, lest you not be just. And if you distort [your testimony] or refuse [to give it], then indeed Allah is ever, with what you do, Acquainted."
              </blockquote>
              <p className={`text-base ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Surah An-Nisa (4:135)
              </p>
            </div>

            {/* Quote from the Bible */}
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-gradient-to-br from-pink-900/30 to-purple-900/20 border-pink-500/30'
                : 'bg-gradient-to-br from-pink-50/80 to-purple-50/80 border-pink-300/50 shadow-lg'
            }`}>
              <div className={`text-sm font-semibold mb-4 tracking-wider ${
                isDark ? 'text-pink-400' : 'text-pink-700'
              }`}>
                FROM THE HOLY BIBLE
              </div>
              <blockquote className={`text-xl md:text-2xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-pink-200' : 'text-pink-900'
              }`}>
                "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow."
              </blockquote>
              <p className={`text-base ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Isaiah 1:17
              </p>
            </div>

            {/* Quote from the Torah */}
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-purple-500/30'
                : 'bg-gradient-to-br from-purple-50/80 to-pink-50/80 border-purple-300/50 shadow-lg'
            }`}>
              <div className={`text-sm font-semibold mb-4 tracking-wider ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
                FROM THE TORAH
              </div>
              <blockquote className={`text-xl md:text-2xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-purple-200' : 'text-purple-900'
              }`}>
                "Justice, justice shall you pursue, that you may live and inherit the land that the Lord your God is giving you."
              </blockquote>
              <p className={`text-base ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Deuteronomy 16:20
              </p>
            </div>
          </div>

          {/* What We Believe */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              What We Believe
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 space-y-6 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Human Rights Are Universal
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  We believe that every human being, regardless of their nationality, religion, or ethnicity, has the inherent right to life, liberty, and security. The Palestinian people deserve the same rights and freedoms that we all cherish. No political agenda can justify the denial of these fundamental rights.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
                  Peace Must Prevail
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  We advocate for a peaceful resolution to this conflict—one that respects the dignity and rights of all people involved. True peace cannot be achieved through force or oppression; it must be built on mutual understanding, dialogue, and the genuine pursuit of justice. We pray for the day when children can play without fear, families can live without terror, and communities can thrive without walls.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Voices Must Be Heard
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  We commit to amplifying Palestinian voices and stories through our platform. The world must hear the experiences, the struggles, and the hopes of the Palestinian people. In our work, in our communications, and in our community, we create space for these narratives to be shared, understood, and respected.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
                  Silence is Complicity
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  We cannot remain silent in the face of injustice. Our faith traditions teach us to stand with the oppressed, to speak for those who cannot speak for themselves, and to pursue justice with unwavering commitment. While we are a technology company, we recognize that our influence—however small—carries responsibility. We choose to use it for good.
                </p>
              </div>
            </div>
          </div>

          {/* The Reality */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              The Reality We Cannot Ignore
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                For decades, the Palestinian people have endured displacement, occupation, and the systematic erosion of their rights and freedoms. Families have been separated. Homes have been destroyed. Children have grown up knowing only conflict and uncertainty. This is not merely a political issue—it is a humanitarian crisis that demands our attention and our compassion.
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                We witness the destruction of communities, the denial of access to basic necessities like water, food, and medical care. We see the impact of blockades that strangle economies and crush hopes. We hear the stories of those who have lost loved ones, who have been forced from their ancestral lands, who live each day under the shadow of violence and fear.
              </p>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                These are not statistics. These are human beings—mothers, fathers, brothers, sisters, sons, and daughters—who deserve to live with the same freedoms and opportunities that we often take for granted. To acknowledge their suffering is not to diminish anyone else's pain; it is to affirm that all human life has value, all human rights matter, and all voices deserve to be heard.
              </p>
            </div>
          </div>

          {/* Universal Message */}
          <div className="mb-12">
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/30 border-purple-500/30'
                : 'bg-gradient-to-br from-purple-100/80 to-pink-100/80 border-purple-300/60 shadow-xl'
            }`}>
              <blockquote className={`text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 ${
                isDark ? 'text-purple-100' : 'text-purple-900'
              }`}>
                "Whoever saves one life, it is as if they have saved all of humanity."
              </blockquote>
              <p className={`text-base font-medium ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
                Quran 5:32 | Talmud, Sanhedrin 37a
              </p>
            </div>
          </div>

          {/* How We Stand */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              How We Stand With Palestine
            </h2>
            
            <div className="space-y-6">
              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Amplifying Voices
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  We use our digital platform to share Palestinian stories, experiences, and perspectives. We recognize that representation matters, and we commit to ensuring that Palestinian voices are part of the conversations we facilitate and the communities we build.
                </p>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
                  Raising Awareness
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  We believe that understanding leads to empathy, and empathy leads to action. Through our communications, social media, and community engagement, we educate others about the realities faced by Palestinians, challenge misconceptions, and encourage informed, compassionate dialogue.
                </p>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Supporting Humanitarian Efforts
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  Where possible, we support and promote humanitarian organizations working to provide relief, medical aid, and essential services to Palestinian communities. We encourage our team, our clients, and our network to contribute to these efforts in whatever way they can.
                </p>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
                  Advocating for Justice
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  We advocate for policies and actions that uphold international law, protect human rights, and work toward a just and lasting peace. We call upon leaders, organizations, and individuals to prioritize human dignity above all else and to work tirelessly for a future where Palestinians can live freely and safely.
                </p>
              </div>
            </div>
          </div>

          {/* Message of Hope */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              A Message of Hope
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Despite the darkness of the present moment, we hold onto hope. We believe in the resilience of the Palestinian people, in their strength, their courage, and their unwavering determination to live with dignity. We believe that justice will eventually prevail, that walls will fall, and that peace will be more than a distant dream.
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                History has shown us that oppression cannot last forever. The arc of the moral universe may be long, but it bends toward justice. We stand on the right side of that arc. We stand with those who have been marginalized, silenced, and forgotten. We stand with Palestine.
              </p>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                To the Palestinian people: You are not alone. Your struggle is seen. Your pain is acknowledged. Your right to freedom is supported. We stand with you today, tomorrow, and for as long as it takes for justice to be realized.
              </p>
            </div>
          </div>

          {/* Closing Quote */}
          <div className="mb-16">
            <div className={`backdrop-blur-sm border rounded-2xl p-10 md:p-14 text-center ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/30 border-purple-500/40'
                : 'bg-gradient-to-br from-purple-100/90 to-pink-100/90 border-purple-300/70 shadow-xl'
            }`}>
              <blockquote className={`text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-purple-100' : 'text-purple-900'
              }`}>
                "If you are neutral in situations of injustice, you have chosen the side of the oppressor."
              </blockquote>
              <p className={`text-base md:text-lg font-medium ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
                Desmond Tutu
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center mb-12 ${
            isDark 
              ? 'bg-white/5 border-purple-500/20'
              : 'bg-white/80 border-purple-200/50 shadow-lg'
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
              isDark 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-700'
            }`}>
              From Upvista Digital, With Solidarity
            </h2>
            
            <p className={`text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              We are a small company, but we carry a big heart. We may not have the power to change the world overnight, but we have the power to choose compassion over indifference, justice over silence, and humanity over politics. We choose to stand with Palestine, and we will continue to stand until freedom is no longer a dream but a reality.
            </p>
          </div>

          {/* Symbolic Divider */}
          <div className="flex items-center justify-center my-16">
            <div className={`h-px w-32 ${
              isDark 
                ? 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
                : 'bg-gradient-to-r from-transparent via-purple-600 to-transparent'
            }`}></div>
            <div className={`mx-4 text-2xl ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              🕊️
            </div>
            <div className={`h-px w-32 ${
              isDark 
                ? 'bg-gradient-to-r from-transparent via-pink-500 to-transparent'
                : 'bg-gradient-to-r from-transparent via-pink-600 to-transparent'
            }`}></div>
          </div>

          {/* Closing Prayer/Wish */}
          <div className="text-center mb-16">
            <p className={`text-xl md:text-2xl font-serif italic leading-relaxed ${
              isDark ? 'text-purple-200' : 'text-purple-800'
            }`}>
              May peace find its way to every heart.
              <br />
              May justice flow like rivers.
              <br />
              May freedom ring from every corner of the land.
            </p>
          </div>

          {/* Date */}
          <div className="text-center">
            <p className={`text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Upvista Digital - 2024
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StandWithPalestinePage;
