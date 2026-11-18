import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://portafolio-stl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "STL — Soluciones Tecnológicas Lautaro | Desarrollo Web & IT",
  description:
    "Soluciones Tecnológicas Lautaro (STL). Páginas web de ultra alto rendimiento, ciberseguridad y tecnología para tu negocio. Pago único, hosting y SSL incluidos.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/logo-stl.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "STL — Soluciones Tecnológicas Lautaro",
    title: "STL — Soluciones Tecnológicas Lautaro | Desarrollo Web & IT",
    description:
      "Páginas web de ultra alto rendimiento, ciberseguridad y tecnología para tu negocio. Carga instantánea, hosting y SSL incluidos. Pago único.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "STL — Soluciones Tecnológicas Lautaro",
      },
      {
        url: "/logo-stl.png",
        width: 512,
        height: 512,
        alt: "Logo STL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STL — Soluciones Tecnológicas Lautaro | Desarrollo Web & IT",
    description:
      "Páginas web de ultra alto rendimiento, ciberseguridad y tecnología a medida para tu negocio.",
    images: ["/og-image.png"],
  },
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
