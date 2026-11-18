import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Gift,
  Globe,
  Heart,
  PackageSearch,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import ScrollReveal from "./components/scroll-reveal";
import ServicesFlip from "./components/services-flip";
import LandingFeatures from "./components/landing-features";
import ContactSection from "./components/contact-section";

/* ───────────── Datos (editá acá tus links y textos) ───────────── */

const LINKS = {
  quote: "https://wa.me/5493875094662?text=Hola%20Lautaro%2C%20quiero%20cotizar%20un%20proyecto",
  whatsapp: "https://wa.me/5493875094662",
  email: "lautaronsdb@gmail.com", 
};

const services: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Gift,
    title: "Tarjetas & Experiencias Web Interactivas",
    text: "Desarrollo regalos y páginas interactivas a medida para fechas especiales: cumpleaños, 14 de febrero (San Valentín), aniversarios, cartas de amor o detalles para conquistar. Con animaciones fluidas, música de fondo, acertijos con contraseña y efectos sorpresa.",
  },
  {
    icon: Globe,
    title: "Desarrollo Web de Alto Rendimiento",
    text: "Landing pages y aplicaciones web desarrolladas con las últimas tecnologías para garantizar una velocidad de carga instantánea y un posicionamiento óptimo en Google. Adiós a las plantillas lentas.",
  },
  {
    icon: PackageSearch,
    title: "Catálogos de Productos con Gestión de Stock",
    text: "Páginas de catálogo donde tus clientes ven tus productos disponibles en tiempo real. El sistema lleva la cuenta automática de lo que vendés, te avisa cuando hay que reponer y actualiza el stock solo. Todo automatizado para que vos te enfoques en vender.",
  },
  {
    icon: ShieldCheck,
    title: "Soluciones IT y Ciberseguridad",
    text: "Auditoría, configuración y bastionado (hardening) de redes y equipos para oficinas y comercios. Protejo los datos de tu negocio y aseguro que tu red Wi-Fi funcione sin caídas.",
  },
  {
    icon: Smartphone,
    title: "Automatización y Experiencia Física (NFC)",
    text: "Modernizo la experiencia de tus clientes integrando etiquetas NFC en tu local. Conéctalos a tu Wi-Fi, muéstrales tu menú o dirígelos a tus redes sociales con un solo toque de su celular.",
  },
];

const projects = [
  {
    title: "Veterinaria Dacor",
    tags: ["Web", "Landing Page", "Diseño Responsivo"],
    text: "Desarrollo de una landing page optimizada para conversión, diseñada para mostrar los servicios de la clínica de forma clara y rápida en dispositivos móviles.",
    image: "/proyecto-veterinaria.png",
    href: "https://dacor-veterinaria.vercel.app",
  },
  {
    title: "Gomez Barber",
    tags: ["Web", "Negocio Local", "Rendimiento"],
    text: "Sitio web moderno para barbería local con tiempos de carga de milisegundos, facilitando el acceso a la información y el contacto directo de los clientes.",
    image: "/proyecto-barberia.png",
    href: "https://gomez-barber.vercel.app",
  },
  {
    title: "Presencia Digital",
    tags: ["Google Business", "SEO Local"],
    text: "Configuración y gestión del perfil comercial para Librería-Papelería Creativa, mejorando la visibilidad en Google Maps y búsquedas locales.",
    image: "/proyecto-seo.png",
    href: "https://maps.app.goo.gl/NUYp4x9Gj4X5GQeo6",
  },
];

/* ───────────── Piezas reutilizables ───────────── */

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">{children}</div>;
}

function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
      : "border border-zinc-700 text-zinc-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-white hover:bg-white/5"; 
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-medium transition duration-300 ${styles} ${focus}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
      {children}
    </h2>
  );
}



/* ───────────── Logo SVG inline ───────────── */

function LogoSTL({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="96" fill="url(#logo-bg)" />
      <text
        x="256"
        y="310"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="200"
        fill="white"
        letterSpacing="-8"
      >
        STL
      </text>
    </svg>
  );
}

