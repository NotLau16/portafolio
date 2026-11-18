"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gift,
  Globe,
  Heart,
  Laptop,
  Layers,
  PackageSearch,
  Radio,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./scroll-reveal";

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  text: string;
  badge: string;
  accentColor: string;
  details: string[];
  animationType: "web" | "stock" | "security" | "nfc" | "cards";
}

const servicesData: ServiceItem[] = [
  {
    id: "web",
    icon: Globe,
    title: "Desarrollo Web de Alto Rendimiento",
    text: "Landing pages y aplicaciones desarrolladas con Next.js y React para tiempos de carga en milisegundos y máximo SEO.",
    badge: "Ultra Velocidad & SEO",
    accentColor: "blue",
    details: [
      "Puntuación 100/100 en Google Lighthouse",
      "Optimización para móviles y computadoras",
      "Diseño moderno enfocado en ventas y contactos",
    ],
    animationType: "web",
  },
  {
    id: "stock",
    icon: PackageSearch,
    title: "Catálogos de Productos con Gestión de Stock",
    text: "Páginas de catálogo con inventario en tiempo real. Cuenta ventas automáticas, avisa cuándo reponer y descuenta stock solo.",
    badge: "Automatización & Ventas",
    accentColor: "emerald",
    details: [
      "Catálogo interactivo conectado a WhatsApp",
      "Actualización de stock automática al vender",
      "Alertas automáticas de reposición de mercadería",
    ],
    animationType: "stock",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Soluciones IT y Ciberseguridad",
    text: "Auditoría, configuración y blindaje de redes Wi-Fi y computadoras para oficinas y locales comerciales sin caídas ni vulnerabilidades.",
    badge: "Seguridad & Redes",
    accentColor: "indigo",
    details: [
      "Blindaje contra accesos no autorizados",
      "Redes Wi-Fi comerciales estables y seguras",
      "Mantenimiento preventivo de equipos y backups",
    ],
    animationType: "security",
  },
  {
    id: "nfc",
    icon: Smartphone,
    title: "Automatización y Experiencia Física (NFC)",
    text: "Modernizo la experiencia de tus clientes con tecnología NFC: menú digital, clave Wi-Fi o redes sociales con solo apoyar el celular.",
    badge: "Un Toque & Sin Apps",
    accentColor: "violet",
    details: [
      "Funciona en cualquier celular moderno sin instalar apps",
      "Ideal para cartas de bares, comercios y hoteles",
      "Reseñas en Google Maps en un segundo",
    ],
    animationType: "nfc",
  },
  {
    id: "cards",
    icon: Gift,
    title: "Tarjetas & Experiencias Web Interactivas",
    text: "Regalos y páginas interactivas a medida para cumpleaños, 14 de febrero, aniversarios o cartas sorpresa con música y animaciones.",
    badge: "Nicho Exclusivo & Emoción",
    accentColor: "rose",
    details: [
      "Candados con clave secreta y música personalizada",
      "Sobres 3D, fotos polaroid y cupones canjeables",
      "Diseños únicos que no se marchitan ni se pierden",
    ],
    animationType: "cards",
  },
];

