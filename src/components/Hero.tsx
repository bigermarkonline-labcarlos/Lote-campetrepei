import { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import {
  CONDOMINIUM_NAME,
  KEY_METRICS,
  LOCATION_CORRIDOR,
  MEDIA_ASSETS,
  getWhatsAppUrl,
  type MediaAsset,
} from '../data/propertyData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onInspectImage: (asset: MediaAsset) => void;
}

export function Hero({ onInspectImage }: HeroProps) {
  const [activeVisual, setActiveVisual] = useState<'vista' | 'render'>('vista');

  const currentAsset =
    activeVisual === 'vista' ? MEDIA_ASSETS.condominioVista : MEDIA_ASSETS.renderExterior;

  return (
    <section id="inicio" className="bg-[#F7F7F4] pt-10 pb-6 lg:pt-14 lg:pb-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Two-column architectural hero */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left narrative column */}
          <div className="flex flex-col justify-between py-2 lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-[#4E5B52]">
                <span>{CONDOMINIUM_NAME}</span>
                <span aria-hidden="true" className="mx-2 text-[#8A6A4B]">
                  ·
                </span>
                <span>{LOCATION_CORRIDOR}</span>
              </p>

              <h1 className="mt-4 font-serif text-[clamp(2.25rem,3.9vw,3.45rem)] font-medium leading-[1.08] tracking-tight text-[#16241B] [text-wrap:balance]">
                Vista panorámica permanente y reserva privada en Pereira
              </h1>

              <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-[#4E5B52]">
                Terreno campestre rodeado de bosque, árboles nativos en crecimiento y aire puro,
                con privacidad real y conexión ágil hacia la ciudad.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={getWhatsAppUrl('CTA Agendar visita privada · sección principal')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1F4A34] px-5 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#173928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
                >
                  <span>Agendar visita privada</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#plano-comercial"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#C8CCC2] bg-white px-5 py-3 text-sm font-medium text-[#16241B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#16241B] hover:bg-[#EFEFEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
                >
                  Ver plano y detalles
                </a>
              </div>
            </div>

            {/* Quiet visual selector & factual caption */}
            <div className="mt-10 border-t border-[#E0E0D8] pt-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-medium text-[#4E5B52]">Explorar vista destacada</span>
                <div
                  role="tablist"
                  aria-label="Selector de imagen principal"
                  className="inline-flex items-center rounded-lg border border-[#E0E0D8] bg-[#EFEFEA] p-1"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeVisual === 'vista'}
                    onClick={() => setActiveVisual('vista')}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      activeVisual === 'vista'
                        ? 'bg-white text-[#16241B] shadow-xs'
                        : 'text-[#4E5B52] hover:text-[#16241B]'
                    }`}
                  >
                    Terreno y entorno
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeVisual === 'render'}
                    onClick={() => setActiveVisual('render')}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      activeVisual === 'render'
                        ? 'bg-white text-[#16241B] shadow-xs'
                        : 'text-[#4E5B52] hover:text-[#16241B]'
                    }`}
                  >
                    Casa proyectada
                  </button>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#4E5B52]">{currentAsset.caption}</p>
            </div>
          </div>

          {/* Right visual showcase */}
          <div className="relative overflow-hidden rounded-xl border border-[#E0E0D8] bg-[#EFEFEA] lg:col-span-7">
            <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[460px]">
              <ResilientImage
                src={currentAsset.src}
                alt={currentAsset.alt}
                fallbackTitle={currentAsset.title}
                className="h-full w-full object-cover transition-opacity duration-200"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <p className="text-sm font-medium text-white">{currentAsset.title}</p>
                <button
                  type="button"
                  onClick={() => onInspectImage(currentAsset)}
                  aria-label={`Ampliar imagen: ${currentAsset.title}`}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/90 text-[#16241B] backdrop-blur-xs transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Datos clave del inmueble - full-width strip */}
        <div id="datos-clave" className="mt-12 border-y border-[#E0E0D8] bg-white/70">
          <div className="grid grid-cols-1 divide-y divide-[#E0E0D8] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {KEY_METRICS.map((metric) => (
              <div key={metric.label} className="px-6 py-6">
                <p className="text-xs font-medium text-[#4E5B52]">{metric.label}</p>
                <p className="mt-2 font-serif text-2xl font-medium tracking-tight text-[#16241B] tabular-nums lg:text-[1.75rem]">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-sm text-[#4E5B52]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