/* ───────────── Secciones ───────────── */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className={`flex items-center gap-3 ${focus}`}>
            <LogoSTL className="size-9" />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight text-zinc-900">STL</span>
              <span className="hidden text-[11px] font-medium tracking-wide text-zinc-500 uppercase sm:block">
                Soluciones Tecnológicas
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            {[
              ["Sobre mí", "#sobre-mi"],
              ["Servicios", "#servicios"],
              ["¿Qué incluye?", "#que-incluye"],
              ["Proyectos", "#proyectos"],
              ["Tarjetas Creativas", "#tarjetas"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a key={href} href={href} className={`transition hover:text-blue-600 ${focus}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/70 to-zinc-950" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.15),transparent)]"
      />
      <Container>
        <div className="py-24 sm:py-32 lg:py-44">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-400">
              <LogoSTL className="size-5" />
              <span>Soluciones Tecnológicas Lautaro</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Impulsa tu negocio con tecnología rápida, segura y a medida.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Soy Lautaro Sánchez, desarrollador web y especialista en soluciones IT. Creo páginas
              web de ultra alto rendimiento y optimizo la tecnología de tu local para que vendas más
              y trabajes mejor.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={LINKS.quote}>Cotizar mi proyecto</Button>
              <Button href="#proyectos" variant="secondary">
                Ver mis trabajos
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Desarrollo a medida",
      desc: "Software limpio, mantenible y sin dependencias innecesarias.",
    },
    {
      icon: Zap,
      title: "Ultra rendimiento",
      desc: "Tiempos de carga de milisegundos y optimización de recursos.",
    },
    {
      icon: Cpu,
      title: "Hardware & Redes",
      desc: "Conocimiento profundo de infraestructura física y conectividad.",
    },
    {
      icon: ShieldCheck,
      title: "Seguridad sólida",
      desc: "Bastionado y protección de datos desde el primer día.",
    },
  ];

  return (
    <section id="sobre-mi" className="relative scroll-mt-16 bg-zinc-50 overflow-hidden">
      {/* Marca de agua tecnológica sutil */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40 select-none">
        <Image
          src="/about-tech-watermark.png"
          alt=""
          fill
          className="object-cover mix-blend-multiply opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-transparent to-zinc-50" />
      </div>

      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Trayectoria & Enfoque
                </span>
                <div className="mt-3">
                  <SectionTitle>Sobre mí</SectionTitle>
                </div>
                <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Estudiante avanzado de Ingeniería en Software y apasionado por el hardware, 
                  las redes y la ciberseguridad. Mi objetivo es que la tecnología sea una palanca de 
                  crecimiento para tu negocio, no un dolor de cabeza técnico.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 font-bold text-sm">
                    STL
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Soluciones Tecnológicas Lautaro</p>
                    <p className="text-xs text-zinc-500">Desarrollo web e ingeniería IT orientada a resultados</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <div className="rounded-3xl border border-zinc-200/90 bg-white/90 p-8 sm:p-10 shadow-sm backdrop-blur-sm">
                <p className="text-base sm:text-lg leading-relaxed text-zinc-700">
                  No construyo páginas genéricas; diseño <strong className="font-semibold text-zinc-900">infraestructuras digitales sólidas</strong>.
                  Combino diseño limpio, tiempos de respuesta instantáneos y seguridad integral desde el código 
                  hasta la red física de tu comercio.
                </p>

                {/* Micro-tarjetas de pilares */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 pt-6 border-t border-zinc-100">
                  {highlights.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="group flex flex-col rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4 transition duration-300 hover:border-blue-600/30 hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 text-zinc-900">
                        <div className="flex size-8 items-center justify-center rounded-xl bg-white border border-zinc-200 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                          <Icon className="size-4" strokeWidth={2} />
                        </div>
                        <h4 className="text-sm font-semibold text-zinc-900">{title}</h4>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-500">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="scroll-mt-16 bg-zinc-100 border-y border-zinc-200">
      <Container>
        <div className="py-24 sm:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <ScrollReveal>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Soluciones Integrales
              </span>
              <div className="mt-3">
                <SectionTitle>Servicios Tecnológicos</SectionTitle>
              </div>
              <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
                Hacé click en cada tarjeta para girarla y ver una demostración interactiva en vivo con los beneficios clave.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <span className="text-xs font-medium text-zinc-500 bg-white border border-zinc-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
                🔄 Tarjetas 3D interactivas
              </span>
            </ScrollReveal>
          </div>
          <ServicesFlip />
        </div>
      </Container>
    </section>
  );
}

const giftCards = [
  {
    title: "Cumpleaños para Todas las Edades",
    category: "Niños, Jóvenes y Adultos",
    description:
      "Torta interactiva con velas que se apagan al soplar, selector de edad adaptable (de 1 a 100 años), globos flotantes para reventar con deseos y caja de regalo 3D sorpresa.",
    href: "/tarjetas-interactivas/cumpleanos-todas-edades",
    tag: "Torta Interactiva & Globos",
    badge: "Todas las Edades",
    icon: Sparkles,
  },
  {
    title: "Tarjeta Mágica de Navidad & Fin de Año",
    category: "Navidad / Año Nuevo / Familia",
    description:
      "Nevada realista en tiempo real, árbol de Navidad con luces que titilan e interactúan, bola de nieve mágica con muñeco de nieve y carta con buenos deseos navideños.",
    href: "/tarjetas-interactivas/navidad",
    tag: "Nieve & Árbol Iluminado",
    badge: "Navidad & Fiestas",
    icon: Gift,
  },
  {
    title: "Flores Digitales con Lluvia & Viento",
    category: "14 de Febrero / Detalle Romántico",
    description:
      "Ramo botánico digital que crece de abajo hacia arriba, lluvia interactiva que nutre los pétalos, balanceo orgánico con el viento y dedicatoria personalizada.",
    href: "/tarjetas-interactivas/flores",
    tag: "Crecimiento, Lluvia & Viento",
    badge: "San Valentín & Amor",
    icon: Heart,
  },
  {
    title: "Carta de Amor con Clave & Música",
    category: "14 de Febrero / Aniversarios",
    description:
      "Acertijo inicial con contraseña personalizada (iniciales o fechas especiales), reproductor de audio con música de fondo, efecto máquina de escribir y fondo dinámico.",
    href: "/tarjetas-interactivas/carta-aniversario",
    tag: "Clave Secreta & Audio",
    badge: "Parejas & Aniversario",
    icon: Heart,
  },
  {
    title: "Carta Interactiva de Recuerdos",
    category: "Cumpleaños / Familiar / Día de la Madre",
    description:
      "Apertura con sobre 3D animado, dedicatoria emotiva, polaroids que giran al tocarlas, tarrito de razones aleatorias y cuponera canjeable en la vida real.",
    href: "/tarjetas-interactivas/cumpleanos",
    tag: "Multi-sección & Cupones",
    badge: "Familiar & Recuerdos",
    icon: Gift,
  },
];

function InteractiveCards() {
  return (
    <section id="tarjetas" className="scroll-mt-16 bg-zinc-100 border-t border-zinc-200">
      <Container>
        <div className="py-24 sm:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 border border-pink-200 px-3.5 py-1 text-xs font-semibold text-pink-700">
                  <Sparkles className="size-3.5" />
                  Nicho Especial & Creativo
                </div>
                <div className="mt-3">
                  <SectionTitle>Tarjetas & Experiencias Web Creativas</SectionTitle>
                </div>
                <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
                  Regalos digitales personalizados para cumpleaños, San Valentín, aniversarios o cartas sorpresa.
                  Cada proyecto cuenta con animaciones fluidas, música, acertijos interactivos y diseño a medida.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={100}>
              <span className="text-xs font-medium text-zinc-500 bg-white border border-zinc-200 px-3 py-1.5 rounded-full inline-block">
                🔒 Plantillas demo sin datos personales
              </span>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {giftCards.map(({ title, category, description, href, tag, badge, icon: Icon }, i) => (
              <ScrollReveal key={title} delay={i * 150}>
                <Link
                  href={href}
                  className="group flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-pink-400 hover:shadow-lg h-full"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 border border-pink-100 transition duration-300 group-hover:bg-pink-600 group-hover:text-white">
                        <Icon className="size-6" strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-zinc-50 border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">
                        {badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-900 group-hover:text-pink-600 transition">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-pink-600">{category}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600">{description}</p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500">{tag}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-pink-600 group-hover:translate-x-1 transition">
                      Ver demo interactiva
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="proyectos" className="scroll-mt-16 bg-zinc-50">
      <Container>
        <div className="py-24 sm:py-32">
          <ScrollReveal>
            <SectionTitle>Portafolio</SectionTitle>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ title, tags, text, image, href }, i) => (
              <ScrollReveal key={title} delay={i * 150}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-600/40 hover:shadow-md overflow-hidden h-full"
                >
                  {/* Project image */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={image}
                      alt={`Proyecto: ${title}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h3>
                      <ArrowUpRight
                        className="mt-1 size-5 shrink-0 text-zinc-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-zinc-50 border border-zinc-200 px-3 py-1 text-sm text-zinc-600 font-medium"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 leading-relaxed text-zinc-600">{text}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── Página ───────────── */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <LandingFeatures />
        <Portfolio />
        <InteractiveCards />
      </main>
      <ContactSection />
    </>
  );
}
