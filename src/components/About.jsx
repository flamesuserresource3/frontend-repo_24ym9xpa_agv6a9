import { motion } from 'framer-motion';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#7a0c2e] text-sm font-semibold tracking-wider uppercase">About Us</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              A calm, precise approach to your smile and skin health
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Our team blends evidence‑based dentistry with modern aesthetic treatments.
              We prioritize comfort, transparency, and results that feel natural.
              From routine check‑ups to cosmetic enhancements, you’ll receive thoughtful care in a serene setting.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#a7112e]"></span>
                Preventive and restorative dentistry with meticulous attention to detail
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#a7112e]"></span>
                Subtle, effective facial aesthetics for refreshed, natural results
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#a7112e]"></span>
                A welcoming team, state‑of‑the‑art technology, and transparent treatment plans
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop"
                alt="Modern dental instruments"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1588774069263-3f3b9a75b9a9?q=80&w=1600&auto=format&fit=crop"
                alt="Aesthetic medicine comfort"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1583912267550-f5df6b261054?q=80&w=1600&auto=format&fit=crop"
                alt="Serene treatment room"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
