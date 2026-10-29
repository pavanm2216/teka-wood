import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS } from '../data/proposalData';
import { CheckCircle2, Send, AlertCircle, RefreshCw, FileText, Lock } from 'lucide-react';

interface ContactSubmission {
  id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  enquiryType: string;
  landArea?: string;
  message: string;
  timestamp: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    enquiryType: 'Ramanathapuram Project',
    landArea: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<ContactSubmission | null>(null);
  const [savedSubmissions, setSavedSubmissions] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('natures_canopy_inquiries');
      if (stored) {
        setSavedSubmissions(JSON.parse(stored));
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format (e.g. name@company.com).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide inquiry details (at least 10 characters).';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the project terms and data privacy notice.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: `NC-${Date.now().toString().slice(-6)}`,
        fullName: formData.fullName.trim(),
        companyName: formData.companyName.trim() || undefined,
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        enquiryType: formData.enquiryType,
        landArea: formData.landArea.trim() || undefined,
        message: formData.message.trim(),
        timestamp: new Date().toLocaleString(),
      };

      try {
        const updated = [newSubmission, ...savedSubmissions];
        localStorage.setItem('natures_canopy_inquiries', JSON.stringify(updated));
        setSavedSubmissions(updated);
      } catch {
        // storage fallback
      }

