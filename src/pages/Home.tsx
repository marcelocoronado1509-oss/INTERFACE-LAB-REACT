import { useState } from 'react';

type PreviewSize = 'desktop' | 'tablet' | 'mobile';

const interfaceTypes = [
  {
    number: '01',
    title: 'Escritorio',
    platforms: 'Java · Python',
    description:
      'Aplicaciones que viven en tu ordenador. AWT, Swing, JavaFX o una interfaz hecha con Python.',
    shape: 'h-20 w-28 rounded-t-xl border-[5px] border-current after:absolute after:-bottom-3 after:left-1/2 after:h-2 after:w-16 after:-translate-x-1/2 after:bg-current',
    accent: 'bg-[#c6f54b]',
  },
  {
    number: '02',
    title: 'Nativa mobile',
    platforms: 'Android · iOS',
    description:
      'Experiencias diseñadas para el dispositivo. Kotlin en Android y Swift en iOS.',
    shape: 'h-24 w-14 rounded-[1.1rem] border-[5px] border-current after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-current',
    accent: 'bg-[#ff8066]',
  },
  {
    number: '03',
    title: 'Web & híbridas',
    platforms: 'HTML · CSS · React',
    description:
      'Un mismo sitio, muchas pantallas. La web responsive y las apps híbridas conectan ambos mundos.',
    shape: 'h-20 w-28 rounded-lg border-[5px] border-current before:absolute before:left-0 before:top-4 before:h-1 before:w-full before:bg-current',
    accent: 'bg-[#b8a5ff]',
  },
];

