"use client";

import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Globe2,
  Layers,
  Lock,
  MessageSquareShare,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const FEATURES = [
  {
    icon: Layers,
    title: "Hasta 4 secciones estratégicas",
    description:
      "Estructura pensada para convencer y convertir: qué hacés, por qué elegirte, tus trabajos anteriores y tus canales de contacto directo.",
    badge: "Estructura clara",
  },
  {
    icon: Smartphone,
    title: "Diseño adaptado a celulares y tablets",
    description:
      "Más del 85% de tus clientes potenciales visitan tu página desde su teléfono móvil. Tu sitio se verá impecable y rápido en cualquier pantalla.",
    badge: "100% Responsivo",
  },
  {
    icon: MessageSquareShare,
    title: "Contacto y redes sociales integradas",
    description:
      "Botones directos de WhatsApp, llamada telefónica, ubicación en Google Maps y accesos a tus redes para que el cliente te hable con un solo toque.",
    badge: "Contacto directo",
  },
  {
    icon: Zap,
    title: "Velocidad ultra optimizada",
    description:
      "Una landing lenta pierde clientes antes de que lean el título, sobre todo si vienen de un anuncio en Instagram o Google. Carga en milisegundos.",
    badge: "Carga instantánea",
  },
  {
    icon: Search,
    title: "SEO básico y presencia en Google",
    description:
      "Configuración técnica de títulos, descripciones y etiquetas para que los motores de búsqueda de Google entiendan de qué trata tu negocio.",
    badge: "Posicionamiento",
  },
  {
    icon: Lock,
    title: "Hosting y certificado SSL incluidos",
    description:
      "Tu sitio web publicado en servidores de última generación, con el candado de seguridad (HTTPS) y alta disponibilidad sin costos sorpresa.",
    badge: "Seguridad & Nube",
  },
  {
    icon: BadgeDollarSign,
    title: "Pago único. Sin cuota mensual",
    description:
      "Pagás una sola vez por el desarrollo de tu página web. Es tuya, sin suscripciones obligatorias ni alquileres mensuales para que siga online.",
    badge: "Cero mensualidades",
    highlight: true,
  },
];

export default function LandingFeatures() {
  const quoteUrl =
    "https://wa.me/5493875094662?text=Hola%20Lautaro%2C%20quiero%20cotizar%20una%20landing%20page%20para%20mi%20negocio";

  return (
    <section id="que-incluye" className="scroll-mt-16 bg-white py-24 sm:py-32 border-b border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
              <Sparkles className="size-3.5 text-blue-600" />
              TRANSPARENCIA TOTAL • TODO INCLUIDO
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              ¿Qué incluye tu Landing Page?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Esto es exactamente lo que te entrego cuando creamos tu página web: una herramienta lista para
              vender, rápida y sin letra chica.
            </p>
          </ScrollReveal>
        </div>

        {/* Grilla de Características */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            const isHighlight = feature.highlight;

            return (
              <ScrollReveal key={feature.title} delay={idx * 80}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                    isHighlight
                      ? "border-blue-600/40 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 shadow-md hover:border-blue-600 hover:shadow-xl lg:col-span-3 lg:flex-row lg:items-center"
                      : "border-zinc-200 bg-white hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
                  }`}
                >
                  <div className={isHighlight ? "lg:max-w-3xl" : ""}>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex size-12 items-center justify-center rounded-2xl border transition duration-300 ${
                          isHighlight
                            ? "border-blue-200 bg-blue-600 text-white shadow-md shadow-blue-600/20"
                            : "border-zinc-100 bg-zinc-50 text-zinc-900 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                        }`}
                      >
                        <Icon className="size-6" strokeWidth={1.8} />
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          isHighlight
                            ? "bg-blue-100 text-blue-800 border border-blue-200"
                            : "bg-zinc-50 border border-zinc-200 text-zinc-600"
                        }`}
                      >
                        {feature.badge}
                      </span>
                    </div>

                    <h3
                      className={`mt-6 font-bold tracking-tight text-zinc-900 ${
                        isHighlight ? "text-2xl sm:text-3xl" : "text-xl"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-zinc-600 ${
                        isHighlight ? "text-base sm:text-lg" : "text-sm"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {isHighlight && (
                    <div className="mt-8 lg:mt-0 lg:ml-8 flex shrink-0 items-center">
                      <a
                        href={quoteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 w-full sm:w-auto"
                      >
                        <span>Pedir presupuesto</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
