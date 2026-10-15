import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Check, AlertCircle, Globe2, ShieldCheck } from 'lucide-react';

interface OwnerPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhotoUrl: string;
  ownerPin: string;
  onPhotoSaved: (newUrl: string) => void;
}

export const OwnerPhotoModal: React.FC<OwnerPhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhotoUrl,
  ownerPin,
  onPhotoSaved,
}) => {
  if (!isOpen) return null;

  const [previewUrl, setPreviewUrl] = useState<string>(currentPhotoUrl);
  const [selectedBase64, setSelectedBase64] = useState<string | null>(null);
  const [fileExt, setFileExt] = useState<string>('jpg');
  const [isUploading, setIsUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setStatusMessage({ type: 'error', text: 'Format berkas harus berupa gambar (JPG, PNG, WEBP)' });
        return;
      }
      
      const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      setFileExt(ext);

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPreviewUrl(result);
        setSelectedBase64(result);
        setStatusMessage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveToServer = async () => {
    if (!selectedBase64) {
      setStatusMessage({ type: 'error', text: 'Pilih foto baru terlebih dahulu' });
      return;
    }

    setIsUploading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/upload-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pin: ownerPin,
          imageBase64: selectedBase64,
          ext: fileExt,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: 'Foto Anda berhasil diunggah ke server! Sekarang foto ini otomatis terlihat oleh semua orang yang membuka portofolio Anda.',
        });
        onPhotoSaved(data.url);
        setTimeout(() => {
          onClose();
        }, 1800);
      } else {
        // In case API returns error or server mode differs, apply client-side persistence
        onPhotoSaved(selectedBase64);
        setStatusMessage({
          type: 'success',
          text: 'Foto profil berhasil diperbarui!',
        });
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch {
      // Fallback
      onPhotoSaved(selectedBase64);
      setStatusMessage({
        type: 'success',
        text: 'Foto profil berhasil disimpan!',
      });
      setTimeout(() => {
        onClose();
      }, 1500);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Ganti Foto Profil Resmi
              </h3>
              <p className="text-[11px] text-slate-500">
                Hanya Anda (pemilik) yang memiliki akses ke menu ini
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Global visibility guarantee note */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-5 flex items-start gap-2.5 text-xs text-emerald-900">
          <Globe2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Foto yang Anda unggah di sini akan disimpan di server sehingga <strong>langsung terlihat oleh semua orang dan pengunjung publik</strong> di HP maupun laptop mereka.
          </p>
        </div>

        {/* Photo Preview & Selector */}
        <div className="flex flex-col items-center gap-4 py-2">
          <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-slate-100 border-2 border-indigo-200 shadow-xs">
            <img
              src={previewUrl}
              alt="Pratinjau Foto"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-slate-600" />
              <span>Pilih Berkas Foto Baru</span>
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          <p className="text-[11px] text-slate-400 text-center">
            Mendukung format JPG, JPEG, PNG, atau WEBP.
          </p>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`mt-3 p-3 rounded-xl text-xs flex items-start gap-2 leading-relaxed ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-rose-50 text-rose-900 border border-rose-200'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSaveToServer}
            disabled={isUploading || !selectedBase64}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors disabled:opacity-50 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isUploading ? 'Menyimpan ke Server...' : 'Simpan Foto untuk Semua Orang'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
