"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Key, Lock, Music } from "lucide-react";

export default function DemoCartaAniversario() {
  const [password, setPassword] = useState("");
  const [desbloqueado, setDesbloqueado] = useState(false);
  const [error, setError] = useState(false);
  const [reproduciendo, setReproduciendo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Cualquier clave de 3 letras o demo sirve para la prueba
    if (password.trim().length >= 2) {
      setDesbloqueado(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#110B1B] text-[#FFF3EA] selection:bg-pink-500 selection:text-white">
      {/* Botón Volver */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#tarjetas"
          className="inline-flex items-center gap-2 rounded-full border border-purple-800/80 bg-black/60 px-4 py-2 text-sm font-medium text-purple-200 shadow-md backdrop-blur transition hover:bg-purple-950 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>
      </div>

      {!desbloqueado ? (
        /* Escena 1: Candado / Acertijo de amor */
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
          <div className="relative mb-6 flex size-20 items-center justify-center rounded-3xl border border-pink-500/30 bg-gradient-to-br from-purple-900/60 to-pink-900/40 shadow-2xl backdrop-blur">
            <Lock className="size-9 text-pink-400" />
          </div>

          <span className="rounded-full bg-pink-500/10 border border-pink-500/20 px-3.5 py-1 text-xs font-semibold tracking-wider text-pink-400 uppercase">
            Plantilla Carta Interactiva Con Clave Secreta
          </span>

          <h1 className="mt-4 max-w-md font-serif text-3xl font-semibold sm:text-4xl text-white">
            Esto es solo para vos.
            <br />
            <span className="italic text-pink-300">Necesito que me ayudes a abrirlo.</span>
          </h1>

          <p className="mt-3 max-w-sm text-sm text-purple-200/80">
            Pista: escribí cualquier palabra o fecha especial de ejemplo (ej: <strong>AMOR</strong>) para desbloquear la carta.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value.toUpperCase())}
                placeholder="CLAVE"
                className="w-44 border-b-2 border-pink-400/60 bg-transparent py-2 text-center font-sans text-xl tracking-[0.3em] uppercase text-white outline-none transition focus:border-pink-400"
              />
              <Key className="absolute right-0 top-3 size-4 text-purple-400" />
            </div>

            {error && (
              <p className="text-xs text-rose-400">Ingresá al menos 2 letras para probar la demo</p>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-pink-400/80 bg-pink-500/20 px-6 py-2.5 text-sm font-medium text-pink-200 transition hover:bg-pink-500 hover:text-white"
            >
              Abrir carta
            </button>
          </form>
        </div>
      ) : (
        /* Escena 2: Carta tipo máquina de escribir */
        <div className="mx-auto max-w-2xl px-6 py-24 animate-fadeIn">
          {/* Reproductor de música simbólico */}
          <div className="mb-10 flex items-center justify-between rounded-2xl border border-purple-800/40 bg-purple-950/30 p-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">
                <Music className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-pink-200">Canción especial de fondo</p>
                <p className="text-xs text-purple-300/70">Música romántica personalizada para acompañar la lectura</p>
              </div>
            </div>
            <button
              onClick={() => setReproduciendo(!reproduciendo)}
              className="rounded-full bg-pink-600 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-pink-700"
            >
              {reproduciendo ? "Pausar" : "Simular Play"}
            </button>
          </div>

          <article className="space-y-6 font-serif leading-relaxed text-purple-100">
            <h2 className="text-3xl font-semibold italic text-pink-300 sm:text-4xl">
              Para mi amor, [Nombre de tu Novia/o]
            </h2>

            <p className="text-lg text-purple-200/90">
              Hoy cumplimos un mes más juntos, compartiendo risas, aprendizajes y momentos que guardo con todo el cariño en mi mente.
            </p>

            <p className="text-lg text-purple-200/90">
              Sé que cada etapa tiene sus desafíos y días complicados, pero tener tu compañía hace que todo sea mucho más fácil. Compartir la vida al lado de alguien que suma tanta luz y alegría es un regalo inmenso.
            </p>

            <p className="text-lg text-purple-200/90">
              Gracias por tu paciencia, por tu cariño sincero, por tus abrazos en los momentos necesarios y por ser esa persona especial en la que siempre puedo confiar y ser yo mismo.
            </p>

            <p className="text-xl font-medium text-pink-400 italic">
              Con todo mi amor hoy y siempre,
              <br />
              <span className="font-bold text-white">[Tu Nombre] ❤️</span>
            </p>
          </article>

          <div className="mt-16 flex items-center justify-center gap-2 text-xs text-purple-400">
            <Heart className="size-4 fill-pink-500 text-pink-500" />
            <span>Plantilla interactiva adaptable a cualquier aniversario, 14 de febrero o declaración</span>
          </div>
        </div>
      )}
    </div>
  );
}
