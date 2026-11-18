"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CloudRain,
  Eye,
  Heart,
  Palette,
  RefreshCw,
  Sparkles,
  Volume2,
  VolumeX,
  Wind,
} from "lucide-react";

type ColorPaleta = "rosas" | "amarillas" | "violetas";
type NivelViento = "calma" | "brisa" | "rafaga";

export default function DemoFloresUltra() {
  const [etapaCrecimiento, setEtapaCrecimiento] = useState<number>(3); // 0: Semilla, 1: Brote, 2: Creciendo, 3: Totalmente florecida
  const [lluviaActiva, setLluviaActiva] = useState<boolean>(false);
  const [viento, setViento] = useState<NivelViento>("brisa");
  const [paleta, setPaleta] = useState<ColorPaleta>("rosas");
  const [sonido, setSonido] = useState<boolean>(false);
  const [dedicatoriaVisible, setDedicatoriaVisible] = useState<boolean>(true);
  const [petalosFlotantes, setPetalosFlotantes] = useState<{ id: number; x: number; y: number }[]>([]);

  // Secuencia de crecimiento automático al reiniciar
  const reiniciarCrecimiento = () => {
    setEtapaCrecimiento(0);
    setTimeout(() => setEtapaCrecimiento(1), 500);
    setTimeout(() => setEtapaCrecimiento(2), 1600);
    setTimeout(() => setEtapaCrecimiento(3), 2800);
  };

  const regarConLluvia = () => {
    setLluviaActiva(true);
    if (etapaCrecimiento < 3) {
      setEtapaCrecimiento(3);
    }
    setTimeout(() => setLluviaActiva(false), 5000);
  };

  const soltarPetalo = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nuevo = { id: Date.now(), x, y };
    setPetalosFlotantes((prev) => [...prev.slice(-15), nuevo]);
  };

  // Clases y colores según la paleta elegida
  const estilosPaleta = {
    rosas: {
      nombre: "Rosas Neón",
      florPrincipal: "#f43f5e",
      florSecundaria: "#ec4899",
      florBrillo: "#fb7185",
      centro: "#fef08a",
      resplandor: "rgba(244, 63, 94, 0.35)",
    },
    amarillas: {
      nombre: "Flores Amarillas",
      florPrincipal: "#eab308",
      florSecundaria: "#facc15",
      florBrillo: "#fde047",
      centro: "#78350f",
      resplandor: "rgba(234, 179, 8, 0.4)",
    },
    violetas: {
      nombre: "Orquídeas Mágicas",
      florPrincipal: "#a855f7",
      florSecundaria: "#c084fc",
      florBrillo: "#e9d5ff",
      centro: "#fef08a",
      resplandor: "rgba(168, 85, 247, 0.35)",
    },
  }[paleta];

  // Intensidad del viento para el sway CSS
  const animacionViento = {
    calma: "sway-calma 6s ease-in-out infinite",
    brisa: "sway-brisa 3.8s ease-in-out infinite",
    rafaga: "sway-rafaga 1.8s ease-in-out infinite",
  }[viento];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#06030c] via-[#0f091f] to-[#040208] text-white selection:bg-pink-500">
      {/* Botón Volver */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#tarjetas"
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-black/60 px-4 py-2 text-sm font-semibold text-purple-200 shadow-md backdrop-blur transition hover:bg-purple-900/60 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>
      </div>

      {/* Controles de sonido */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={() => setSonido(!sonido)}
          className="flex size-10 items-center justify-center rounded-full border border-pink-500/30 bg-black/50 text-pink-300 backdrop-blur transition hover:bg-pink-950"
          title="Música romántica"
        >
          {sonido ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </button>
      </div>

      {/* Lluvia animada cuando está activa */}
      {lluviaActiva && (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1.5px] bg-gradient-to-b from-transparent via-sky-300 to-sky-200"
              style={{
                top: "-40px",
                left: `${(i * 1.7) % 100}%`,
                height: `${25 + (i % 25)}px`,
                opacity: 0.5 + (i % 5) * 0.1,
                animation: `rainFall ${0.7 + (i % 5) * 0.1}s linear infinite`,
                animationDelay: `${(i * 0.05) % 1}s`,
              }}
            />
          ))}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 rounded-full bg-sky-950/80 border border-sky-400/50 px-4 py-1.5 text-xs font-semibold text-sky-200 backdrop-blur animate-pulse">
            🌧️ Nutriendo tus flores con lluvia mágica...
          </div>
        </div>
      )}

      {/* Luciérnagas titilantes de fondo */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-300 blur-[1px] animate-pulse"
            style={{
              top: `${(i * 14) % 95}%`,
              left: `${(i * 19) % 96}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              animationDuration: `${(i % 4) + 2.5}s`,
              opacity: 0.3 + (i % 5) * 0.15,
            }}
          />
        ))}
      </div>

      {/* Corazones/Destellos al hacer click */}
      {petalosFlotantes.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none absolute z-40 text-pink-400 text-sm animate-ping"
          style={{ left: p.x, top: p.y }}
        >
          ✨❤️
        </div>
      ))}

      {/* CSS Animaciones nativas para viento y lluvia */}
      <style jsx>{`
        @keyframes rainFall {
          0% {
            transform: translateY(0) rotate(10deg);
          }
          100% {
            transform: translateY(105vh) rotate(10deg);
          }
        }
        @keyframes sway-calma {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(2.5deg);
          }
        }
        @keyframes sway-brisa {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }
        @keyframes sway-rafaga {
          0%, 100% {
            transform: rotate(-7deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
      `}</style>

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 pt-20 pb-12">
        {/* Panel Didáctico e Interactivo de Controles */}
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-black/40 p-4 sm:p-5 backdrop-blur-md shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Control Lluvia */}
            <button
              onClick={regarConLluvia}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-semibold transition ${
                lluviaActiva
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                  : "bg-white/10 text-sky-300 hover:bg-white/20"
              }`}
            >
              <CloudRain className="size-3.5" />
              {lluviaActiva ? "Lloviendo..." : "Hacer llover"}
            </button>

            {/* Control Viento */}
            <div className="flex items-center gap-1 rounded-full bg-white/10 p-1 text-purple-300">
              <Wind className="size-3.5 ml-2" />
              {(["calma", "brisa", "rafaga"] as NivelViento[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setViento(v)}
                  className={`rounded-full px-2.5 py-0.5 capitalize transition ${
                    viento === v
                      ? "bg-purple-600 text-white font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Selector de Flores / Colores */}
            <div className="flex items-center gap-1">
              {(["rosas", "amarillas", "violetas"] as ColorPaleta[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setPaleta(c)}
                  className={`size-6 rounded-full border-2 transition ${
                    paleta === c ? "scale-110 border-white shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                  } ${
                    c === "rosas"
                      ? "bg-rose-500"
                      : c === "amarillas"
                      ? "bg-amber-400"
                      : "bg-purple-500"
                  }`}
                  title={c}
                />
              ))}
            </div>

            {/* Botón Reiniciar Crecimiento */}
            <button
              onClick={reiniciarCrecimiento}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition"
              title="Volver a germinar"
            >
              <RefreshCw className="size-3.5" />
              Plantar de nuevo
            </button>
          </div>
        </div>

        {/* Zona del Ramo con Crecimiento y Viento */}
        <div
          onClick={soltarPetalo}
          className="relative my-8 flex h-[380px] sm:h-[420px] w-full max-w-md items-end justify-center cursor-pointer select-none"
        >
          {/* Resplandor luminoso en el fondo */}
          <div
            className="absolute bottom-16 size-80 rounded-full blur-3xl transition-colors duration-700 pointer-events-none"
            style={{ backgroundColor: estilosPaleta.resplandor }}
          />

          {/* Estado 0: Semilla en la tierra */}
          {etapaCrecimiento === 0 && (
            <div className="mb-4 flex flex-col items-center animate-pulse">
              <div className="size-5 rounded-full bg-amber-700 shadow-inner" />
              <div className="h-2 w-24 rounded-full bg-amber-950 mt-1" />
              <p className="mt-4 text-xs font-serif text-zinc-400">
                🌱 Semilla plantada... haciendo brotar
              </p>
            </div>
          )}

          {/* Ramo creciendo y meciéndose con el viento */}
          {etapaCrecimiento > 0 && (
            <div
              className="relative flex flex-col items-center origin-bottom transition-all duration-1000"
              style={{
                animation: animacionViento,
                transformOrigin: "bottom center",
              }}
            >
              <svg
                viewBox="0 0 420 500"
                className="w-72 sm:w-96 h-auto drop-shadow-[0_0_30px_rgba(244,114,182,0.35)] transition-all duration-700"
              >
                {/* ──────── TALLOS QUE CRECEN DE ABAJO HACIA ARRIBA ──────── */}
                {/* Tallo Izquierdo */}
                <path
                  d="M 210 490 Q 185 360 160 210"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    strokeDasharray: 500,
                    strokeDashoffset: etapaCrecimiento === 1 ? 250 : 0,
                  }}
                />
                {/* Tallo Central Principal */}
                <path
                  d="M 210 490 Q 210 330 210 160"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    strokeDasharray: 500,
                    strokeDashoffset: etapaCrecimiento === 1 ? 200 : 0,
                  }}
                />
                {/* Tallo Derecho */}
                <path
                  d="M 210 490 Q 235 360 260 220"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    strokeDasharray: 500,
                    strokeDashoffset: etapaCrecimiento === 1 ? 250 : 0,
                  }}
                />

                {/* ──────── HOJAS LATERALES (Etapa 2 y 3) ──────── */}
                {etapaCrecimiento >= 2 && (
                  <g className="transition-all duration-700 animate-fadeIn">
                    <path d="M 185 390 Q 130 380 140 345 Q 175 355 185 390" fill="#15803d" />
                    <path d="M 230 370 Q 280 360 270 325 Q 240 335 230 370" fill="#15803d" />
                    <path d="M 175 300 Q 115 285 125 250 Q 160 265 175 300" fill="#16a34a" />
                    <path d="M 245 290 Q 300 275 290 240 Q 260 255 245 290" fill="#16a34a" />

                    {/* Gotas de rocío en las hojas si llueve */}
                    {lluviaActiva && (
                      <>
                        <circle cx="135" cy="348" r="3" fill="#38bdf8" className="animate-ping" />
                        <circle cx="275" cy="330" r="3" fill="#38bdf8" className="animate-ping" />
                      </>
                    )}
                  </g>
                )}

                {/* ──────── FLORES / CAPULLOS ──────── */}
                {/* Etapa 2: Capullos cerrados */}
                {etapaCrecimiento === 2 && (
                  <g className="animate-pulse">
                    <circle cx="160" cy="210" r="14" fill={estilosPaleta.florPrincipal} />
                    <circle cx="210" cy="160" r="18" fill={estilosPaleta.florPrincipal} />
                    <circle cx="260" cy="220" r="14" fill={estilosPaleta.florPrincipal} />
                  </g>
                )}

                {/* Etapa 3: Flores en pleno florecimiento */}
                {etapaCrecimiento === 3 && (
                  <g className="transition-all duration-700">
                    {/* 🌸 Flor Izquierda */}
                    <g transform="translate(160, 210)" className="hover:scale-110 transition cursor-pointer">
                      <ellipse cx="-16" cy="-22" rx="16" ry="34" fill={estilosPaleta.florSecundaria} transform="rotate(-25)" opacity="0.9" />
                      <ellipse cx="16" cy="-22" rx="16" ry="34" fill={estilosPaleta.florBrillo} transform="rotate(25)" opacity="0.9" />
                      <ellipse cx="0" cy="-26" rx="16" ry="36" fill={estilosPaleta.florPrincipal} />
                      <circle cx="0" cy="-26" r="8" fill={estilosPaleta.centro} />
                    </g>

                    {/* 🌹 Flor Central (Gran flor florecida) */}
                    <g transform="translate(210, 160)" className="hover:scale-110 transition cursor-pointer">
                      <circle cx="0" cy="-35" r="42" fill={estilosPaleta.florSecundaria} opacity="0.4" />
                      <ellipse cx="-24" cy="-35" rx="22" ry="42" fill={estilosPaleta.florPrincipal} transform="rotate(-28)" />
                      <ellipse cx="24" cy="-35" rx="22" ry="42" fill={estilosPaleta.florPrincipal} transform="rotate(28)" />
                      <ellipse cx="0" cy="-40" rx="22" ry="46" fill={estilosPaleta.florBrillo} />
                      <circle cx="0" cy="-40" r="11" fill={estilosPaleta.centro} />
                      <circle cx="0" cy="-40" r="5" fill="#ffffff" />
                    </g>

                    {/* 🌸 Flor Derecha */}
                    <g transform="translate(260, 220)" className="hover:scale-110 transition cursor-pointer">
                      <ellipse cx="-16" cy="-22" rx="16" ry="32" fill={estilosPaleta.florSecundaria} transform="rotate(-20)" opacity="0.9" />
                      <ellipse cx="16" cy="-22" rx="16" ry="32" fill={estilosPaleta.florBrillo} transform="rotate(20)" opacity="0.9" />
                      <ellipse cx="0" cy="-24" rx="15" ry="34" fill={estilosPaleta.florPrincipal} />
                      <circle cx="0" cy="-24" r="7" fill={estilosPaleta.centro} />
                    </g>

                    {/* Puntos de luz mágica en los pétalos */}
                    <circle cx="210" cy="120" r="3.5" fill="#ffffff" className="animate-pulse" />
                    <circle cx="155" cy="180" r="3" fill="#ffffff" className="animate-pulse" />
                    <circle cx="265" cy="190" r="3" fill="#ffffff" className="animate-pulse" />
                  </g>
                )}
              </svg>

              {/* Suelo / Base */}
              <div className="h-3 w-48 rounded-full bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-950 shadow-inner -mt-2" />
            </div>
          )}
        </div>

        {/* Dedicatoria Romántica Desplegable */}
        {dedicatoriaVisible ? (
          <div className="relative z-20 max-w-lg rounded-3xl border border-pink-500/30 bg-black/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl text-center animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="text-pink-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="size-3.5" />
                Flores que nunca se marchitan
              </span>
              <button
                onClick={() => setDedicatoriaVisible(false)}
                className="text-zinc-400 hover:text-white"
              >
                Ocultar texto
              </button>
            </div>

            <p className="mt-4 font-serif text-lg sm:text-2xl text-pink-100 italic leading-snug">
              “Quizás no pueda darte flores que duren para siempre en el mundo real, pero estas flores digitales fueron hechas especialmente para vos y van a florecer eternamente.”
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="font-serif text-base sm:text-lg font-bold text-white">
                [Nombre Novia/o]
              </span>
              <Heart className="size-5 fill-rose-500 text-rose-500 animate-bounce" />
              <span className="font-serif text-base sm:text-lg font-bold text-white">
                [Tu Nombre]
              </span>
            </div>

            <p className="mt-4 text-[11px] text-purple-300/60 font-sans">
              Tocá la pantalla para soltar destellos. Usá los controles para cambiar el viento o hacer llover.
            </p>
          </div>
        ) : (
          <button
            onClick={() => setDedicatoriaVisible(true)}
            className="flex items-center gap-2 rounded-full border border-pink-500/30 bg-black/60 px-4 py-2 text-xs font-semibold text-pink-300 backdrop-blur transition hover:bg-black/90"
          >
            <Eye className="size-3.5" />
            Ver dedicatoria
          </button>
        )}
      </div>
    </div>
  );
}
