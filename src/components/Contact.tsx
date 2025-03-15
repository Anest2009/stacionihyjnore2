import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './Button';

export function Contact() {
  const [state, handleSubmit] = useForm('mdkkynva'); // Replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#B5CDA3]/5">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600">Your message has been sent successfully. We will get back to you soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#B5CDA3]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to assist you on your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-[#B5CDA3]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-1 block w-full rounded-lg border-[#B5CDA3]/20 shadow-sm focus:border-[#B5CDA3] focus:ring focus:ring-[#B5CDA3]/20 bg-white/50"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border-[#B5CDA3]/20 shadow-sm focus:border-[#B5CDA3] focus:ring focus:ring-[#B5CDA3]/20 bg-white/50"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border-[#B5CDA3]/20 shadow-sm focus:border-[#B5CDA3] focus:ring focus:ring-[#B5CDA3]/20 bg-white/50"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <Button variant="primary" className="w-full" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            {[
              { icon: Mail, title: 'Email', content: 'stacionihyjnor@gmail.com' },
              { icon: Phone, title: 'Phone', content: '+44 7767 912303' },
              { icon: MapPin, title: 'Location', content: '123 Mindfulness Street\nSerenity City, SC 12345' }
            ].map((item, index) => (
              <div key={index} className="group bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#B5CDA3]/20 flex items-start hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B5CDA3] to-[#A9DFF7] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
