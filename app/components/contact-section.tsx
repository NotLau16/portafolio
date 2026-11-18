"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, MessageCircle, Send, Sparkles } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const CONTACT_INFO = {
  phone: "+54 9 387 509-4662",
  phoneRaw: "5493875094662",
  whatsappUrl: "https://wa.me/5493875094662?text=Hola%20Lautaro%2C%20quiero%20cotizar%20un%20proyecto",
  email: "lautaronsdb@gmail.com",
  gmailWebUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=lautaronsdb@gmail.com&su=Consulta%20Proyecto%20-%20STL",
};

/* Ícono oficial de WhatsApp SVG */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Ícono oficial de Gmail SVG multicolor */
function GmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.5 6.75V18a2.25 2.25 0 01-2.25 2.25h-3V11.25L22.5 6.75z"
      />
      <path
        fill="#34A853"
        d="M1.5 18a2.25 2.25 0 002.25 2.25h3v-9L1.5 6.75V18z"
      />
      <path
        fill="#EA4335"
        d="M17.25 20.25h3a2.25 2.25 0 002.25-2.25V6.75l-5.25 3.938v9.562z"
        opacity="0"
      />
      <path
        fill="#EA4335"
        d="M17.25 4.5l-5.25 3.938L6.75 4.5A2.25 2.25 0 003.75 6.75l8.25 6.188 8.25-6.188A2.25 2.25 0 0017.25 4.5z"
      />
      <path
        fill="#FBBC05"
        d="M1.5 6.75c0-.987.64-1.85 1.564-2.133L6.75 7.5v3.75L1.5 6.75z"
      />
      <path
        fill="#C5221F"
        d="M22.5 6.75l-5.25 4.5V7.5l3.686-2.883A2.25 2.25 0 0122.5 6.75z"
      />
    </svg>
  );
}

export default function ContactSection() {
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);

  const copyToClipboard = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <footer id="contacto" className="relative scroll-mt-16 overflow-hidden bg-zinc-950 text-white">
      {/* Fondo con brillo ambiental sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.18),transparent)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              DISPONIBLE PARA NUEVOS PROYECTOS
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Hablemos de tu próximo proyecto.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              ¿Tenés una idea en mente, querés digitalizar tu negocio o cotizar una web a medida? 
              Escribime directamente por cualquiera de estos canales y te respondo en el día.
            </p>
          </ScrollReveal>
        </div>

        {/* Tarjetas Interactivas de Contacto (WhatsApp & Gmail) */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* ──────── TARJETA WHATSAPP ──────── */}
          <ScrollReveal delay={250}>
            <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:shadow-2xl hover:shadow-[#25D366]/10">
              {/* Resplandor decorativo verde */}
              <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[#25D366]/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 transition-transform duration-300 group-hover:scale-110">
                    <WhatsAppIcon className="size-8" />
                  </div>
                  <span className="rounded-full bg-[#25D366]/10 border border-[#25D366]/30 px-3 py-1 text-xs font-semibold text-[#25D366]">
                    Respuesta rápida
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    WhatsApp Directo
                  </p>
                  <p className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {CONTACT_INFO.phone}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Mensajes o llamadas directas. Ideal para consultas rápidas, dudas y presupuestos.
                  </p>
                </div>
              </div>

              {/* Botones de acción WhatsApp */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-[#20ba59] hover:shadow-lg hover:shadow-[#25D366]/25"
                >
                  <WhatsAppIcon className="size-5" />
                  Abrir WhatsApp
                  <ExternalLink className="size-4" />
                </a>

                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.phone, "phone")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-5 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
                  title="Copiar número"
                >
                  {copiedType === "phone" ? (
                    <>
                      <Check className="size-4 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* ──────── TARJETA GMAIL ──────── */}
          <ScrollReveal delay={350}>
            <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#EA4335]/50 hover:shadow-2xl hover:shadow-[#EA4335]/10">
              {/* Resplandor decorativo rojo */}
              <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[#EA4335]/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 border border-zinc-700/80 p-2.5 transition-transform duration-300 group-hover:scale-110">
                    <GmailIcon className="size-full" />
                  </div>
                  <span className="rounded-full bg-red-500/10 border border-red-500/30 px-3 py-1 text-xs font-semibold text-red-400">
                    Cotizaciones formales
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Correo Electrónico (Gmail)
                  </p>
                  <p className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-white break-all">
                    {CONTACT_INFO.email}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Envío de propuestas, pliegos, especificaciones técnicas y consultas comerciales.
                  </p>
                </div>
              </div>

              {/* Botones de acción Gmail */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT_INFO.gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#EA4335] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#d9382b] hover:shadow-lg hover:shadow-[#EA4335]/25"
                >
                  <Send className="size-4" />
                  Redactar en Gmail
                  <ExternalLink className="size-4" />
                </a>

                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.email, "email")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-5 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
                  title="Copiar correo"
                >
                  {copiedType === "email" ? (
                    <>
                      <Check className="size-4 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Barra inferior y derechos reservados */}
        <ScrollReveal delay={400}>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-zinc-800/80 pt-10 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white font-extrabold text-sm shadow-md">
                STL
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Soluciones Tecnológicas Lautaro</p>
                <p className="text-xs text-zinc-500">Desarrollo Web & Servicios IT • Argentina</p>
              </div>
            </div>

            <p className="text-xs text-zinc-500 text-center sm:text-right">
              © {new Date().getFullYear()} Lautaro Sánchez. Todos los derechos reservados.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
