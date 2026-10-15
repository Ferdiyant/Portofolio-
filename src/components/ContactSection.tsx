import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Copy, ExternalLink, Linkedin } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { TranslationDict, Language } from '../data/translations';

interface ContactSectionProps {
  profile: PortfolioProfile;
  t: TranslationDict;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, t, lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formState, setFormState] = useState({
    senderName: '',
    senderContact: '',
    purpose: t.contact.purposeOptions[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.senderName || !formState.message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        senderName: '',
        senderContact: '',
        purpose: t.contact.purposeOptions[0],
        message: '',
      });
    }, 4500);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Muhammad Ferdiyanto,\n\nName: ${formState.senderName || '-'}\nContact: ${formState.senderContact || '-'}\nPurpose: ${formState.purpose}\n\nMessage: ${formState.message || '-'}`
    );
    window.open(`https://wa.me/62${profile.phone.startsWith('0') ? profile.phone.slice(1) : profile.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5">
            {t.contact.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">{t.contact.emailLabel}</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5 break-all">
                    {profile.email}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{t.contact.emailSub}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-md border border-slate-200 transition-colors shrink-0 inline-flex items-center gap-1 cursor-pointer"
                title="Salin email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedEmail ? t.contact.copiedBtn : t.contact.copyBtn}</span>
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">{t.contact.phoneLabel}</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5 tabular-nums">
                    {profile.phone}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{t.contact.phoneSub}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-md border border-slate-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  title="Salin nomor"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedPhone ? t.contact.copiedBtn : t.contact.copyBtn}</span>
                </button>

                <a
                  href={`https://wa.me/62${profile.phone.startsWith('0') ? profile.phone.slice(1) : profile.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">{t.contact.locationLabel}</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  {profile.location}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {t.contact.locationSub}
                </div>
              </div>
            </div>

            {/* LinkedIn Connection */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.contact.linkedinLabel}</div>
                  <div className="text-[11px] text-slate-500">{t.contact.linkedinSub}</div>
                </div>
              </div>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>{t.contact.openLinkedin}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {t.contact.formSub}
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-950">
                  {t.contact.successTitle}
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-emerald-700 underline hover:text-emerald-900 pt-2 cursor-pointer"
                >
                  {t.contact.sendAnotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formState.senderName}
                      onChange={(e) => setFormState({ ...formState, senderName: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.contactLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.contactPlaceholder}
                      value={formState.senderContact}
                      onChange={(e) => setFormState({ ...formState, senderContact: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.purposeLabel}
                  </label>
                  <select
                    value={formState.purpose}
                    onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    {t.contact.purposeOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.sendBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.contact.forwardWaBtn}</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
