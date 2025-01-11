import React from 'react';
import { Heart, Users, Star, Sparkles } from 'lucide-react';
import lolaImage from "../images/lola.jpg";
import morenaImage from "../images/morena.jpg";

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
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Meet Lola</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">Founder & Spiritual Guide</p>
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
                With over 15 years of experience in spiritual guidance and meditation, Lola has helped countless individuals find their inner peace and purpose. Her journey began in the serene mountains of Tibet, where she spent years studying ancient meditation techniques and spiritual practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lola's unique approach combines traditional wisdom with modern mindfulness techniques, creating a transformative experience that resonates with people from all walks of life. Her mission is to make spiritual growth accessible and meaningful for everyone.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
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

        {/* Owner Section for Morena */}
        <div className="mb-24">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-12 h-12 text-[#B5CDA3]" />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Meet Morena</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">Co-Founder & Wellness Coach</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B5CDA3] to-[#A9DFF7] rounded-2xl transform rotate-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={morenaImage}
                alt="Morena"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
              Morena, a passionate entrepreneur with a deep appreciation for spirituality, was inspired by the transformative power of healing and decided to join forces with Lola to establish Stacioni Hyjnor.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              While not a coach herself, she is dedicated to creating a space where individuals can embark on their journey of inner peace and self-discovery.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">5+</div>
                  <div className="text-sm text-gray-600">Years of Spiritual Exploration</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">500+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">100%</div>
                  <div className="text-sm text-gray-600">Dedication to the Mission</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
