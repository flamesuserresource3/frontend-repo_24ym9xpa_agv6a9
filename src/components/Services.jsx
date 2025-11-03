import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart, Smile, Syringe } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: 'Preventive Dentistry',
    desc: 'Comprehensive exams, hygiene, and personalized care plans to keep your smile healthy.',
    icon: Shield,
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Whitening, veneers, and bonding with a focus on proportion, harmony, and longevity.',
    icon: Smile,
  },
  {
    title: 'Restorative Care',
    desc: 'Precise fillings, crowns, and implants using advanced materials and techniques.',
    icon: Heart,
  },
  {
    title: 'Facial Aesthetics',
    desc: 'Refined, subtle enhancements using evidence‑based injectable treatments.',
    icon: Syringe,
  },
  {
    title: 'Digital Smile Design',
    desc: 'Plan your ideal smile with modern imaging and a collaborative approach.',
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[#7a0c2e] text-sm font-semibold tracking-wider uppercase">Services</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Thoughtfully curated treatments</h2>
          <p className="mt-4 text-gray-600">A minimal, precise approach tailored to you—rooted in science and crafted with care.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 hover:ring-[#a7112e]/30 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7a0c2e] text-white">
                  <Icon size={18} />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
              <a href="#book" onClick={(e)=>{e.preventDefault();document.getElementById('book')?.scrollIntoView({behavior:'smooth'});}}
                className="mt-5 inline-flex items-center gap-1 text-[#7a0c2e] font-medium">
                Learn more <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