      setIsSubmitting(false);
      setSubmissionSuccess(newSubmission);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        enquiryType: 'Ramanathapuram Project',
        landArea: '',
        message: '',
        consent: false,
      });
    }, 700);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F5F1E7]">
      {/* Editorial Header */}
      <section className="py-16 sm:py-20 bg-[#102B23] text-[#F5F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-3">
              Direct Inquiries & Project Evaluation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E7] leading-tight mb-6">
              Contact Nature’s Canopy
            </h1>
            <p className="text-base sm:text-lg text-[#F5F1E7]/80 font-light leading-relaxed">
              Start a conversation regarding the 350-acre Ramanathapuram proposal, private
              plantation development, or turnkey silvicultural management.
            </p>
          </div>
        </div>
      </section>

      {/* Split Layout: Photography & Form */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual & Trust markers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-sm overflow-hidden border border-[#DCE5D8] shadow-sm">
              <img
                src={BRAND_ASSETS.heroImage}
                alt="Teak plantation road in Tamil Nadu"
                className="w-full h-[360px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-white border border-[#DCE5D8] p-6 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block">
                Direct Consultation Process
              </span>
              <h3 className="font-serif text-xl text-[#102B23] font-medium">
                Structured Engagement Timeline
              </h3>
              <p className="text-xs text-[#575D52] leading-relaxed">
                Every inquiry submitted via our desk is cataloged and routed directly to our
                agroforestry operations and financial evaluation team.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#292D27]">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 bg-[#FAF8F2] border border-[#DCE5D8] flex items-center justify-center rounded-full text-[11px] font-mono text-[#173F32] shrink-0 font-semibold">
                    1
                  </span>
                  <span>Review of land parcel area, geographic location, and water access</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 bg-[#FAF8F2] border border-[#DCE5D8] flex items-center justify-center rounded-full text-[11px] font-mono text-[#173F32] shrink-0 font-semibold">
                    2
                  </span>
                  <span>Provision of detailed CAD layout and modular quotation parameters</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 bg-[#FAF8F2] border border-[#DCE5D8] flex items-center justify-center rounded-full text-[11px] font-mono text-[#173F32] shrink-0 font-semibold">
                    3
                  </span>
                  <span>Direct consultation with silvicultural engineers and project principals</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F2] border border-[#DCE5D8] p-5 rounded-sm flex items-start gap-3">
              <Lock className="w-4 h-4 text-[#B78B53] shrink-0 mt-0.5" />
              <div className="text-xs text-[#575D52] leading-relaxed">
                <span className="font-semibold text-[#102B23] block mb-0.5">Data Integrity & Privacy</span>
                Your project details and contact data are strictly confidential and never shared with third-party brokers.
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-white border border-[#DCE5D8] p-8 sm:p-10 rounded-sm shadow-sm">
            {submissionSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#DCE5D8]/50 text-[#173F32] rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8 text-[#173F32]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium">
                  Project Inquiry Cataloged
                </h3>
                <p className="text-sm text-[#575D52] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{submissionSuccess.fullName}</strong>. Your inquiry has been
                  logged with reference number{' '}
                  <strong className="font-mono text-[#173F32]">{submissionSuccess.id}</strong>.
                </p>

                <div className="bg-[#FAF8F2] border border-[#DCE5D8] p-5 rounded-sm max-w-md mx-auto text-left text-xs text-[#575D52] space-y-2 mt-6">
                  <div className="flex justify-between border-b border-[#DCE5D8] pb-1.5">
                    <span>Enquiry Category:</span>
                    <strong className="text-[#102B23]">{submissionSuccess.enquiryType}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#DCE5D8] pb-1.5">
                    <span>Email Contact:</span>
                    <strong className="text-[#102B23]">{submissionSuccess.email}</strong>
                  </div>
                  {submissionSuccess.landArea && (
                    <div className="flex justify-between border-b border-[#DCE5D8] pb-1.5">
                      <span>Stated Land Area:</span>
                      <strong className="text-[#102B23]">{submissionSuccess.landArea}</strong>
                    </div>
                  )}
                  <div className="flex justify-between pt-1">
                    <span>Logged At:</span>
                    <span>{submissionSuccess.timestamp}</span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#FAF8F2] hover:bg-[#DCE5D8] border border-[#DCE5D8] transition-colors rounded-sm cursor-pointer"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B78B53] font-semibold block mb-1">
                    Inquiry Form
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#102B23] font-medium">
                    Discuss a Teak Plantation Project
                  </h2>
                </div>

                {/* Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold text-[#102B23]">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Anand Ranganathan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DCE5D8]'
                      } rounded-sm focus:outline-none focus:border-[#173F32]`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="companyName" className="block text-xs font-semibold text-[#102B23]">
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      placeholder="e.g. Horizon Agro Holdings"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5D8] rounded-sm focus:outline-none focus:border-[#173F32]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-[#102B23]">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DCE5D8]'
                      } rounded-sm focus:outline-none focus:border-[#173F32]`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#102B23]">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5D8] rounded-sm focus:outline-none focus:border-[#173F32]"
                    />
                  </div>
                </div>

                {/* Enquiry Type & Land Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="enquiryType" className="block text-xs font-semibold text-[#102B23]">
                      Enquiry Category *
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5D8] rounded-sm focus:outline-none focus:border-[#173F32]"
                    >
                      <option value="Ramanathapuram Project">Ramanathapuram Project Proposal</option>
                      <option value="Corporate Project">Corporate Plantation Development</option>
                      <option value="Plantation Services">Plantation Management Services</option>
                      <option value="General Enquiry">General / Landowner Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="landArea" className="block text-xs font-semibold text-[#102B23]">
                      Estimated Land Area / Scale (Optional)
                    </label>
                    <input
                      id="landArea"
                      type="text"
                      placeholder="e.g. 50 Acres, 350 Acres"
                      value={formData.landArea}
                      onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5D8] rounded-sm focus:outline-none focus:border-[#173F32]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#102B23]">
                    Project Details & Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your land parcel, project requirements, or questions regarding the Ramanathapuram teak proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DCE5D8]'
                    } rounded-sm focus:outline-none focus:border-[#173F32]`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1.5">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-[#173F32]"
                    />
                    <span className="text-xs text-[#575D52] leading-relaxed">
                      I understand that proposal figures represent illustrative planning projections
                      and agree to receive project correspondence from Nature’s Canopy.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#102B23] bg-[#B78B53] hover:bg-[#D4A972] transition-colors rounded-sm cursor-pointer shadow-sm disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-[#102B23]" />
                        <span>Logging Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