/* Simulación visual animada (tipo mini video/GIF interactivo) para cada reverso */
function ServiceAnimation({ type }: { type: ServiceItem["animationType"] }) {
  if (type === "web") {
    return (
      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-zinc-950 p-3 font-mono text-[11px] text-zinc-300 shadow-inner border border-zinc-800">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 text-zinc-500">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-rose-500" />
            <span className="size-2 rounded-full bg-amber-500" />
            <span className="size-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] text-zinc-400">speed-test.dev</span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Velocidad de carga:</span>
            <span className="text-emerald-400 font-bold">0.18s ⚡</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Google Lighthouse:</span>
            <span className="text-emerald-400 font-bold">100 / 100</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-full bg-gradient-to-r from-blue-500 to-emerald-400 animate-pulse" />
          </div>
          <p className="text-[10px] text-blue-400">✓ Cero plantillas lentas de WordPress</p>
        </div>
      </div>
    );
  }

  if (type === "stock") {
    return (
      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-zinc-950 p-3 font-mono text-[11px] text-zinc-300 shadow-inner border border-zinc-800">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 text-zinc-400">
          <span className="text-emerald-400 font-semibold">● STOCK EN VIVO</span>
          <span className="text-[10px] text-zinc-500">Auto-Sync</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="flex items-center justify-between rounded bg-zinc-900/90 px-2 py-1">
            <span>Remera Oversize:</span>
            <span className="text-zinc-200">24 unid.</span>
          </div>
          <div className="flex items-center justify-between rounded bg-zinc-900/90 px-2 py-1">
            <span className="text-amber-300">Zapatillas Urban:</span>
            <span className="font-bold text-amber-400 animate-pulse">2 unid. ⚠️ Reponer</span>
          </div>
          <p className="text-[10px] text-emerald-400">✓ Venta registrada vía WhatsApp</p>
        </div>
      </div>
    );
  }

  if (type === "security") {
    return (
      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-zinc-950 p-3 font-mono text-[11px] text-zinc-300 shadow-inner border border-zinc-800">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 text-zinc-400">
          <span className="text-indigo-400 font-semibold">● FIREWALL ACTIVO</span>
          <span className="text-[10px] text-emerald-400">100% Blindado</span>
        </div>
        <div className="mt-2.5 flex items-center justify-center gap-3">
          <div className="relative flex size-12 items-center justify-center rounded-full bg-indigo-950/70 border border-indigo-500/50">
            <ShieldCheck className="size-6 text-indigo-400" />
            <div className="absolute inset-0 rounded-full border border-indigo-400/30 animate-ping" />
          </div>
          <div className="space-y-1 text-[10px]">
            <p className="text-emerald-400">✓ Red Wi-Fi aislada</p>
            <p className="text-zinc-400">✓ 0 puertos expuestos</p>
            <p className="text-zinc-400">✓ Backups programados</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "nfc") {
    return (
      <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-zinc-950 p-3 font-mono text-[11px] text-zinc-300 shadow-inner border border-zinc-800">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 text-zinc-400">
          <span className="text-violet-400 font-semibold">● CONEXIÓN NFC</span>
          <span className="text-[10px] text-zinc-500">Un Toque</span>
        </div>
        <div className="mt-2 flex items-center justify-around">
          <div className="flex flex-col items-center">
            <Radio className="size-6 text-violet-400 animate-pulse" />
            <span className="text-[9px] text-zinc-400">Tarjeta NFC</span>
          </div>
          <ArrowRight className="size-4 text-violet-400 animate-bounce" />
          <div className="flex flex-col items-center">
            <Smartphone className="size-6 text-emerald-400" />
            <span className="text-[9px] text-zinc-400">Abre tu Menú</span>
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] text-violet-300">Sin descargar ninguna aplicación</p>
      </div>
    );
  }

  // Cards
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-zinc-950 p-3 font-mono text-[11px] text-zinc-300 shadow-inner border border-zinc-800">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 text-zinc-400">
        <span className="text-rose-400 font-semibold">● EXPERIENCIA WEB</span>
        <span className="text-[10px] text-amber-400">Sorpresa 3D</span>
      </div>
      <div className="mt-2 flex items-center justify-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-rose-950/70 text-rose-400 border border-rose-500/40 animate-pulse">
          <Heart className="size-5 fill-current" />
        </div>
        <div className="text-[10px] space-y-1">
          <p className="text-pink-300">💌 Sobre 3D + Dedicatoria</p>
          <p className="text-amber-300">🎵 Canción personalizada</p>
          <p className="text-emerald-300">🎉 Confetti interactivo</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesFlip() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((service, i) => {
        const isFlipped = !!flippedCards[service.id];
        const Icon = service.icon;

        return (
          <ScrollReveal key={service.id} delay={i * 120}>
            {/* Contenedor Flip Card con perspectiva 3D */}
            <div
              className="relative h-[380px] w-full cursor-pointer select-none"
              style={{ perspective: "1000px" }}
              onClick={() => toggleFlip(service.id)}
            >
              <div
                className="relative h-full w-full rounded-3xl transition-transform duration-700 shadow-sm hover:shadow-xl"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* ──────── CARA FRONTAL ──────── */}
                <div
                  className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition hover:border-blue-500/40"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="size-6" strokeWidth={1.75} />
                      </div>
                      <span className="rounded-full bg-zinc-50 border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-zinc-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                      {service.text}
                    </p>
                  </div>

                  {/* Indicador para dar vuelta */}
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs font-semibold text-blue-600">
                    <span className="flex items-center gap-1.5">
                      <RotateCcw className="size-3.5 transition group-hover:rotate-180" />
                      Tocar para ver demo & detalles
                    </span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] text-blue-700 font-bold">
                      Girar
                    </span>
                  </div>
                </div>

                {/* ──────── CARA TRASERA (REVERSO INTERACTIVO) ──────── */}
                <div
                  className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-950 p-7 text-white"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        {service.title}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(service.id);
                        }}
                        className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white"
                      >
                        <RotateCcw className="size-3" />
                        Volver
                      </button>
                    </div>

                    {/* Mini Video / Animación interactiva en vivo */}
                    <div className="mt-3.5">
                      <ServiceAnimation type={service.animationType} />
                    </div>

                    {/* Lista de beneficios */}
                    <ul className="mt-3.5 space-y-1.5">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/80">
                    <span>STL Soluciones Tecnológicas</span>
                    <span className="text-blue-400 font-medium">Tocá para voltear</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
