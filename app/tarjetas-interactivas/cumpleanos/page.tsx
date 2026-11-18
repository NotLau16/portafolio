"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Gift, Heart, Sparkles, Smile, RefreshCw } from "lucide-react";

const DEMOS = {
  destinatario: "Mamá / Pareja / Persona Especial",
  remitente: "Tu Nombre",
  cartaTitulo: "Para alguien muy especial,",
  parrafos: [
    "Quería prepararte un detalle interactivo y único que puedas abrir en cualquier momento, desde tu celular o computadora.",
    "Gracias por estar siempre presente, por compartir momentos inolvidables y por el apoyo incondicional en cada paso del camino.",
    "Cada risa compartida, cada charla y cada pequeño detalle hacen que todo valga la pena. Esto es una pequeña muestra de todo el cariño que te tengo.",
  ],
  firma: "Con todo mi cariño, Tu Nombre",
  fotos: [
    { id: 1, epigrafe: "Momento Especial 1", reverso: "Un recuerdo inolvidable que siempre guardamos en el corazón." },
    { id: 2, epigrafe: "Momento Especial 2", reverso: "Risas y anécdotas compartidas que nunca se olvidan." },
    { id: 3, epigrafe: "Momento Especial 3", reverso: "Un viaje o una salida que quedó marcada para siempre." },
    { id: 4, epigrafe: "Momento Especial 4", reverso: "Cualquier día común se vuelve único a tu lado." },
  ],
  papelitos: [
    "Porque siempre tenés la palabra justa en el momento indicado.",
    "Porque con solo una sonrisa cambiás la energía del día.",
    "Por todos los mates, cafés o charlas compartidas.",
    "Por ser un pilar fundamental e incondicional.",
    "Porque compartir la vida con vos es una bendición.",
  ],
  cupones: [
    { id: 1, texto: "Vale por una salida a merendar o cenar juntos" },
    { id: 2, texto: "Vale por una tarde de películas y pochoclos" },
    { id: 3, texto: "Vale por un abrazo infinito sin límite de tiempo" },
    { id: 4, texto: "Vale por una ayuda tecnológica o favor a elección" },
  ],
};

