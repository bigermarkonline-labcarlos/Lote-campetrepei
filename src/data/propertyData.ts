export interface PropertyMetric {
  label: string;
  value: string;
  detail: string;
}

export interface PlanZone {
  id: 'acceso' | 'implantacion' | 'verde' | 'reserva';
  title: string;
  areaLabel: string;
  summary: string;
  details: string[];
}

export interface MediaAsset {
  id: string;
  src: string;
  title: string;
  caption: string;
  alt: string;
}

export const BRAND_NAME = 'Lote Campestre Pereira';
export const CONDOMINIUM_NAME = 'Condominio Alicante';
export const LOCATION_CORRIDOR = 'Km 11 vía Pereira - Armenia';

export const WHATSAPP_PHONE = '573122977712';
export const WHATSAPP_PREFILL_MESSAGE =
  'Me interesa el lote campestre de 2.532 mt2 via Armenia';
export const DOSSIER_PDF_PATH = '/docs/dossier-arquitectonico-lote-alicante.pdf';

export function getWhatsAppUrl(source: string, customMessage = WHATSAPP_PREFILL_MESSAGE): string {
  const text = encodeURIComponent(`${customMessage}\n\nOrigen: ${source}`);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export const KEY_METRICS: PropertyMetric[] = [
  {
    label: 'Área en escritura',
    value: '2.532,22 m²',
    detail: 'Respaldo jurídico en escritura pública',
  },
  {
    label: 'Área real del terreno',
    value: '2.379,63 m²',
    detail: 'Superficie útil según levantamiento (~2.379 m²)',
  },
  {
    label: 'Referencia Casa Tipo A',
    value: '205,90 m²',
    detail: 'Proyección de 1 nivel con 2 parqueaderos',
  },
  {
    label: 'Servicios públicos',
    value: 'Disponibles',
    detail: 'Agua, energía eléctrica y redes en el conjunto',
  },
];

export const MEDIA_ASSETS: Record<string, MediaAsset> = {
  condominioVista: {
    id: 'condominio-vista',
    src: '/assets/aistudio/C.R._57a27f5e.JPG',
    title: 'Vista panorámica desde el terreno',
    caption: 'Panorámica abierta hacia el valle, guaduales nativos, vías pavimentadas y viviendas del condominio.',
    alt: 'Vista panorámica desde el terreno en Condominio Alicante hacia el paisaje verde de Pereira',
  },
  condominioPanoramica: {
    id: 'condominio-panoramica',
    src: '/assets/aistudio/C.R__26ada8fb.JPG',
    title: 'Acceso, portería y entorno consolidado',
    caption: 'Panorámica del conjunto residencial mostrando la portería de acceso, cerramiento perimetral y arborización nativa.',
    alt: 'Fotografía panorámica del Condominio Alicante con portería de acceso, cerramiento y colinas verdes',
  },
  porteria: {
    id: 'porteria-acceso',
    src: '/assets/aistudio/porteria1_e6b2d86e.jpg',
    title: 'Portería y control de acceso vehicular',
    caption: 'Módulo de portería, portón metálico de ingreso, cámaras de vigilancia y calzada pavimentada de acceso.',
    alt: 'Portería principal de Condominio Alicante con caseta de vigilancia, portón metálico de acceso, cámaras de seguridad y vía pavimentada',
  },
  condominioAerea: {
    id: 'condominio-aerea',
    src: '/src/assets/images/condominio_vista_aerea_1795051830853.jpg',
    title: 'Vista aérea del trazado vial y reserva natural',
    caption: 'Perspectiva aérea que muestra el acceso desde la vía principal, las vías internas pavimentadas, las viviendas consolidadas y el cinturón de bosque nativo.',
    alt: 'Fotografía aérea del Condominio Alicante mostrando vías internas asfaltadas, viviendas campestres modernas y reserva boscosa perimetral',
  },
  renderExterior: {
    id: 'render-exterior',
    src: '/assets/aistudio/Render_casa__1__f0eb2905.jpeg',
    title: 'Proyección arquitectónica Casa Tipo A',
    caption: 'Referencia exterior contemporánea de un nivel, ventanales piso a techo y doble parqueadero cubierto.',
    alt: 'Render arquitectónico exterior de vivienda campestre moderna rodeada de bosque y montañas',
  },
  planoCasa: {
    id: 'plano-casa',
    src: '/assets/aistudio/Planos_casa__1__f0a0344b.jpeg',
    title: 'Distribución arquitectónica · 205,90 m²',
    caption: 'Planta de referencia con 3 alcobas, estar de televisión, zona social con terraza, alcoba de servicio y 2 parqueaderos.',
    alt: 'Plano arquitectónico 3D en planta de casa campestre de 205,90 metros cuadrados',
  },
};

export const HOUSE_SPACES = [
  'Sala y comedor integrados con salida directa a terraza panorámica',
  'Cocina abierta con barra social, zona de ropas independiente y alcoba de servicio con baño',
  'Alcoba principal con vestier, baño privado y vista hacia el jardín posterior',
  'Dos alcobas auxiliares con baño compartido y sala de estar familiar',
  'Baño social de visitas y doble parqueadero cubierto junto al acceso',
];

export const PLAN_ZONES: Record<PlanZone['id'], PlanZone> = {
  implantacion: {
    id: 'implantacion',
    title: 'Implantación sugerida (Casa Tipo A)',
    areaLabel: '205,90 m² · 9% de ocupación',
    summary:
      'Ubicada en la meseta superior del terreno para aprovechar el acceso directo desde la vía interna y abrir todas las áreas sociales hacia la vista panorámica.',
    details: [
      'Huella construida de referencia: 205,90 m² en un solo nivel',
      'Incluye 2 puestos de parqueo cubiertos con acceso vehicular suave',
      'Orientación estratégica hacia el paisaje abierto y la brisa del valle',
    ],
  },
  acceso: {
    id: 'acceso',
    title: 'Acceso vehicular y frente vial',
    areaLabel: 'Retiro y zona de ingreso privada',
    summary:
      'Frente directo sobre vía interna pavimentada con retorno vehicular (rotonda), lo que brinda maniobra cómoda, privacidad y bajo tránsito frente al predio.',
    details: [
      'Conexión inmediata a redes de agua y energía del condominio',
      'Sin tránsito pasante gracias al remate en glorieta interna',
      'Transición natural hacia la zona de parqueaderos y acceso peatonal',
    ],
  },
  verde: {
    id: 'verde',
    title: 'Área libre verde y topografía útil',
    areaLabel: '2.173,73 m² · 91% área libre',
    summary:
      'Más del 90% del terreno permanece libre para jardines, terrazas exteriores, piscina o senderos privados entre árboles nativos en crecimiento.',
    details: [
      'Pendiente favorable que permite terrazas escalonadas con vista despejada',
      'Privacidad natural frente a predios vecinos gracias a la amplitud de linderos',
      'Linderos laterales de ~34,7 m y ~45,1 m que brindan gran frente paisajístico',
    ],
  },
  reserva: {
    id: 'reserva',
    title: 'Reserva ecológica y bosque nativo',
    areaLabel: 'Colindancia natural permanente',
    summary:
      'El lindero inferior conecta directamente con zona de bosque y reserva ecológica, asegurando que ninguna construcción futura obstruya la vista ni la tranquilidad.',
    details: [
      'Vista panorámica permanente hacia el valle y corredor boscoso',
      'Presencia de árboles nativos en crecimiento y avistamiento de fauna local',
      'Microclima fresco y silencioso característico del sector',
    ],
  },
};

export const CONDOMINIUM_FEATURES = [
  {
    title: 'Portería y control de acceso',
    description:
      'Ingreso vigilado con registro estricto de visitantes y propietarios desde la vía principal, brindando tranquilidad permanente para su familia.',
  },
  {
    title: 'Vigilancia y circuito de cámaras',
    description:
      'Monitoreo con cámaras de seguridad en puntos estratégicos y cerramiento perimetral consolidado en el conjunto.',
  },
  {
    title: 'Vías internas pavimentadas',
    description:
      'Calzadas asfaltadas en excelente estado, cunetas de drenaje y rotondas amplias que facilitan el recorrido desde la portería hasta el terreno.',
  },
  {
    title: 'Entorno de alta valorización',
    description:
      'Condominio campestre habitado con viviendas contemporáneas de alto nivel, baja densidad y cercanía real al corredor Pereira - Armenia.',
  },
];

export const CONNECTIVITY_HIGHLIGHTS = [
  {
    place: 'Corredor Pereira - Armenia (Km 11)',
    detail: 'Acceso directo sobre vía nacional pavimentada y de doble conectividad regional.',
  },
  {
    place: 'Perímetro urbano de Pereira',
    detail: 'Conexión ágil hacia centros comerciales, clínicas, restaurantes y colegios.',
  },
  {
    place: 'Aeropuerto Internacional Matecaña',
    detail: 'Traslado práctico para viajes nacionales e internacionales sin atravesar congestión extrema.',
  },
  {
    place: 'Eje Cafetero y Armenia',
    detail: 'Ubicación estratégica entre Risaralda y Quindío, ideal como residencia principal o inversión patrimonial.',
  },
];
