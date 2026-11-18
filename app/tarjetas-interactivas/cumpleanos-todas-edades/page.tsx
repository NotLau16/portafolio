"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Cake, Gift, Heart, PartyPopper, RefreshCw, Sparkles, Volume2, VolumeX } from "lucide-react";

interface Globo {
  id: number;
  color: string;
  left: number;
  reventado: boolean;
  frase: string;
}

export default function DemoCumpleanosTodasEdades() {
  const [edad, setEdad] = useState<number>(25);
  const [velasEncendidas, setVelasEncendidas] = useState(true);
  const [deseoCumplido, setDeseoCumplido] = useState(false);
  const [regaloAbierto, setRegaloAbierto] = useState(false);
  const [musica, setMusica] = useState(false);
  const [globos, setGlobos] = useState<Globo[]>([
    { id: 1, color: "bg-rose-500", left: 8, reventado: false, frase: "¡Muchísima salud y alegría siempre! 🌟" },
    { id: 2, color: "bg-blue-500", left: 24, reventado: false, frase: "¡Que nunca te falten motivos para sonreír! 😄" },
    { id: 3, color: "bg-amber-500", left: 40, reventado: false, frase: "¡Por nuevos proyectos y aventuras! 🚀" },
    { id: 4, color: "bg-emerald-500", left: 58, reventado: false, frase: "¡Risas compartidas con la gente que amás! ❤️" },
    { id: 5, color: "bg-purple-500", left: 74, reventado: false, frase: "¡Que este nuevo año de vida sea inolvidable! 🥂" },
    { id: 6, color: "bg-pink-500", left: 88, reventado: false, frase: "¡Abrazos infinitos en tu día especial! 🎂" },
  ]);

  const soplarVelas = () => {
    if (!velasEncendidas) return;
    setVelasEncendidas(false);
    setDeseoCumplido(true);
  };

  const reventarGlobo = (id: number) => {
    setGlobos((prev) =>
      prev.map((g) => (g.id === id ? { ...g, reventado: true } : g))
    );
  };

  const reiniciarTodo = () => {
    setVelasEncendidas(true);
    setDeseoCumplido(false);
    setRegaloAbierto(false);
    setGlobos((prev) => prev.map((g) => ({ ...g, reventado: false })));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF5EC] to-[#FCEEE3] text-zinc-900 selection:bg-pink-100">
      {/* Botón Volver */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#tarjetas"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur transition hover:bg-zinc-100 hover:text-zinc-900"
        >
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>
      </div>

      {/* Botón de reinicio */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={reiniciarTodo}
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white/90 px-3.5 py-2 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur transition hover:bg-zinc-100"
          title="Reiniciar animaciones"
        >
          <RefreshCw className="size-3.5" />
          Reiniciar
        </button>
      </div>

      {/* Globos flotantes en la parte superior */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-44 z-20 overflow-hidden">
        {globos.map((globo) => (
          <div
            key={globo.id}
            style={{ left: `${globo.left}%` }}
            className={`pointer-events-auto absolute top-4 flex flex-col items-center transition-all duration-300 ${
              globo.reventado ? "scale-0 opacity-0" : "scale-100 opacity-100 animate-bounce"
            }`}
          >
            <button
              onClick={() => reventarGlobo(globo.id)}
              className={`relative size-12 sm:size-14 rounded-full ${globo.color} shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition flex items-center justify-center text-white text-xs font-bold`}
              title="¡Tocá para reventar!"
            >
              🎈
            </button>
            <div className="h-6 w-0.5 bg-zinc-400" />
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        {/* Encabezado festivo */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 border border-pink-200 px-3.5 py-1 text-xs font-bold text-pink-700">
            <PartyPopper className="size-3.5" />
            TARJETA DE CUMPLEAÑOS PARA TODAS LAS EDADES
          </div>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
            ¡Feliz Cumpleaños!
          </h1>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-serif">
            Un detalle interactivo diseñado para niños, jóvenes y adultos.
          </p>

          {/* Selector de edad interactivo */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-zinc-500 mr-2">Personalizar edad:</span>
            {[1, 5, 10, 15, 18, 25, 30, 40, 50, 60, 70, 80].map((num) => (
              <button
                key={num}
                onClick={() => setEdad(num)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                  edad === num
                    ? "bg-pink-600 text-white shadow-md scale-105"
                    : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {num} años
              </button>
            ))}
          </div>
        </div>

        {/* Torta Interactiva con Velas */}
        <div className="mt-14 rounded-3xl border border-pink-200/80 bg-white/90 p-8 sm:p-12 text-center shadow-lg backdrop-blur">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-800">
            ¡Llegaron los {edad} años! 🎉
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-zinc-500">
            {velasEncendidas
              ? "Tocá el botón o la torta para soplar las velas y pedir un deseo"
              : "¡Deseo pedido! Que se cumplan todos tus sueños"}
          </p>

          {/* Gráfico Torta con Velas */}
          <div
            onClick={soplarVelas}
            className="group relative mx-auto mt-8 flex flex-col items-center justify-center cursor-pointer select-none max-w-xs"
          >
            {/* Velas */}
            <div className="flex gap-4 sm:gap-6 mb-1">
              {[1, 2, 3].map((v) => (
                <div key={v} className="flex flex-col items-center">
                  {/* Llama o Humo */}
                  {velasEncendidas ? (
                    <div className="size-4 rounded-full bg-amber-400 blur-[1px] animate-ping" />
                  ) : (
                    <div className="text-xs text-zinc-400 animate-pulse">💨</div>
                  )}
                  {/* Cuerpo de la vela */}
                  <div className="h-10 w-2.5 rounded-t-sm bg-gradient-to-b from-pink-400 to-rose-500 shadow-sm" />
                </div>
              ))}
            </div>

            {/* Piso superior de la torta */}
            <div className="relative h-12 w-44 rounded-t-2xl bg-gradient-to-r from-pink-200 via-rose-100 to-pink-200 border-2 border-pink-300 flex items-center justify-center shadow-sm">
              <span className="text-xs font-bold text-pink-700 tracking-wider">★ {edad} ★</span>
            </div>

            {/* Piso base de la torta */}
            <div className="relative h-16 w-56 rounded-b-2xl bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 border-2 border-t-0 border-amber-300 flex items-center justify-center shadow-md">
              <span className="text-xs font-semibold text-amber-800">FELICIDADES</span>
            </div>

            {/* Plato de la torta */}
            <div className="h-3 w-64 rounded-full bg-zinc-200 border border-zinc-300 shadow-inner mt-1" />
          </div>

          <div className="mt-8 flex justify-center">
            {velasEncendidas ? (
              <button
                onClick={soplarVelas}
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-pink-700 hover:scale-105 active:scale-95"
              >
                <Cake className="size-4" />
                Soplar las velas
              </button>
            ) : (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm font-semibold animate-fadeIn">
                ✨ ¡Velas apagadas! ¡Que comience el mejor año de tu vida! ✨
              </div>
            )}
          </div>
        </div>

        {/* Mensajes de los globos reventados */}
        {globos.some((g) => g.reventado) && (
          <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-zinc-900 flex items-center gap-2">
              <Sparkles className="size-4 text-amber-500" />
              Deseos revelados de los globos:
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {globos
                .filter((g) => g.reventado)
                .map((g) => (
                  <div
                    key={g.id}
                    className="flex items-center gap-2 rounded-xl bg-zinc-50 border border-zinc-100 p-3 text-xs text-zinc-700 font-medium"
                  >
                    <span>🎈</span>
                    <span>{g.frase}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Caja de Regalo Sorpresa */}
        <div className="mt-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-zinc-900">Tu Regalo Especial</h2>
          <p className="mt-1 text-sm text-zinc-500">Tocá la caja para abrir tu dedicatoria</p>

          {!regaloAbierto ? (
            <button
              onClick={() => setRegaloAbierto(true)}
              className="group relative mt-6 inline-flex flex-col items-center justify-center rounded-3xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-pink-100 p-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex size-20 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-md transition group-hover:rotate-12">
                <Gift className="size-10" />
              </div>
              <span className="mt-4 font-serif text-lg font-bold text-zinc-800">
                Abrir sorpresa
              </span>
              <span className="text-xs text-rose-600 font-medium">Tocá para desatar el lazo</span>
            </button>
          ) : (
            <div className="mx-auto mt-6 max-w-lg rounded-3xl border border-rose-200 bg-white p-8 text-left shadow-xl animate-fadeIn">
              <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-600">Carta de Cumpleaños</p>
                  <h3 className="font-serif text-2xl font-bold text-zinc-900">Para: [Nombre Cumpleañero/a]</h3>
                </div>
                <div className="size-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Heart className="size-5 fill-current" />
                </div>
              </div>

              <div className="mt-5 space-y-3 font-serif text-base leading-relaxed text-zinc-700">
                <p>
                  ¡Felices {edad} años! Que este día esté lleno de abrazos, sonrisas y momentos lindos junto a las personas que más te quieren.
                </p>
                <p>
                  Gracias por tu alegría y por cada momento compartido. Que la vida te regale salud, éxito en todo lo que te propongas y mucha felicidad.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Hecho con mucho cariño</span>
                <span className="font-serif text-base font-bold text-rose-600">De: [Tu Nombre] ❤️</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
