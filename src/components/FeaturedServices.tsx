import React from 'react';
import { Flower, Heart, Brain, Sparkles } from 'lucide-react';

export function FeaturedServices() {
  const services = [
    {
      icon: Flower,
      title: "Meditim me giude",
      description: "Përjetoni relaksim të thellë dhe paqe të brendshme përmes seancave tona të personalizuara të meditimit."
    },
    {
      icon: Heart,
      title: "Balancim Chakrash",
      description: "Riktheni harmoninë në qendrat tuaja të energjisë me teknikat tona të specializuara të shërimit të çakrës."
    },
    {
      icon: Brain,
      title: "Trajnimi ndërgjegjes",
      description: "Mësoni teknika praktike për të qëndruar prezent dhe për të reduktuar stresin në jetën tuaj të përditshme."
    },
    {
      icon: Sparkles,
      title: "Këshillim Shpirtëror",
      description: "Merrni udhëzime dhe mbështetje në udhëtimin tuaj shpirtëror nga këshilltarët tanë me përvojë."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#B5CDA3]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Sherbimet Tona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zbuloni gamën tonë të shërbimeve shpirtërore dhe të vëmendjes, të krijuara për t'ju ndihmuar të gjeni ekuilibrin, paqen dhe rritjen personale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#B5CDA3]/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#B5CDA3] to-[#A9DFF7] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