export default function DemoCumpleanos() {
  const [sobreAbierto, setSobreAbierto] = useState(false);
  const [papelitoActual, setPapelitoActual] = useState<string | null>(null);
  const [cuponesCanjeados, setCuponesCanjeados] = useState<number[]>([]);
  const [flipFotos, setFlipFotos] = useState<Record<number, boolean>>({});
  const [abrazoRecibido, setAbrazoRecibido] = useState(false);

  const toggleFoto = (id: number) => {
    setFlipFotos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sacarPapelito = () => {
    const random = DEMOS.papelitos[Math.floor(Math.random() * DEMOS.papelitos.length)];
    setPapelitoActual(random);
  };

  const canjearCupon = (id: number) => {
    if (!cuponesCanjeados.includes(id)) {
      setCuponesCanjeados((prev) => [...prev, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2A26] selection:bg-rose-100 selection:text-rose-900">
      {/* Botón Volver */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#tarjetas"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur transition hover:bg-zinc-100 hover:text-zinc-900"
        >
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>
      </div>

      {/* Sobre Inicial Interactivo */}
      {!sobreAbierto ? (
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
            <Sparkles className="size-3.5" />
            DEMO PLANTILLA PERSONALIZABLE
          </div>
          <h1 className="max-w-md text-3xl font-serif font-bold text-zinc-900 sm:text-4xl">
            Tienen una sorpresa especial para vos
          </h1>
          <p className="mt-2 text-sm text-zinc-600">Tocá el sobre para abrir tu carta interactiva</p>

          <button
            onClick={() => setSobreAbierto(true)}
            className="group relative mt-10 flex h-48 w-72 sm:w-80 items-center justify-center rounded-2xl border-2 border-rose-300 bg-gradient-to-br from-[#FFF5EA] to-[#FDE8E9] shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-rose-500 text-white shadow-md transition group-hover:scale-110">
                <Heart className="size-7 fill-current" />
              </div>
              <span className="mt-4 font-serif text-lg font-semibold text-zinc-800">
                Para: {DEMOS.destinatario}
              </span>
              <span className="text-xs text-rose-600 font-medium">De: {DEMOS.remitente}</span>
            </div>
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl px-6 py-20 animate-fadeIn">
          {/* Encabezado */}
          <div className="rounded-3xl border border-rose-200/80 bg-white/80 p-8 sm:p-12 shadow-sm backdrop-blur">
            <h1 className="font-serif text-4xl font-bold text-rose-900 sm:text-5xl">
              {DEMOS.cartaTitulo}
            </h1>
            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-zinc-700 font-serif">
              {DEMOS.parrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-right font-serif text-xl italic font-semibold text-rose-700">
              {DEMOS.firma}
            </p>
          </div>

          {/* Galería Polaroid */}
          <div className="mt-16">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-zinc-900">Momentos Inolvidables</h2>
              <p className="mt-1 text-sm text-zinc-500">Tocá cada tarjeta polaroid para ver su reverso</p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DEMOS.fotos.map((f) => {
                const flipped = flipFotos[f.id];
                return (
                  <div
                    key={f.id}
                    onClick={() => toggleFoto(f.id)}
                    className="cursor-pointer rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-zinc-200/80"
                  >
                    {!flipped ? (
                      <div>
                        <div className="flex h-52 items-center justify-center rounded-xl bg-zinc-100 border-2 border-dashed border-zinc-300 text-zinc-400">
                          <div className="text-center p-4">
                            <span className="text-2xl font-bold tracking-widest text-zinc-400">FOTO</span>
                            <p className="mt-1 text-xs text-zinc-400">(Espacio reservado para tu foto personalizada)</p>
                          </div>
                        </div>
                        <p className="mt-3 text-center font-serif text-base font-semibold text-zinc-800">
                          {f.epigrafe}
                        </p>
                      </div>
                    ) : (
                      <div className="flex h-[244px] flex-col items-center justify-center p-4 text-center bg-rose-50/50 rounded-xl">
                        <Heart className="size-6 text-rose-500 fill-current mb-2" />
                        <p className="font-serif text-base italic text-zinc-700">{f.reverso}</p>
                        <span className="mt-4 text-[11px] text-zinc-400 font-sans">Tocá para volver a ver la foto</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tarrito de Razones */}
          <div className="mt-20 rounded-3xl border border-amber-200 bg-amber-50/60 p-8 sm:p-10 text-center">
            <Gift className="mx-auto size-10 text-amber-600" />
            <h2 className="mt-3 font-serif text-3xl font-bold text-zinc-900">Tarrito de Razones</h2>
            <p className="mt-1 text-sm text-zinc-600">
              Un tarro lleno de papelitos con motivos por los que sos una persona tan especial
            </p>

            <button
              onClick={sacarPapelito}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-amber-700"
            >
              <RefreshCw className="size-4" />
              Sacar un papelito sorpresa
            </button>

            {papelitoActual && (
              <div className="mt-6 rounded-2xl border border-amber-300 bg-white p-6 shadow-md animate-fadeIn">
                <p className="font-serif text-xl italic text-zinc-800">“{papelitoActual}”</p>
              </div>
            )}
          </div>

          {/* Cuponera */}
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-bold text-center text-zinc-900">Cuponera de Regalos</h2>
            <p className="mt-1 text-center text-sm text-zinc-500">
              Cupones simbólicos para canjear en la vida real
            </p>

            <div className="mt-8 space-y-4">
              {DEMOS.cupones.map((c) => {
                const canjeado = cuponesCanjeados.includes(c.id);
                return (
                  <button
                    key={c.id}
                    onClick={() => canjearCupon(c.id)}
                    disabled={canjeado}
                    className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition duration-200 ${
                      canjeado
                        ? "border-emerald-300 bg-emerald-50 opacity-80"
                        : "border-zinc-200 bg-white hover:border-rose-400 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Smile className={`size-6 ${canjeado ? "text-emerald-600" : "text-rose-500"}`} />
                      <span className={`font-serif text-lg font-medium ${canjeado ? "line-through text-zinc-500" : "text-zinc-800"}`}>
                        {c.texto}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        canjeado ? "bg-emerald-200 text-emerald-800" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {canjeado ? "¡Canjeado!" : "Canjear"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cierre / Botón de Abrazo */}
          <div className="mt-20 text-center">
            <button
              onClick={() => setAbrazoRecibido(true)}
              className="inline-flex items-center gap-3 rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-rose-700 hover:shadow-rose-600/30"
            >
              <Heart className="size-5 fill-current" />
              Recibir un abrazo virtual
            </button>

            {abrazoRecibido && (
              <div className="mt-6 rounded-2xl border border-rose-300 bg-rose-50 p-6 animate-fadeIn">
                <p className="font-serif text-2xl font-bold text-rose-900">
                  ¡Abrazo gigante enviado con mucho cariño! ❤️
                </p>
                <p className="mt-2 text-sm text-zinc-600">De parte de: {DEMOS.remitente}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
