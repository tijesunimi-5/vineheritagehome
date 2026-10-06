import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vine Heritage Home (VHH) — More Than a Home. A Place to Grow.",
  description: "Official institutional website prototype for Vine Heritage Home (VHH), Nigeria. Creating safe spaces, nurturing potential, and building brighter futures for vulnerable children.",
  keywords: ["Vine Heritage Home", "VHH Nigeria", "Child Protection Nigeria", "Humanitarian Organization Abuja", "Childcare Nigeria", "Vulnerable Children Protection"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-vhh-cream text-vhh-charcoal antialiased selection:bg-vhh-green-800 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
