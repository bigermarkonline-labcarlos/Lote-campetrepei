import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Download, FileText, MessageCircle, X } from 'lucide-react';
import { DOSSIER_PDF_PATH, getWhatsAppUrl } from '../data/propertyData';

interface DossierRequestModalProps {
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export function DossierRequestModal({ onClose }: DossierRequestModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [hasAccess, setHasAccess] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Ingrese su nombre completo.';
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (
      phoneDigits.length !== 10 &&
      !(phoneDigits.length === 12 && phoneDigits.startsWith('57'))
    ) {
      nextErrors.phone = 'Ingrese un WhatsApp completo: 10 dígitos, o +57 seguido de 10 dígitos.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const dossierUrl = new URL(DOSSIER_PDF_PATH, window.location.origin).toString();
    const message = `Hola, soy ${name.trim()}. Mi WhatsApp es ${phone.trim()}. Quiero recibir la Ficha Técnica y Valorización de Casas Proyectadas del Lote, Condominio Alicante.\n\nDossier arquitectónico y proyecto residencial: ${dossierUrl}`;
    const nextWhatsAppUrl = getWhatsAppUrl('CTA de descarga del dossier', message);
    setWhatsAppUrl(nextWhatsAppUrl);
    setHasAccess(true);
    window.open(nextWhatsAppUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-dialog-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
    >
      <div className="w-full max-w-lg rounded-xl border border-[#E0E0D8] bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-[#1F4A34]">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Dossier del Lote
            </p>
            <h2
              id="dossier-dialog-title"
              className="mt-2 font-serif text-2xl font-medium text-[#16241B]"
            >
              Reciba la ficha técnica por WhatsApp
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar formulario"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E0E0D8] bg-[#F7F7F4] text-[#16241B] hover:bg-[#EFEFEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#4E5B52]">
          Ingrese únicamente su nombre y un WhatsApp completo. Al validar los datos, se abrirán
          WhatsApp y las opciones para ver o descargar el dossier.
        </p>

        {hasAccess ? (
          <div className="mt-6 space-y-4" role="status">
            <p className="text-sm leading-relaxed text-[#4E5B52]">
              Datos validados. WhatsApp se abrió con el mensaje preparado; ahora puede consultar o
              descargar el dossier.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={DOSSIER_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2 text-sm font-medium text-[#16241B] hover:bg-[#F7F7F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Ver PDF
              </a>
              <a
                href={DOSSIER_PDF_PATH}
                download="dossier-arquitectonico-lote-alicante.pdf"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2 text-sm font-medium text-[#16241B] hover:bg-[#F7F7F4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Descargar PDF
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#1F4A34] px-3.5 py-2 text-sm font-medium text-white hover:bg-[#173928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Abrir WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <div>
            <label htmlFor="dossier-name" className="block text-sm font-medium text-[#16241B]">
              Nombre
            </label>
            <input
              ref={nameInputRef}
              id="dossier-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'dossier-name-error' : undefined}
              className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2.5 text-sm text-[#16241B] focus:border-[#1F4A34] focus:outline-none focus:ring-2 focus:ring-[#1F4A34]/20"
            />
            {errors.name && (
              <p id="dossier-name-error" role="alert" className="mt-1 text-xs text-[#8C2D19]">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="dossier-phone" className="block text-sm font-medium text-[#16241B]">
              WhatsApp
            </label>
            <input
              id="dossier-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="Ej. 312 123 4567 o +57 312 123 4567"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'dossier-phone-error' : undefined}
              className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2.5 text-sm text-[#16241B] placeholder:text-[#7D867F] focus:border-[#1F4A34] focus:outline-none focus:ring-2 focus:ring-[#1F4A34]/20"
            />
            {errors.phone && (
              <p id="dossier-phone-error" role="alert" className="mt-1 text-xs text-[#8C2D19]">
                {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#1F4A34] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#173928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Continuar por WhatsApp
          </button>
          </form>
        )}
      </div>
    </div>
  );
}
