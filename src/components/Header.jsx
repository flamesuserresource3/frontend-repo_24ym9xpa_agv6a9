import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import React from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'book', label: 'Book' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  return (
    <header id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#a7112e] via-[#7a0c2e] to-[#400814]" />
      <div className="absolute -top-24 -right-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div onClick={() => scrollToId('home')} className="cursor-pointer select-none">
            <span className="text-white text-xl tracking-wide font-semibold">Claret Dental & Aesthetics</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToId(n.id)}
                className="text-white/90 hover:text-white transition-colors text-sm tracking-wide"
              >
                {n.label}
              </button>
            ))}
            <a href="#book" onClick={(e)=>{e.preventDefault();scrollToId('book');}}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#7a0c2e] px-5 py-2.5 text-sm font-semibold shadow/50 shadow-black/10 hover:shadow-md transition">
              <Calendar size={18} /> Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-24 md:pt-10 md:pb-28 lg:pb-36">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight">
                Dental Care and Aesthetic Medicine, crafted with precision and warmth
              </h1>
              <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
                We bring together advanced clinical expertise and a calm, elegant atmosphere.
                Every detail is designed to inspire trust and well‑being.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#book"
                  onClick={(e)=>{e.preventDefault();scrollToId('book');}}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#7a0c2e] px-6 py-3 font-semibold shadow/50 shadow-black/10 hover:shadow-md transition"
                >
                  <Calendar size={18} /> Book a Consultation
                </a>
                <a
                  href="#services"
                  onClick={(e)=>{e.preventDefault();scrollToId('services');}}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition"
                >
                  Explore Services <ArrowRight size={18} />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-2"><Phone size={16}/> +1 (555) 014-2210</div>
                <div className="h-1 w-1 rounded-full bg-white/40" />
                Open Mon–Sat · 8:00–19:00
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1588771930296-88c2cb03f386?q=80&w=1600&auto=format&fit=crop"
                  alt="Minimal, elegant clinic interior"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
