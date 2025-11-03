import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function BookingContact() {
  return (
    <section id="book" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl ring-1 ring-gray-200 p-6 md:p-8"
          >
            <div className="text-[#7a0c2e] text-sm font-semibold tracking-wider uppercase">Book</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">Book your consultation</h3>
            <p className="mt-2 text-gray-600">Send us a request and we’ll confirm your appointment shortly.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" placeholder="Jane Doe" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#a7112e]/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="jane@example.com" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#a7112e]/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" placeholder="+1 555 014 2210" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#a7112e]/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred date</label>
                <input type="date" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#a7112e]/40" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" placeholder="Tell us about your goals or concerns" className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#a7112e]/40"></textarea>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[#7a0c2e] text-white px-6 py-3 font-semibold shadow/50 shadow-black/10 hover:shadow-md transition">
                  <Calendar size={18}/> Request Appointment
                </button>
                <p className="text-sm text-gray-500">We respond within one business day.</p>
              </div>
            </form>
          </motion.div>

          {/* Contact */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden ring-1 ring-gray-200"
          >
            <div className="h-full grid">
              <div className="p-6 md:p-8">
                <div className="text-[#7a0c2e] text-sm font-semibold tracking-wider uppercase">Contact</div>
                <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">We’re here to help</h3>
                <p className="mt-2 text-gray-600">Reach out to discuss treatment options or to plan your visit.</p>
                <div className="mt-6 space-y-3 text-gray-700">
                  <div className="flex items-center gap-3"><Phone size={18} className="text-[#7a0c2e]"/> +1 (555) 014-2210</div>
                  <div className="flex items-center gap-3"><Mail size={18} className="text-[#7a0c2e]"/> care@claretclinic.com</div>
                  <div className="flex items-center gap-3"><MapPin size={18} className="text-[#7a0c2e]"/> 12 Beaumont Street, Suite 4, London</div>
                </div>
              </div>
              <div className="relative h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop"
                  alt="Map area"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
