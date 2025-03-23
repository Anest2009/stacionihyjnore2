import React from 'react';
import { Heart, Users, Star, Sparkles } from 'lucide-react';
import lolaImage from "../images/lola.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#B5CDA3]/10 via-white to-[#A9DFF7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Owner Section for Lola */}
        <div className="mb-24">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-12 h-12 text-[#B5CDA3]" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">About Lola</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">Meditation & Sound Healing Practitioner</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B5CDA3] to-[#A9DFF7] rounded-2xl transform rotate-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={lolaImage}
                alt="Lola"
                className="relative rounded-2xl shadow-xl"
              /> 
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                For the past six years, I have immersed myself in the transformative power of meditation and sound
                healing, using these sacred practices to heal my own journey while guiding and supporting others in
                theirs. My deep exploration into frequency, vibration, and energy work has allowed me to develop a
                profound understanding of how sound and meditation can help release past trauma, restore balance, and
                elevate consciousness.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through personal practice, study, and hands-on experience, I have facilitated healing sessions that help
                individuals reconnect with their inner peace, release emotional blockages, and raise their vibrational
                energy. Whether through guided meditation, sound baths, chakra balancing, or vibrational therapy, my
                mission is to empower others on their path to healing, self-discovery, and transformation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that true healing begins from within, and by harnessing the power of sound, breath, and
                mindfulness, we can cultivate deep emotional and energetic shifts. My work is dedicated to creating a
                safe and sacred space for those seeking to heal, grow, and step into their highest potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-semibold text-[#B5CDA3]">
                Let’s vibrate higher together.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">6+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">1000+</div>
                  <div className="text-sm text-gray-600">Clients Guided</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">100%</div>
                  <div className="text-sm text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
