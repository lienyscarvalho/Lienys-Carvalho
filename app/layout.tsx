import type {Metadata} from 'next';
import {Playfair_Display, DM_Sans} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LC Consultoria & Crítica Gastronômica',
  description: 'Transforme seu restaurante em um negócio lucrativo com consultoria especializada.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23C8973A%22/><path d=%22M30 70 L45 30 L55 30 L70 70 M40 55 L60 55%22 stroke=%22%231A237E%22 stroke-width=%228%22 fill=%22none%22/><path d=%22M45 45 L55 45%22 stroke=%22%231A237E%22 stroke-width=%224%22/></svg>" />
      </head>
      <body className="font-sans antialiased bg-[#FAF8F4] text-[#1C1C1C]">{children}</body>
    </html>
  );
}
