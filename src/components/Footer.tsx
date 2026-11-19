import {
  BRAND_NAME,
  CONDOMINIUM_NAME,
  LOCATION_CORRIDOR,
  getWhatsAppUrl,
} from '../data/propertyData';

export function Footer() {
  return (
    <footer className="border-t border-[#E0E0D8] bg-[#F7F7F4] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="font-serif text-lg font-semibold text-[#16241B]">{BRAND_NAME}</p>
          <p className="mt-1 text-sm text-[#4E5B52]">
            {CONDOMINIUM_NAME} · {LOCATION_CORRIDOR}
          </p>
        </div>

        <nav
          aria-label="Enlaces de pie de página"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#4E5B52]"
        >
          <a href="#datos-clave" className="hover:text-[#16241B] hover:underline">
            Datos del terreno
          </a>
          <a href="#entorno-arquitectura" className="hover:text-[#16241B] hover:underline">
            Proyección arquitectónica
          </a>
          <a href="#plano-comercial" className="hover:text-[#16241B] hover:underline">
            Plano comercial
          </a>
          <a href="#seguridad-condominio" className="hover:text-[#16241B] hover:underline">
            Condominio
          </a>
          <a
            href={getWhatsAppUrl('CTA Agendar visita · pie de página')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#16241B] hover:underline"
          >
            Agendar visita
          </a>
        </nav>

        <p className="text-xs text-[#4E5B52]">
          © {new Date().getFullYear()} {BRAND_NAME}
        </p>
      </div>
    </footer>
  );
}
