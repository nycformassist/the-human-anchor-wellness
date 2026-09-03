import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif' 
});

export const metadata: Metadata = {
  title: 'The Human Anchor™ | Stress Resilience & Healthy Aging',
  description: 'Practical wellness programming integrating Chair & Standing Qigong, Meditation, Mindfulness, Breathwork, and Stress Resilience Education created by Valentine Saint Martin.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#FDFBF7] text-slate-800`}>
        {children}
      </body>
    </html>
  );
}