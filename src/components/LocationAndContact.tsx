import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, MapPin, MessageCircle, Send } from 'lucide-react';
import {
  BRAND_NAME,
  CONDOMINIUM_NAME,
  CONNECTIVITY_HIGHLIGHTS,
  LOCATION_CORRIDOR,
  getWhatsAppUrl,
} from '../data/propertyData';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  email: '',
  interest: 'Agendar visita privada al terreno',
  message: '',
};

function getLeadWhatsAppMessage(values: FormValues): string {
  return `Me interesa el lote campestre de 2.532 mt2 via Armenia.\n\nHola, soy ${values.name.trim()}. Estoy interesado en: ${values.interest} (${CONDOMINIUM_NAME}, ${LOCATION_CORRIDOR}). Mi teléfono es ${values.phone.trim()} y mi correo es ${values.email.trim()}.${
    values.message.trim() ? ` Comentario: ${values.message.trim()}` : ''
  }`;
}

export function LocationAndContact() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(current: FormValues): FormErrors {
    const nextErrors: FormErrors = {};

    if (!current.name.trim() || current.name.trim().length < 2) {
      nextErrors.name = 'Ingrese su nombre completo para coordinar la atención.';
    }

    const digitsOnly = current.phone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      nextErrors.phone = 'Ingrese un número de WhatsApp o teléfono válido.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(current.email.trim())) {
      nextErrors.email = 'Ingrese un correo electrónico válido.';
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    window.open(
      getWhatsAppUrl('Formulario de contacto', getLeadWhatsAppMessage(values)),
      '_blank',
      'noopener,noreferrer',
    );
    setSubmitted(true);
  }

  const personalizedWhatsAppMessage = getLeadWhatsAppMessage(values);

  return (
    <section id="ubicacion-contacto" className="border-t border-[#E0E0D8] bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left column: Strategic location & direct WhatsApp */}
          <div className="lg:col-span-5">
            <p className="flex items-center gap-2 text-sm font-medium text-[#1F4A34]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {CONDOMINIUM_NAME} · {LOCATION_CORRIDOR}
              </span>
            </p>

            <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-tight text-[#16241B] [text-wrap:balance]">
              Ubicación estratégica y visita privada
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4E5B52]">
              Coordine un recorrido personalizado para conocer la topografía, la vista panorámica y
              las zonas comunes de {CONDOMINIUM_NAME} directamente en el {LOCATION_CORRIDOR}.
            </p>

            <dl className="mt-8 divide-y divide-[#E0E0D8] border-y border-[#E0E0D8]">
              {CONNECTIVITY_HIGHLIGHTS.map((item) => (
                <div key={item.place} className="py-4">
                  <dt className="text-sm font-medium text-[#16241B]">{item.place}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#4E5B52]">{item.detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-xl border border-[#E0E0D8] bg-[#F7F7F4] p-6">
              <h3 className="font-serif text-lg font-medium text-[#16241B]">
                Atención directa por WhatsApp
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4E5B52]">
                Si prefiere disponibilidad inmediata de horarios para visitar el terreno, escríbanos
                directamente.
              </p>
              <a
                href={getWhatsAppUrl('Botón WhatsApp · sección de ubicación')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#1F4A34] bg-white px-5 py-2.5 text-sm font-medium text-[#1F4A34] transition-colors duration-150 hover:bg-[#1F4A34] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Agendar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right column: Lead capture form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#E0E0D8] bg-[#F7F7F4] p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#1F4A34]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#16241B]">
                        Mensaje listo para enviar, {values.name.trim()}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#4E5B52]">
                        Se abrió WhatsApp con los datos de su solicitud de{' '}
                        <span className="font-medium text-[#16241B]">{values.interest}</span> en{' '}
                        {BRAND_NAME}. Para que recibamos la información, confirme el envío desde
                        WhatsApp. Si no se abrió una pestaña, use el botón de abajo.
                      </p>
                    </div>
                  </div>

                  <dl className="mt-6 divide-y divide-[#E0E0D8] border-y border-[#E0E0D8] bg-white px-4 text-sm">
                    <div className="flex flex-wrap justify-between gap-2 py-3">
                      <dt className="text-[#4E5B52]">Teléfono / WhatsApp</dt>
                      <dd className="font-medium text-[#16241B] tabular-nums">{values.phone}</dd>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2 py-3">
                      <dt className="text-[#4E5B52]">Correo electrónico</dt>
                      <dd className="font-medium text-[#16241B]">{values.email}</dd>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2 py-3">
                      <dt className="text-[#4E5B52]">Interés</dt>
                      <dd className="font-medium text-[#16241B]">{values.interest}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={getWhatsAppUrl('Formulario de contacto', personalizedWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#1F4A34] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#173928]"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Confirmar visita por WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setValues(INITIAL_VALUES);
                      }}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#C8CCC2] bg-white px-4 py-2.5 text-sm font-medium text-[#16241B] transition-colors duration-150 hover:border-[#16241B]"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#16241B]">
                      Solicitar visita privada o ficha técnica
                    </h3>
                    <p className="mt-1.5 text-sm text-[#4E5B52]">
                      Complete sus datos y le compartiremos ubicación exacta de llegada y horarios
                      disponibles.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-sm font-medium text-[#16241B]"
                      >
                        Nombre completo
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.name}
                        onChange={(e) => {
                          setValues({ ...values, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Ej. Carolina Restrepo"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'lead-name-error' : undefined}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2.5 text-sm text-[#16241B] placeholder:text-[#7D867F] focus:border-[#1F4A34] focus:outline-none focus:ring-2 focus:ring-[#1F4A34]/20"
                      />
                      {errors.name && (
                        <p
                          id="lead-name-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8C2D19]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-phone"
                        className="block text-sm font-medium text-[#16241B]"
                      >
                        WhatsApp / Teléfono
                      </label>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={values.phone}
                        onChange={(e) => {
                          setValues({ ...values, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="Ej. 310 000 0000"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2.5 text-sm text-[#16241B] placeholder:text-[#7D867F] focus:border-[#1F4A34] focus:outline-none focus:ring-2 focus:ring-[#1F4A34]/20 tabular-nums"
                      />
                      {errors.phone && (
                        <p
                          id="lead-phone-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8C2D19]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="lead-email"
                        className="block text-sm font-medium text-[#16241B]"
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={(e) => {
                          setValues({ ...values, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="correo@ejemplo.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'lead-email-error' : undefined}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2.5 text-sm text-[#16241B] placeholder:text-[#7D867F] focus:border-[#1F4A34] focus:outline-none focus:ring-2 focus:ring-[#1F4A34]/20"
                      />
                      {errors.email && (
                        <p
                          id="lead-email-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#8C2D19]"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-interest"
                        className="block text-sm font-medium text-[#16241B]"
                      >
                        Tipo de interés
                      </label>
                      <select
                        id="lead-interest"
                        name="interest"
                        value={values.interest}
                        onChange={(e) => setValues({ ...values, interest: e.target.value })}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2.5 text-sm text-[#16241B] focus:border-[#1F4A34] focus:outline-none focus:ring-2 focus:ring-[#1F4A34]/20"
                      >
                        <option value="Agendar visita privada al terreno">
                          Agendar visita privada al terreno
                        </option>
                        <option value="Recibir plano comercial y detalles">
                          Recibir plano comercial y detalles
                        </option>
                        <option value="Información de precio e inversión">
                          Información de precio e inversión
                        </option>
                        <option value="Consulta sobre Casa Tipo A">
                          Consulta sobre Casa Tipo A
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lead-message"
                      className="block text-sm font-medium text-[#16241B]"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="lead-message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={(e) => setValues({ ...values, message: e.target.value })}
                      placeholder="Indíquenos qué día u horario prefiere para visitar el condominio o qué detalle desea ampliar."
                      className="mt-1.5 block w-full rounded-lg border border-[#C8CCC2] bg-white px-3.5 py-2.5 text-sm text-[#16241B] placeholder:text-[#7D867F] focus:border-[#1F4A34] focus:outline-none focus:ring-2 focus:ring-[#1F4A34]/20"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#1F4A34] px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#173928] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
                    >
                      <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Solicitar visita privada</span>
                    </button>

                    <p className="text-xs text-[#4E5B52]">
                      Atención personalizada y visita bajo cita previa.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
