import { useState } from 'react';
import { Compass, Layers, Trees } from 'lucide-react';
import { PLAN_ZONES, type PlanZone } from '../data/propertyData';

type LayerMode = 'implantacion' | 'topografia';

const LOT_POLYGON_POINTS =
  '368.7,52.0 367.5,126.5 307.1,259.0 359.3,441.0 343.2,447.2 320.9,427.6 273.7,405.1 227.0,388.9 189.9,389.8 197.8,350.9 165.0,240.0 245.2,129.7';

export function CommercialLotPlan() {
  const [layerMode, setLayerMode] = useState<LayerMode>('implantacion');
  const [activeZone, setActiveZone] = useState<PlanZone['id']>('implantacion');

  const currentZone = PLAN_ZONES[activeZone];

  const zoneButtons: { id: PlanZone['id']; label: string }[] = [
    { id: 'implantacion', label: 'Casa Tipo A' },
    { id: 'acceso', label: 'Acceso vial' },
    { id: 'verde', label: 'Área verde (91%)' },
    { id: 'reserva', label: 'Reserva ecológica' },
  ];

  return (
    <section id="plano-comercial" className="border-y border-[#E0E0D8] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-tight text-[#16241B] [text-wrap:balance]">
              Plano comercial del terreno e implantación de referencia
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#4E5B52]">
              Interpretación clara del levantamiento topográfico para visualizar linderos reales,
              acceso por rotonda interna y la huella sugerida de vivienda sin tecnicismos complejos.
            </p>
          </div>
        </div>

        {/* Plan workspace */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Interactive SVG Plan */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-[#E0E0D8] bg-[#F7F7F4]">
              {/* Plan toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E0E0D8] bg-white px-5 py-3.5">
                <div
                  role="tablist"
                  aria-label="Capas del plano comercial"
                  className="inline-flex items-center rounded-lg border border-[#E0E0D8] bg-[#EFEFEA] p-1"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={layerMode === 'implantacion'}
                    onClick={() => setLayerMode('implantacion')}
                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      layerMode === 'implantacion'
                        ? 'bg-white text-[#16241B] shadow-xs'
                        : 'text-[#4E5B52] hover:text-[#16241B]'
                    }`}
                  >
                    <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Implantación y linderos</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={layerMode === 'topografia'}
                    onClick={() => setLayerMode('topografia')}
                    className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                      layerMode === 'topografia'
                        ? 'bg-white text-[#16241B] shadow-xs'
                        : 'text-[#4E5B52] hover:text-[#16241B]'
                    }`}
                  >
                    <Trees className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Topografía y bosque</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#4E5B52]">
                  <Compass className="h-4 w-4 text-[#1F4A34]" aria-hidden="true" />
                  <span>Escala proporcional · Medidas en metros</span>
                </div>
              </div>

              {/* Clean commercial SVG derived from CAD survey */}
              <div className="p-4 sm:p-6">
                <svg
                  viewBox="0 0 560 500"
                  role="img"
                  aria-label="Plano comercial del terreno campestre en Condominio Alicante con área real de 2.379,63 metros cuadrados e implantación sugerida de Casa Tipo A"
                  className="h-auto w-full rounded-lg border border-[#E0E0D8] bg-[#FCFCF9]"
                >
                  <defs>
                    <pattern
                      id="forestHatch"
                      width="14"
                      height="14"
                      patternUnits="userSpaceOnUse"
                      patternTransform="rotate(28)"
                    >
                      <line x1="0" y1="0" x2="0" y2="14" stroke="#C5D1C7" strokeWidth="1" />
                    </pattern>
                    <linearGradient id="lotSurface" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EFF4EE" />
                      <stop offset="100%" stopColor="#E1EBE0" />
                    </linearGradient>
                  </defs>

                  {/* Soft surrounding terrain context */}
                  <rect x="0" y="0" width="560" height="500" fill="#FCFCF9" />

                  {/* Subtle adjacent neighbor lots (unnumbered) */}
                  <path
                    d="M 40,52 L 368.7,52 L 245.2,129.7 L 165.0,240.0 L 197.8,350.9 L 189.9,389.8 L 40,395 Z"
                    fill="#F3F4EF"
                    stroke="#E2E4DC"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 367.5,126.5 L 520,140 L 520,445 L 359.3,441.0 L 307.1,259.0 Z"
                    fill="#F3F4EF"
                    stroke="#E2E4DC"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <text x="86" y="210" fill="#7D867F" fontSize="11" fontFamily="Plus Jakarta Sans">
                    Predio colindante
                  </text>
                  <text x="415" y="285" fill="#7D867F" fontSize="11" fontFamily="Plus Jakarta Sans">
                    Predio colindante
                  </text>

                  {/* Ecological Reserve / Native Forest corridor at bottom */}
                  <path
                    d="M 40,395 L 189.9,389.8 L 227.0,388.9 L 273.7,405.1 L 320.9,427.6 L 343.2,447.2 L 359.3,441.0 L 520,445 L 520,500 L 40,500 Z"
                    fill="url(#forestHatch)"
                    opacity={activeZone === 'reserva' || layerMode === 'topografia' ? 0.95 : 0.65}
                    className="cursor-pointer transition-opacity duration-150"
                    onClick={() => setActiveZone('reserva')}
                  />

                  {/* Internal Paved Road & Cul-de-sac (Rotonda) at top right */}
                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveZone('acceso')}
                  >
                    <path
                      d="M 358,0 L 358,58 A 34,34 0 1,1 398,118 L 540,126 L 540,94 L 408,86 A 34,34 0 0,1 388,0 Z"
                      fill={activeZone === 'acceso' ? '#D6D9D1' : '#E3E5DE'}
                      stroke="#B9BEB3"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="388"
                      cy="84"
                      r="11"
                      fill="#DCE5DB"
                      stroke="#8FA593"
                      strokeWidth="1"
                    />
                    <text
                      x="418"
                      y="72"
                      fill="#3F4B43"
                      fontSize="11"
                      fontWeight="500"
                      fontFamily="Plus Jakarta Sans"
                    >
                      Vía interna pavimentada
                    </text>
                    <text
                      x="418"
                      y="86"
                      fill="#5F6B62"
                      fontSize="10"
                      fontFamily="Plus Jakarta Sans"
                    >
                      Rotonda de acceso privado
                    </text>
                  </g>

                  {/* Main Lot Polygon */}
                  <polygon
                    points={LOT_POLYGON_POINTS}
                    fill="url(#lotSurface)"
                    stroke="#1F4A34"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                    onClick={() => setActiveZone('verde')}
                  />

                  {/* Topographic contour lines (visible/emphasized in topografia mode) */}
                  <g
                    fill="none"
                    stroke="#9CB4A0"
                    strokeWidth={layerMode === 'topografia' ? '1.3' : '0.8'}
                    strokeDasharray="3 3"
                    opacity={layerMode === 'topografia' ? 0.95 : 0.45}
                    pointerEvents="none"
                  >
                    <path d="M 218,168 Q 285,180 342,174" />
                    <path d="M 192,226 Q 260,240 318,228" />
                    <path d="M 176,284 Q 248,302 325,286" />
                    <path d="M 188,338 Q 262,360 340,348" />
                    <path d="M 205,378 Q 274,405 348,408" />
                  </g>

                  {layerMode === 'topografia' && (
                    <g pointerEvents="none" fill="#4E5B52" fontSize="9.5" fontFamily="Plus Jakarta Sans">
                      <text x="195" y="218">Pendiente suave hacia el valle</text>
                      <text x="208" y="328">Árboles nativos en crecimiento</text>
                      <path
                        d="M 278,248 L 278,302"
                        stroke="#1F4A34"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                      />
                      <polygon points="278,307 274,299 282,299" fill="#1F4A34" />
                    </g>
                  )}

                  {/* Native tree canopies (visual ecological richness) */}
                  <g
                    fill="#9DC0A2"
                    fillOpacity="0.45"
                    stroke="#588060"
                    strokeWidth="0.9"
                    pointerEvents="none"
                  >
                    <circle cx="212" cy="272" r="11" />
                    <circle cx="232" cy="290" r="8" />
                    <circle cx="315" cy="355" r="13" />
                    <circle cx="294" cy="378" r="9" />
                    <circle cx="236" cy="364" r="10" />
                    <circle cx="198" cy="422" r="14" />
                    <circle cx="265" cy="436" r="15" />
                    <circle cx="332" cy="458" r="13" />
                  </g>

                  {/* Reference Casa Tipo A Footprint (205,90 m² = ~9% occupancy) */}
                  <g
                    transform="translate(278, 152) rotate(-18)"
                    className="cursor-pointer"
                    onClick={() => setActiveZone('implantacion')}
                  >
                    {/* Driveway to cul-de-sac */}
                    <path
                      d="M 38,-22 L 78,-36 L 84,-14 L 44,0 Z"
                      fill="#D7D9D2"
                      stroke="#9DA398"
                      strokeWidth="0.9"
                    />
                    {/* Parking area (2 vehicles) */}
                    <rect
                      x="22"
                      y="-24"
                      width="26"
                      height="24"
                      rx="1.5"
                      fill="#EAEAE4"
                      stroke="#6F776E"
                      strokeWidth="1"
                    />
                    <text
                      x="35"
                      y="-9"
                      textAnchor="middle"
                      fill="#4E5B52"
                      fontSize="7"
                      fontFamily="Plus Jakarta Sans"
                    >
                      2 Parq.
                    </text>

                    {/* House main volume */}
                    <path
                      d="M -38,-14 L 22,-14 L 22,22 L -4,22 L -4,28 L -38,28 Z"
                      fill={activeZone === 'implantacion' ? '#1F4A34' : '#2C5C42'}
                      stroke="#16241B"
                      strokeWidth="1.4"
                    />
                    {/* Terrace facing valley view */}
                    <rect
                      x="-34"
                      y="28"
                      width="30"
                      height="9"
                      fill="#C6B49B"
                      stroke="#8A6A4B"
                      strokeWidth="0.8"
                    />
                    <text
                      x="-8"
                      y="8"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="8.5"
                      fontWeight="600"
                      fontFamily="Plus Jakarta Sans"
                    >
                      Casa Tipo A
                    </text>
                    <text
                      x="-8"
                      y="18"
                      textAnchor="middle"
                      fill="#DCE8DF"
                      fontSize="7.2"
                      fontFamily="Plus Jakarta Sans"
                    >
                      205,90 m²
                    </text>
                  </g>

                  {/* Lot central callout */}
                  <g pointerEvents="none">
                    <text
                      x="264"
                      y="246"
                      textAnchor="middle"
                      fill="#16241B"
                      fontSize="14"
                      fontWeight="600"
                      fontFamily="Fraunces, Georgia, serif"
                    >
                      Área real: 2.379,63 m²
                    </text>
                    <text
                      x="264"
                      y="264"
                      textAnchor="middle"
                      fill="#3E5445"
                      fontSize="11"
                      fontFamily="Plus Jakarta Sans"
                    >
                      Escritura: 2.532,22 m² · 91% área libre verde
                    </text>
                  </g>

                  {/* Clean outer perimeter dimension labels (no surveyor mojón codes) */}
                  <g fill="#4E5B52" fontSize="10.5" fontWeight="500" fontFamily="Plus Jakarta Sans">
                    <text x="296" y="79" transform="rotate(-32 296 79)">
                      34,7 m
                    </text>
                    <text x="184" y="178" transform="rotate(-53 184 178)">
                      36,3 m
                    </text>
                    <text x="163" y="305" transform="rotate(73 163 305)">
                      27,5 m
                    </text>
                    <text x="353" y="192" transform="rotate(-65 353 192)">
                      34,7 m
                    </text>
                    <text x="348" y="348" transform="rotate(73 348 348)">
                      45,1 m
                    </text>
                  </g>

                  {/* Ecological reserve label */}
                  <g className="cursor-pointer" onClick={() => setActiveZone('reserva')}>
                    <rect
                      x="150"
                      y="456"
                      width="260"
                      height="26"
                      rx="4"
                      fill="#FFFFFF"
                      fillOpacity="0.92"
                      stroke="#C5D1C7"
                    />
                    <text
                      x="280"
                      y="473"
                      textAnchor="middle"
                      fill="#1F4A34"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="Plus Jakarta Sans"
                    >
                      Reserva ecológica y vista panorámica permanente
                    </text>
                  </g>

                  {/* Minimalist North Compass */}
                  <g transform="translate(505, 48)" pointerEvents="none">
                    <circle cx="0" cy="0" r="20" fill="#FFFFFF" stroke="#D5D8CE" strokeWidth="1" />
                    <polygon points="0,-13 -4,2 0,-1 4,2" fill="#1F4A34" />
                    <polygon points="0,13 -4,-2 0,1 4,-2" fill="#B9BEB3" />
                    <text
                      x="0"
                      y="-24"
                      textAnchor="middle"
                      fill="#16241B"
                      fontSize="9.5"
                      fontWeight="600"
                      fontFamily="Plus Jakarta Sans"
                    >
                      N
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right column: Interactive zone readout & summary table */}
          <div className="space-y-8 lg:col-span-5">
            {/* Interactive zone selector */}
            <div>
              <p className="text-xs font-medium text-[#4E5B52]">
                Seleccione un área del plano para explorar sus detalles
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {zoneButtons.map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setActiveZone(btn.id)}
                    className={`min-h-[42px] rounded-lg border px-3 py-2 text-left text-xs font-medium transition-colors duration-150 ${
                      activeZone === btn.id
                        ? 'border-[#1F4A34] bg-[#1F4A34] text-white'
                        : 'border-[#E0E0D8] bg-[#F7F7F4] text-[#16241B] hover:border-[#8A6A4B]'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[#E0E0D8] bg-[#F7F7F4] p-6">
                <p className="text-xs font-medium text-[#8A6A4B]">{currentZone.areaLabel}</p>
                <h3 className="mt-1.5 font-serif text-xl font-medium text-[#16241B]">
                  {currentZone.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#4E5B52]">
                  {currentZone.summary}
                </p>
                <ul className="mt-4 space-y-2 border-t border-[#E0E0D8] pt-4 text-sm text-[#16241B]">
                  {currentZone.details.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F4A34]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clean commercial summary table */}
            <div className="border-t border-[#E0E0D8] pt-6">
              <h3 className="font-serif text-lg font-medium text-[#16241B]">
                Resumen técnico comercial
              </h3>
              <dl className="mt-4 divide-y divide-[#E0E0D8] text-sm">
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-[#4E5B52]">Área registrada en escritura</dt>
                  <dd className="font-medium text-[#16241B] tabular-nums">2.532,22 m²</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-[#4E5B52]">Área real (levantamiento)</dt>
                  <dd className="font-medium text-[#16241B] tabular-nums">2.379,63 m²</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-[#4E5B52]">Ocupación sugerida (Casa Tipo A)</dt>
                  <dd className="font-medium text-[#16241B] tabular-nums">205,90 m² (9%)</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-[#4E5B52]">Área libre para jardines y reserva</dt>
                  <dd className="font-medium text-[#16241B] tabular-nums">2.173,73 m² (91%)</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-[#4E5B52]">Parqueaderos contemplados</dt>
                  <dd className="font-medium text-[#16241B] tabular-nums">2 puestos cubiertos</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
