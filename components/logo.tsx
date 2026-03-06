'use client';

import { UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

export function Logo({ className = "", textClassName = "" }: { className?: string, textClassName?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 bg-gold rounded-lg transform group-hover:rotate-6 transition-transform duration-300">
        <UtensilsCrossed className="text-navy w-6 h-6" />
      </div>
      <span className={`font-serif text-2xl font-bold text-gold tracking-wide ${textClassName}`}>
        LC<span className="text-white font-normal"> Consultoria</span>
      </span>
    </Link>
  );
}
