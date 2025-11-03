import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import BookingContact from './components/BookingContact.jsx';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <About />
      <Services />
      <BookingContact />

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Claret Dental & Aesthetics. All rights reserved.</p>
          <div className="text-sm text-gray-600">
            Designed for comfort, precision, and well‑being.
          </div>
        </div>
      </footer>
    </div>
  );
}
