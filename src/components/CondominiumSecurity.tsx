import { Maximize2 } from 'lucide-react';
import {
  CONDOMINIUM_FEATURES,
  CONDOMINIUM_NAME,
  MEDIA_ASSETS,
  type MediaAsset,
} from '../data/propertyData';
import { ResilientImage } from './ResilientImage';

interface CondominiumSecurityProps {
  onInspectImage: (asset: MediaAsset) => void;
}

export function CondominiumSecurity({ onInspectImage }: CondominiumSecurityProps) {
  const panoramicAsset = MEDIA_ASSETS.condominioPanoramica;
  const aerialAsset = MEDIA_ASSETS.condominioAerea;
  const porteriaAsset = MEDIA_ASSETS.porteria;
  const valleyAsset = MEDIA_ASSETS.condominioVista;

  return (
    <section id="seguridad-condominio" className="bg-[#F7F7F4] py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-tight text-[#16241B] [text-wrap:balance]">
              Seguridad, vías internas y vida consolidada en {CONDOMINIUM_NAME}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#4E5B52]">
              Un conjunto residencial ya habitado donde la portería vigilada, la infraestructura vial
              y la baja densidad protegen su inversión y su tranquilidad cotidiana.
            </p>
          </div>
        </div>

        {/* Wide panoramic photo showcasing gatehouse, fencing, trees, and residences */}
        <div className="mt-12 overflow-hidden rounded-xl border border-[#E0E0D8] bg-white">
          <div className="relative aspect-[21/9] min-h-[240px] w-full bg-[#EFEFEA]">
            <ResilientImage
              src={panoramicAsset.src}
              alt={panoramicAsset.alt}
              fallbackTitle={panoramicAsset.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <p className="text-sm font-medium text-white">{panoramicAsset.title}</p>
              <button
                type="button"
                onClick={() => onInspectImage(panoramicAsset)}
                aria-label={`Ampliar imagen: ${panoramicAsset.title}`}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/90 text-[#16241B] backdrop-blur-xs transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="border-t border-[#E0E0D8] px-6 py-4">
            <p className="text-sm text-[#4E5B52]">{panoramicAsset.caption}</p>
          </div>
        </div>

        {/* Two-column split: Aerial view + Porteria & Internal road photos + 4-point condominium features */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-5 lg:col-span-6">
            {/* Featured Aerial Condominium View */}
            <div className="overflow-hidden rounded-xl border border-[#E0E0D8] bg-white">
              <div className="relative aspect-[4/3] w-full bg-[#EFEFEA]">
                <ResilientImage
                  src={aerialAsset.src}
                  alt={aerialAsset.alt}
                  fallbackTitle={aerialAsset.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
                  <p className="text-sm font-medium text-white">{aerialAsset.title}</p>
                  <button
                    type="button"
                    onClick={() => onInspectImage(aerialAsset)}
                    aria-label={`Ampliar imagen: ${aerialAsset.title}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/90 text-[#16241B] backdrop-blur-xs transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="border-t border-[#E0E0D8] px-5 py-3.5">
                <p className="text-xs leading-relaxed text-[#4E5B52]">{aerialAsset.caption}</p>
              </div>
            </div>

            {/* Dual detail cards: Porteria + Internal road */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-[#E0E0D8] bg-white">
                <div className="relative aspect-[16/9] w-full bg-[#EFEFEA]">
                  <ResilientImage
                    src={porteriaAsset.src}
                    alt={porteriaAsset.alt}
                    fallbackTitle={porteriaAsset.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => onInspectImage(porteriaAsset)}
                    aria-label={`Ampliar imagen: ${porteriaAsset.title}`}
                    className="absolute right-2.5 bottom-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#16241B] backdrop-blur-xs transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-t border-[#E0E0D8] px-4 py-3">
                  <p className="text-xs font-medium text-[#16241B]">{porteriaAsset.title}</p>
                  <p className="mt-0.5 text-xs text-[#4E5B52]">
                    Acceso vigilado y portón controlado.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#E0E0D8] bg-white">
                <div className="relative aspect-[16/9] w-full bg-[#EFEFEA]">
                  <ResilientImage
                    src={valleyAsset.src}
                    alt={valleyAsset.alt}
                    fallbackTitle={valleyAsset.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => onInspectImage(valleyAsset)}
                    aria-label={`Ampliar imagen: ${valleyAsset.title}`}
                    className="absolute right-2.5 bottom-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#16241B] backdrop-blur-xs transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-t border-[#E0E0D8] px-4 py-3">
                  <p className="text-xs font-medium text-[#16241B]">Vías internas y bosque</p>
                  <p className="mt-0.5 text-xs text-[#4E5B52]">
                    Calzadas terminadas y redes listas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-8 lg:col-span-6">
            <div className="divide-y divide-[#E0E0D8] border-y border-[#E0E0D8]">
              {CONDOMINIUM_FEATURES.map((feature) => (
                <div key={feature.title} className="py-5">
                  <h3 className="font-serif text-lg font-medium text-[#16241B]">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4E5B52]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E0E0D8] pt-6">
              <h3 className="font-serif text-lg font-medium text-[#16241B]">
                Urbanismo de baja densidad y entorno protegido
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4E5B52]">
                Desde el aire se aprecia la separación real entre viviendas, el trazado curvo que
                reduce la velocidad vehicular interna y la continuidad del bosque nativo que resguarda
                la privacidad de todo el conjunto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
