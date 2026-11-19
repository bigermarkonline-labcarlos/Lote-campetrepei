import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { MediaAsset } from '../data/propertyData';
import { ResilientImage } from './ResilientImage';

interface ImageModalProps {
  asset: MediaAsset | null;
  onClose: () => void;
}

export function ImageModal({ asset, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!asset) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [asset, onClose]);

  if (!asset) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={asset.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl border border-[#E0E0D8] bg-white shadow-xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#E0E0D8] px-5 py-3.5">
          <div>
            <h3 className="font-serif text-lg font-medium text-[#16241B]">{asset.title}</h3>
            <p className="text-xs text-[#4E5B52]">{asset.caption}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar vista ampliada"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E0E0D8] bg-[#F7F7F4] text-[#16241B] transition-colors duration-150 hover:bg-[#EFEFEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A34]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-auto bg-[#EFEFEA] p-2 sm:p-4">
          <ResilientImage
            src={asset.src}
            alt={asset.alt}
            fallbackTitle={asset.title}
            className="mx-auto max-h-[68vh] w-auto rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}
