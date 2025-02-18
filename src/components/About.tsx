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
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Rreth Loles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">Themeluesja & Guida shpirtërore</p>
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
              <p className="text-lg text-gray-600 leading-relaxed">Me mbi 15 vjet përvojë në drejtimin shpirtëror dhe meditimin, Lola ka ndihmuar individë të panumërt të gjejnë paqen dhe qëllimin e tyre të brendshëm. Udhëtimi i saj filloi në malet e qeta të Tibetit, ku ajo kaloi vite duke studiuar teknikat e lashta të meditimit dhe praktikat shpirtërore.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
        Qasja unike e Lola kombinon mençurinë tradicionale me teknikat moderne të ndërgjegjes, duke krijuar një përvojë transformuese që rezonon me njerëz nga të gjitha sferat e jetës. Misioni i saj është të bëjë rritjen shpirtërore të arritshme dhe kuptimplote për të gjithë.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">15+</div>
                  <div className="text-sm text-gray-600">Vite përvojë</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">1000+</div>
                  <div className="text-sm text-gray-600">Klientë të udhëhequr</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">100%</div>
                  <div className="text-sm text-gray-600">Dedikim</div>
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
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Rreth Morenes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">Bashkë-themelues dhe trajner Wellness</p>
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
              Morena, një sipërmarrëse e pasionuar me një vlerësim të thellë për spiritualitetin, u frymëzua nga fuqia transformuese e shërimit dhe vendosi të bashkojë forcat me Lolën për të themeluar Stacioni Hyjnor.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
            Ndonëse nuk është vetë trajnere, ajo është e përkushtuar për të krijuar një hapësirë ​​ku individët mund të nisin udhëtimin e tyre të paqes së brendshme dhe të zbulimit të vetvetes.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">5+</div>
                  <div className="text-sm text-gray-600">Vite përvojë</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">500+</div>
                  <div className="text-sm text-gray-600">Jetë të ndikuara</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#B5CDA3]">100%</div>
                  <div className="text-sm text-gray-600">Dedikim ne kete mison</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
