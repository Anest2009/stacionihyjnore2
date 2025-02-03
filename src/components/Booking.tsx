import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from './Button';

const sessions = [
  {
    title: "Meditim - 3 Seanca",
    duration: "60 minuta per seance",
    price: "120€",
    description: "Shijoni 3 seanca meditimi të personalizuara të përshtatura për nevojat tuaja.",
    calendlyUrl: "https://tidycal.com/stacionihyjnor/meditim3seanca"
  },
  {
    title: "Meditim - 6 Seanca",
    duration: "60 minuta per seance",
    price: "240€",
    description: "Zhytuni më thellë me 6 seanca meditimi të personalizuara.",
    calendlyUrl: "https://tidycal.com/stacionihyjnor/meditim6seanca"
  },
  {
    title: "Meditim - 10 Seanca",
    duration: "60 minuta per seance",
    price: "360€",
    description: "Paketa gjithëpërfshirëse prej 10 seancash, duke përfshirë të parën falas.",
    calendlyUrl: "https://tidycal.com/stacionihyjnor/meditim10seanca"
  },
  {
    title: "Sherim zeri - 3 Seanca",
    duration: "60 minuta per seance",
    price: "120€",
    description: "Relaksohuni me 3 seanca të personalizuara të shërimit të zërit.",
    calendlyUrl: "https://tidycal.com/stacionihyjnor/sherimzeri3"
  },
  {
    title: "Sherim zeri- 6 Seanca",
    duration: "60 minuta per seance",
    price: "240€",
    description: "Përjetoni 6 seanca të shërimit të zërit për relaksim të thellë.",
    calendlyUrl: "https://tidycal.com/stacionihyjnor/sherimzeri6"
  },
  {
    title: "Sherim zeri - 10 Seanca",
    duration: "60 minuta per seance",
    price: "360€",
    description: "Paketa e plotë me 10 seanca të shërimit të zërit, seanca e parë falas.",
    calendlyUrl: "https://tidycal.com/stacionihyjnor/sherimzeri10"
  }
];

export function Booking() {
  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-[#B5CDA3]/5 via-white to-[#A9DFF7]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Pronoto Seancen tende</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zgjidhni nga gama jonë e seancave të personalizuara për të filluar udhëtimin tuaj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessions.map((session, index) => (
            <div key={index} className="group bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#B5CDA3]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B5CDA3] to-[#A9DFF7] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <h3 className="text-xl font-medium text-gray-900 mb-6">{session.title}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#B5CDA3]/20 to-[#A9DFF7]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#B5CDA3]" />
                  </div>
                  <span className="ml-3 text-gray-600">{session.duration}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#B5CDA3]/20 to-[#A9DFF7]/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#B5CDA3]" />
                  </div>
                  <span className="ml-3 text-gray-600">1-ne-1 Seanca</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#B5CDA3]/20 to-[#A9DFF7]/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#B5CDA3]" />
                  </div>
                  <span className="ml-3 text-gray-600">Orar fleksibel</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{session.description}</p>
              <div className="text-2xl font-medium text-[#B5CDA3] mb-6">{session.price}</div>
              <Button 
                variant="primary" 
                className="w-full group-hover:bg-[#A9DFF7] transition-colors duration-300" 
                onClick={() => window.open(session.calendlyUrl, '_blank')}
              >
                Pronoto Tani
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
