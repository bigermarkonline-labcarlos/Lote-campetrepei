import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, getWhatsAppUrl } from '../data/propertyData';

const NAV_ITEMS = [
  { label: 'Terreno', href: '#datos-clave' },
  { label: 'Plano comercial', href: '#plano-comercial' },
  { label: 'Condominio', href: '#seguridad-condominio' },
  { label: 'Ubicación', href: '#ubicacion-contacto' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E0E0D8] bg-[#F7F7F4]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#inicio"
          className="font-serif text-lg font-semibold tracking-tight text-[#16241B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F4A34]"
        >
          {BRAND_NAME}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4E5B52]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#16241B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F4A34]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA + mobile drawer toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl('CTA Agendar visita privada · menú superior')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#1F4A34] px-4 py-2.5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#173928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
          >
            Agendar visita privada
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E0E0D8] bg-white text-[#16241B] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Navegación móvil"
          className="border-t border-[#E0E0D8] bg-[#F7F7F4] px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center text-sm font-medium text-[#16241B] border-b border-[#E0E0D8]/60 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl('CTA Agendar visita privada · menú móvil')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex min-h-[44px] items-center justify-center rounded-lg bg-[#1F4A34] px-4 py-2.5 text-sm font-medium text-white"
            >
              Agendar visita privada
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