const previewLabels: { id: PreviewSize; label: string }[] = [
  { id: 'desktop', label: 'Escritorio' },
  { id: 'tablet', label: 'Tablet' },
  { id: 'mobile', label: 'Móvil' },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 ${diagonal ? '-rotate-45' : ''}`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Home() {
  const [previewSize, setPreviewSize] = useState<PreviewSize>('desktop');
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-[#f2f0e9] text-[#171714]">
      <header className="relative z-20 border-b-2 border-[#171714]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            aria-label="Interface Lab, inicio"
            className="flex items-center gap-2 font-black tracking-[-0.06em]"
            href="#inicio"
            onClick={closeMenu}
          >
            <span className="grid h-8 w-8 place-items-center bg-[#c6f54b] text-sm">I.</span>
            <span>INTERFACE LAB</span>
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="grid h-10 w-10 place-items-center border-2 border-[#171714] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
          </button>

          <nav
            aria-label="Navegación principal"
            className={`${menuOpen ? 'absolute inset-x-0 top-full flex border-b-2 border-[#171714] bg-[#f2f0e9] px-5 py-5' : 'hidden'} flex-col gap-5 font-bold uppercase tracking-[0.08em] md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0 md:text-xs`}
          >
            <a className="hover:underline" href="#tipos" onClick={closeMenu}>
              Tipos
            </a>
            <a className="hover:underline" href="#responsive" onClick={closeMenu}>
              Responsive
            </a>
            <a className="hover:underline" href="#herramientas" onClick={closeMenu}>
              Herramientas
            </a>
            <a
              className="inline-flex items-center gap-2 self-start bg-[#171714] px-4 py-3 text-xs text-white transition hover:bg-[#c6f54b] hover:text-[#171714] md:self-auto"
              href="#responsive"
              onClick={closeMenu}
            >
              Ver el proyecto <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <section
        aria-labelledby="hero-title"
        className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-[1440px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-12"
        id="inicio"
      >
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border-[35px] border-[#c6f54b] sm:right-0 sm:top-1/2 sm:h-[29rem] sm:w-[29rem] sm:-translate-y-1/2 sm:border-[4rem]" />
        <div className="pointer-events-none absolute right-8 top-28 h-20 w-20 rotate-12 border-[10px] border-[#ff8066] sm:right-20 sm:top-36 sm:h-32 sm:w-32 sm:border-[14px]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
            <span className="h-3 w-3 bg-[#ff8066]" />
            Desarrollo de interfaces · 2026
          </p>
          <h1
            className="max-w-5xl text-[clamp(2.5rem,10.5vw,10rem)] font-black uppercase leading-[0.79] tracking-[-0.09em] sm:text-[clamp(3.6rem,12vw,10rem)]"
            id="hero-title"
          >
            Diseña
            <br className="sm:hidden" />
            {' '}para
            <br />
            <span className="relative inline-block">
              todas
              <span className="absolute -bottom-1 left-0 -z-10 h-[0.18em] w-full bg-[#c6f54b] sm:-bottom-3" />
            </span>{' '}
            las
            <br />
            pantallas<span className="text-[#ff8066]">.</span>
          </h1>
          <div className="mt-10 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base font-medium leading-relaxed sm:text-lg">
              Del escritorio al móvil: una buena interfaz se adapta, se entiende y se siente.
              Explora cómo se construye.
            </p>
            <a
              className="group inline-flex w-fit items-center gap-3 border-2 border-[#171714] px-5 py-4 text-sm font-black uppercase transition hover:bg-[#171714] hover:text-white"
              href="#tipos"
            >
              Explorar interfaces
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
        <p className="absolute bottom-5 right-5 hidden text-[10px] font-bold uppercase tracking-[0.2em] sm:block lg:right-12">
          Desliza para descubrir · 01—03
        </p>
      </section>

      <section
        aria-labelledby="types-title"
        className="border-y-2 border-[#171714] bg-[#c6f54b] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        id="tipos"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em]">01 / El punto de partida</p>
              <h2
                className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] sm:text-7xl"
                id="types-title"
              >
                Una interfaz,
                <br />
                muchos formatos.
              </h2>
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed">
              Cada plataforma tiene sus reglas. El reto es convertirlas en experiencias simples
              y coherentes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {interfaceTypes.map((item) => (
              <article
                className="group flex min-h-[320px] flex-col border-2 border-[#171714] bg-[#f2f0e9] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_#171714] sm:p-8"
                key={item.number}
              >
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-xs font-black">{item.number} / 03</span>
                  <span
                    aria-hidden="true"
                    className={`relative grid h-32 w-32 place-items-center ${item.accent} ${item.shape}`}
                  />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-[-0.06em]">{item.title}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.1em]">{item.platforms}</p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="responsive-title"
        className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        id="responsive"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em]">02 / Diseño que responde</p>
            <h2
              className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] sm:text-7xl"
              id="responsive-title"
            >
              Un layout.
              <br />
              Cada
              <br />
              <span className="text-[#f45f43]">tamaño.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed">
              Responsive Web Design organiza el contenido según el espacio disponible. Prueba los
              controles: el layout cambia entre escritorio, tablet y móvil.
            </p>
            <div className="mt-8 inline-flex flex-wrap gap-2" role="group" aria-label="Tamaño de vista previa">
              {previewLabels.map(({ id, label }) => (
                <button
                  aria-pressed={previewSize === id}
                  className={`border-2 border-[#171714] px-4 py-3 text-xs font-black uppercase transition ${
                    previewSize === id
                      ? 'bg-[#171714] text-white'
                      : 'bg-transparent hover:bg-[#c6f54b]'
                  }`}
                  key={id}
                  onClick={() => setPreviewSize(id)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em]">
              Ahora: {previewLabels.find(({ id }) => id === previewSize)?.label}
            </p>
          </div>

          <div
            aria-label={`Vista previa en ${previewLabels.find(({ id }) => id === previewSize)?.label}`}
            className={`mx-auto w-full border-[3px] border-[#171714] bg-white p-2 shadow-[8px_8px_0_#c6f54b] transition-all duration-300 sm:p-4 ${
              previewSize === 'desktop'
                ? 'max-w-[740px]'
                : previewSize === 'tablet'
                  ? 'max-w-[540px]'
                  : 'max-w-[340px]'
            }`}
            role="img"
          >
            <div className="flex items-center gap-1.5 border-b-2 border-[#171714] pb-2">
              <span className="h-2 w-2 rounded-full bg-[#ff8066]" />
              <span className="h-2 w-2 rounded-full bg-[#c6f54b]" />
              <span className="h-2 w-2 rounded-full bg-[#b8a5ff]" />
              <span className="ml-3 h-2 w-2/5 bg-[#e6e5df]" />
            </div>
            <div
              className={`grid gap-2 py-3 sm:gap-3 sm:py-5 ${
                previewSize === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
              }`}
            >
              <div
                className={`flex min-h-24 flex-col justify-between bg-[#171714] p-3 text-white sm:min-h-40 sm:p-5 ${
                  previewSize === 'mobile' ? 'col-span-1' : 'col-span-2'
                }`}
              >
                <span className="text-[8px] font-bold uppercase tracking-[0.14em] sm:text-[10px]">Diseño adaptable</span>
                <span className="text-xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-4xl">
                  Menos
                  <br />
                  ruido. Más
                  <br />
                  intención.
                </span>
              </div>
              <div className="min-h-24 bg-[#ff8066] p-3 sm:min-h-40 sm:p-5">
                <span className="text-[8px] font-black uppercase sm:text-[10px]">01 / Contenido</span>
                <div className="mt-5 h-2 w-4/5 bg-[#171714] sm:mt-10" />
                <div className="mt-2 h-2 w-3/5 bg-[#171714]" />
              </div>
              <div className="min-h-16 bg-[#c6f54b] p-3 sm:col-span-2 sm:min-h-24 sm:p-5">
                <span className="text-[8px] font-black uppercase sm:text-[10px]">Diseñado con intención para cada viewport</span>
              </div>
              <div className="min-h-16 bg-[#b8a5ff] p-3 sm:min-h-24 sm:p-5">
                <span className="text-[8px] font-black uppercase sm:text-[10px]">Flexible · fluido · claro</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t-2 border-[#171714] pt-2 text-[8px] font-black uppercase sm:text-[10px]">
              <span>Interface lab</span>
              <span>100vh → 100svh</span>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="tools-title"
        className="border-y-2 border-[#171714] bg-[#171714] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
        id="herramientas"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#c6f54b]">03 / Del prototipo al producto</p>
            <h2
              className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] sm:text-7xl"
              id="tools-title"
            >
              Primero
              <br />
              imagina.
              <br />
              <span className="text-[#c6f54b]">Luego crea.</span>
            </h2>
          </div>
          <div className="space-y-0">
            <article className="border-t border-white/40 py-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff8066]">01 — Prototipado</p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em]">Figma / Adobe XD</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                Boceta flujos, prueba ideas y valida pantallas antes de escribir código.
              </p>
            </article>
            <article className="border-t border-white/40 py-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff8066]">02 — Estilos</p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em]">CSS / Sass</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                Define jerarquía, color y ritmo. Bootstrap, Materialize y Tailwind aceleran el
                sistema visual.
              </p>
            </article>
            <article className="border-y border-white/40 py-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff8066]">03 — Esta entrega</p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em]">React + Tailwind CSS</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                Componentes reutilizables, utilidades responsive e interacciones accesibles.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 text-xs font-bold uppercase tracking-[0.1em] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <a className="flex items-center gap-2" href="#inicio">
          <span className="grid h-7 w-7 place-items-center bg-[#c6f54b] text-[#171714]">I.</span>
          Interface Lab
        </a>
        <span>React · Tailwind CSS · Responsive by design</span>
        <a className="inline-flex items-center gap-2 hover:underline" href="#inicio">
          Volver arriba <ArrowIcon diagonal />
        </a>
      </footer>
    </main>
  );
}

export default Home;
