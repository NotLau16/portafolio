"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Gift, Heart, Music, RefreshCw, Sparkles, Star, Volume2, VolumeX } from "lucide-react";

export default function DemoNavidad() {
  const [regaloAbierto, setRegaloAbierto] = useState(false);
  const [lucesEncendidas, setLucesEncendidas] = useState(true);
  const [agitado, setAgitado] = useState(false);
  const [musica, setMusica] = useState(false);

  const agitarNieve = () => {
    setAgitado(true);
    setTimeout(() => setAgitado(false), 2000);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0B1528] via-[#10233D] to-[#080D1A] text-white selection:bg-red-500 selection:text-white">
      {/* Botón Volver */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#tarjetas"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold text-zinc-200 shadow-md backdrop-blur transition hover:bg-white/20 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>
      </div>

      {/* Control de audio / ambientación */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={() => setMusica(!musica)}
          className="flex size-10 items-center justify-center rounded-full border border-amber-400/30 bg-black/50 text-amber-300 backdrop-blur transition hover:bg-amber-950"
          title="Música navideña"
        >
          {musica ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </button>
      </div>

      {/* Copos de Nieve cayendo continuos */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/80 blur-[0.5px]"
            style={{
              top: "-20px",
              left: `${(i * 3.1) % 100}%`,
              width: `${(i % 5) + 3}px`,
              height: `${(i % 5) + 3}px`,
              opacity: (i % 6) * 0.15 + 0.3,
              animation: `snowFall ${6 + (i % 7)}s linear infinite`,
              animationDelay: `${(i * 0.4) % 6}s`,
            }}
          />
        ))}
      </div>

      {/* CSS embebido para la caída de nieve */}
      <style jsx>{`
        @keyframes snowFall {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(50vh) translateX(15px);
          }
          100% {
            transform: translateY(105vh) translateX(-15px);
          }
        }
      `}</style>

      {/* Contenido principal */}
      <div className="relative z-20 mx-auto max-w-3xl px-6 pt-24 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/40 px-4 py-1 text-xs font-bold text-red-300">
          <Sparkles className="size-3.5" />
          TARJETA INTERACTIVA DE NAVIDAD & AÑO NUEVO
        </div>

        <h1 className="mt-4 font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md">
          ¡Feliz Navidad y Próspero Año Nuevo!
        </h1>
        <p className="mt-3 text-base sm:text-lg text-emerald-200/90 font-serif">
          Un cálido abrazo digital para compartir con quienes más querés en estas fiestas.
        </p>

        {/* Árbol de Navidad con Luces Interactivas */}
        <div className="mt-12 rounded-3xl border border-emerald-800/60 bg-gradient-to-b from-[#0E2A1E]/80 to-[#071710]/90 p-8 sm:p-12 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between pb-4 border-b border-emerald-900/60 text-xs">
            <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
              <Star className="size-4 text-amber-400 fill-amber-400" />
              Árbol Mágico de Navidad
            </span>
            <button
              onClick={() => setLucesEncendidas(!lucesEncendidas)}
              className="rounded-full bg-emerald-950 border border-emerald-700/60 px-3 py-1 text-emerald-200 hover:text-white"
            >
              {lucesEncendidas ? "Apagar luces" : "Encender luces"}
            </button>
          </div>

          {/* Gráfico vectorial del Árbol de Navidad */}
          <div className="relative mx-auto mt-6 flex flex-col items-center select-none">
            {/* Estrella brillante */}
            <div className="flex items-center justify-center text-amber-300 animate-pulse drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]">
              <Star className="size-10 fill-amber-300" />
            </div>

            {/* Niveles del árbol */}
            <div className="relative">
              {/* Nivel 1 */}
              <div className="mx-auto h-0 w-0 border-x-[50px] border-b-[60px] border-x-transparent border-b-emerald-600 drop-shadow-md" />
              {/* Nivel 2 */}
              <div className="mx-auto -mt-4 h-0 w-0 border-x-[75px] border-b-[80px] border-x-transparent border-b-emerald-700 drop-shadow-md" />
              {/* Nivel 3 */}
              <div className="mx-auto -mt-6 h-0 w-0 border-x-[105px] border-b-[100px] border-x-transparent border-b-emerald-800 drop-shadow-md" />
              {/* Tronco */}
              <div className="mx-auto h-12 w-10 bg-amber-900 rounded-b shadow-inner" />

              {/* Guirnaldas y Luces titilantes */}
              {lucesEncendidas && (
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { top: "25%", left: "45%", color: "bg-red-400" },
                    { top: "35%", left: "38%", color: "bg-amber-300" },
                    { top: "40%", left: "56%", color: "bg-blue-400" },
                    { top: "55%", left: "30%", color: "bg-amber-300" },
                    { top: "52%", left: "68%", color: "bg-red-400" },
                    { top: "68%", left: "22%", color: "bg-blue-400" },
                    { top: "72%", left: "48%", color: "bg-yellow-300" },
                    { top: "70%", left: "76%", color: "bg-red-400" },
                  ].map((light, idx) => (
                    <div
                      key={idx}
                      style={{ top: light.top, left: light.left }}
                      className={`absolute size-3 rounded-full ${light.color} animate-ping drop-shadow-[0_0_8px_white]`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bola de Nieve Mágica (Snow Globe) */}
        <div className="mt-14">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Bola de Nieve Mágica
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400">
            Tocá la esfera para agitar la nieve y activar el torbellino navideño
          </p>

          <div
            onClick={agitarNieve}
            className={`group relative mx-auto mt-6 flex size-52 sm:size-60 cursor-pointer flex-col items-center justify-center rounded-full border-4 border-white/30 bg-gradient-to-b from-sky-950/60 via-blue-900/40 to-sky-950/80 shadow-[0_0_35px_rgba(56,189,248,0.25)] backdrop-blur transition-transform ${
              agitado ? "rotate-6 scale-105" : "hover:scale-105"
            }`}
          >
            {/* Muñeco de nieve adentro */}
            <div className="flex flex-col items-center">
              <div className="size-8 rounded-full bg-white shadow-inner flex items-center justify-center text-[10px]">
                ⛄
              </div>
              <div className="size-12 rounded-full bg-white/95 shadow-md -mt-1" />
              <div className="size-16 rounded-full bg-white/90 shadow-md -mt-2" />
            </div>

            {/* Suelo nevado */}
            <div className="absolute bottom-2 h-7 w-40 rounded-full bg-white/70 blur-[1px]" />

            {/* Torbellino de nieve al agitar */}
            {agitado && (
              <div className="absolute inset-0 rounded-full border-2 border-white/60 animate-spin" />
            )}
          </div>
          <p className="mt-3 text-xs text-sky-300">
            {agitado ? "❄️ ¡Torbellino nevado en marcha! ❄️" : "Tocá para agitar"}
          </p>
        </div>

        {/* Caja de Regalo Navideña Sorpresa */}
        <div className="mt-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">Tu Mensaje de Nochebuena</h2>
          <p className="mt-1 text-sm text-zinc-400">Tocá el regalo para desatar el moño y leer la carta</p>

          {!regaloAbierto ? (
            <button
              onClick={() => setRegaloAbierto(true)}
              className="group relative mt-6 inline-flex flex-col items-center justify-center rounded-3xl border-2 border-red-500/50 bg-gradient-to-br from-red-950/80 via-red-900/60 to-red-950/90 p-8 shadow-2xl transition-all hover:scale-105 hover:shadow-red-600/30"
            >
              <div className="flex size-20 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg transition group-hover:rotate-6">
                <Gift className="size-10" />
              </div>
              <span className="mt-4 font-serif text-lg font-bold text-white">
                Abrir Regalo Navideño
              </span>
              <span className="text-xs text-red-300 font-medium">Lazo rojo con destellos dorados</span>
            </button>
          ) : (
            <div className="mx-auto mt-6 max-w-lg rounded-3xl border border-amber-400/50 bg-[#FFFDF8] p-8 text-left text-zinc-900 shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between border-b border-amber-200 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600">Carta de Navidad</p>
                  <h3 className="font-serif text-2xl font-bold text-zinc-900">
                    Para: [Familia / Amigo / Pareja]
                  </h3>
                </div>
                <div className="size-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                  <Heart className="size-5 fill-current" />
                </div>
              </div>

              <div className="mt-5 space-y-3 font-serif text-base sm:text-lg leading-relaxed text-zinc-700">
                <p>
                  En estas fiestas quería enviarte este detalle especial para agradecerte por tu compañía, tu apoyo y cada momento compartido en este año.
                </p>
                <p>
                  Que esta Nochebuena traiga paz, salud y amor a tu hogar, y que el año que comienza llegue cargado de nuevas oportunidades, sueños cumplidos y motivos para festejar.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200 flex items-center justify-between">
                <span className="text-xs text-zinc-500">¡Muchas Felicidades! 🎄</span>
                <span className="font-serif text-base font-bold text-red-600">De: [Tu Nombre] ❤️</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
