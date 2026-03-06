'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { GastroMetrics } from '@/components/gastrometrics';
import { Methodology } from '@/components/methodology';
import { Reviews } from '@/components/reviews';
import { Plans } from '@/components/plans';
import { LeadMagnet } from '@/components/lead-magnet';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GastroMetrics />
      <Methodology />
      <Reviews />
      <Plans />
      <LeadMagnet />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-11 h-11 bg-navy text-gold rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </main>
  );
}
