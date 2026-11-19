import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { HOUSE_SPACES, MEDIA_ASSETS, type MediaAsset } from '../data/propertyData';
import { ResilientImage } from './ResilientImage';

interface EnvironmentAndArchitectureProps {
  onInspectImage: (asset: MediaAsset) => void;
}

export function EnvironmentAndArchitecture({ onInspectImage }: EnvironmentAndArchitectureProps) {
  const [selectedView, setSelectedView] = useState<'exterior' | 'planta'>('exterior');

  const activeAsset =
    selectedView === 'exterior' ? MEDIA_ASSETS.renderExterior : MEDIA_ASSETS.planoCasa;

  return (
    <section id="entorno-arquitectura" className="bg-[#F7F7F4] py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-tight text-[#16241B] [text-wrap:balance]">
              Topografía diseñada para abrir su casa al paisaje y al bosque nativo
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#4E5B52]">
              La inclinación natural del terreno facilita implantar una residencia contemporánea en
              un nivel, protegiendo la privacidad y asegurando visuales despejadas hacia la reserva
              ecológica.
            </p>
          </div>
        </div>

        {/* Main architectural showcase */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left column: Architectural renders */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
              <div
                role="tablist"
                aria-label="Referencias arquitectónicas"
                className="inline-flex items-center rounded-lg border border-[#E0E0D8] bg-[#EFEFEA] p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedView === 'exterior'}
                  onClick={() => setSelectedView('exterior')}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    selectedView === 'exterior'
                      ? 'bg-white text-[#16241B] shadow-xs'
                      : 'text-[#4E5B52] hover:text-[#16241B]'
                  }`}
                >
                  Render exterior
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedView === 'planta'}
                  onClick={() => setSelectedView('planta')}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    selectedView === 'planta'
                      ? 'bg-white text-[#16241B] shadow-xs'
                      : 'text-[#4E5B52] hover:text-[#16241B]'
                  }`}
                >
                  Planta arquitectónica (205,90 m²)
                </button>
              </div>

              <button
                type="button"
                onClick={() => onInspectImage(activeAsset)}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#E0E0D8] bg-white px-3.5 py-2 text-xs font-medium text-[#16241B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#16241B]"
              >
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Ampliar vista</span>
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#E0E0D8] bg-white">
              <div className="aspect-[16/10] w-full bg-[#EFEFEA]">
                <ResilientImage
                  src={activeAsset.src}
                  alt={activeAsset.alt}
                  fallbackTitle={activeAsset.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t border-[#E0E0D8] px-5 py-4">
                <p className="text-sm font-medium text-[#16241B]">{activeAsset.title}</p>
                <p className="mt-1 text-sm text-[#4E5B52]">{activeAsset.caption}</p>
              </div>
            </div>

            {/* Dual thumbnail strip so both architectural images are visible at a glance */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedView('exterior')}
                className={`group overflow-hidden rounded-lg border text-left transition-colors duration-150 ${
                  selectedView === 'exterior'
                    ? 'border-[#1F4A34] bg-white'
                    : 'border-[#E0E0D8] bg-white/70 hover:border-[#8A6A4B]'
                }`}
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#EFEFEA]">
                  <ResilientImage
                    src={MEDIA_ASSETS.renderExterior.src}
                    alt={MEDIA_ASSETS.renderExterior.alt}
                    fallbackTitle="Render exterior"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="px-3.5 py-2.5 text-xs font-medium text-[#16241B]">
                  Fachada e integración al paisaje
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedView('planta')}
                className={`group overflow-hidden rounded-lg border text-left transition-colors duration-150 ${
                  selectedView === 'planta'
                    ? 'border-[#1F4A34] bg-white'
                    : 'border-[#E0E0D8] bg-white/70 hover:border-[#8A6A4B]'
                }`}
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#EFEFEA]">
                  <ResilientImage
                    src={MEDIA_ASSETS.planoCasa.src}
                    alt={MEDIA_ASSETS.planoCasa.alt}
                    fallbackTitle="Distribución 205,90 m²"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="px-3.5 py-2.5 text-xs font-medium text-[#16241B]">
                  Distribución interior Casa Tipo A
                </p>
              </button>
            </div>
          </div>

          {/* Right column: Environment attributes & Casa Tipo A program */}
          <div className="space-y-8 lg:col-span-5 lg:pt-12">
            <div>
              <h3 className="font-serif text-xl font-medium text-[#16241B]">
                Atributos naturales del terreno
              </h3>
              <dl className="mt-4 divide-y divide-[#E0E0D8] border-y border-[#E0E0D8]">
                <div className="py-3.5">
                  <dt className="text-sm font-medium text-[#16241B]">
                    Vista panorámica permanente
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#4E5B52]">
                    Visual abierta hacia las montañas y el valle verde, sin edificaciones frontales
                    que interrumpan el horizonte.
                  </dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-sm font-medium text-[#16241B]">
                    Bosque y reserva ecológica
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#4E5B52]">
                    Colindancia directa con reserva protegida y árboles nativos en crecimiento que
                    regulan el clima y atraen aves locales.
                  </dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-sm font-medium text-[#16241B]">
                    Privacidad y diseño a medida
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#4E5B52]">
                    La referencia Casa Tipo A de 205,90 m² ocupa solo el 9% del lote real, dejando
                    amplios retiros verdes respecto a los vecinos.
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium text-[#16241B]">
                Programa sugerido Casa Tipo A (205,90 m²)
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#4E5B52]">
                {HOUSE_SPACES.map((space) => (
                  <li key={space} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A6A4B]"
                    />
                    <span>{space}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
