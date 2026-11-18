import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "STL — Soluciones Tecnológicas Lautaro | Desarrollo Web & IT",
  description:
    "Soluciones Tecnológicas Lautaro (STL). Páginas web de ultra alto rendimiento, ciberseguridad y tecnología para tu negocio. Cotizá tu proyecto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${font.className} bg-white text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
