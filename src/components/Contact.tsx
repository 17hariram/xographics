"use client";
import { useState, useEffect } from "react";
import { Send, MessageCircle, Mail, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const contactPlatforms = [
  { label: "WhatsApp",  href: "https://wa.me/918072888570",                    icon: <MessageCircle size={20} /> },
  { label: "Email",     href: "mailto:xographics1017@gmail.com",               icon: <Mail size={20} /> },
  { label: "Instagram", href: "https://instagram.com/xographics.in",            icon: <Instagram size={20} /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/xo-graphics",       icon: <Linkedin size={20} /> },
  { label: "Facebook",  href: "https://www.facebook.com/share/1B4dkCD19j/",               icon: <Facebook size={20} /> },
  { label: "YouTube",   href: "https://youtube.com/@xographics",               icon: <Youtube size={20} /> },
];

export default function Contact() {
  const [whatsappSame, setWhatsappSame] = useState(false);
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("none");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (!hash.includes("plan=")) return;
      const planValue = hash.split("plan=")[1];
      const planMap: Record<string, string> = {
        "web-starter":     "Web Starter (₹5,999)",
        "web-growth":      "Web Growth (₹14,999)",
        "web-pro":         "Web Pro (₹29,999+)",
        "dm-basic":        "DM Basic (₹ 2,999/mo)",
        "dm-growth":       "DM Growth (₹5,999/mo)",
        "dm-pro":          "DM Pro (₹11,999/mo)",
        "fresher-starter": "Fresher Starter (₹6,999 + ₹1,999/mo)",
        "fresher-growth":  "Fresher Growth (₹9,999 + ₹2,999/mo)",
        "fresher-pro":     "Fresher Pro Launch (₹14,999 + ₹3,999/mo)",
      };
      if (planMap[planValue]) setSelectedPlan(planMap[planValue]);
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <section id="contact" className="py-24 bg-white px-6 border-t border-gray-100" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left */}
        <div>
          <p className="text-sm font-mono text-[#6C8E00] uppercase tracking-[0.3em] mb-4">Let&apos;s talk</p>
          <h2 id="contact-heading" className="text-5xl font-bold text-[#101B10] mb-6 tracking-tighter">GET IN TOUCH</h2>
          <p className="text-gray-500 mb-12 text-lg leading-relaxed">
            Pick a channel and reach out directly. We respond within 2 hours on WhatsApp,
            and within 24 hours on all other platforms.
          </p>

          {/* Icon grid label only, no phone/email/username shown */}
          <div className="grid grid-cols-3 gap-3">
            {contactPlatforms.map((p) => (
              <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                aria-label={`Contact XO Graphics on ${p.label}`}
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border border-[#101B10]/10 hover:border-[#101B10] hover:bg-[#f7fee7] transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-[#101B10] flex items-center justify-center text-[#E1FF6B] group-hover:bg-[#E1FF6B] group-hover:text-[#101B10] transition-all duration-200">
                  {p.icon}
                </div>
                <span className="text-xs font-bold text-[#101B10] tracking-wide">{p.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-[#101B10] p-8 md:p-10 rounded-[40px] shadow-2xl">
          <h3 className="text-white font-black text-xl mb-8 uppercase tracking-widest">Send an Enquiry</h3>

          {submitted ? (
            <div className="text-center py-16">
              <div className="text-[#E1FF6B] text-5xl mb-4">✓</div>
              <p className="text-white font-bold text-lg">Message received!</p>
              <p className="text-white/50 text-sm mt-2">We&apos;ll get back to you within 2 hours on WhatsApp.</p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xnjalnlo"
              method="POST"
              className="space-y-4"
              onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
            >
              <input name="name" placeholder="Your Name" required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-[#E1FF6B] transition-colors text-sm" />

              <input name="email" type="email" placeholder="Email Address" required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-[#E1FF6B] transition-colors text-sm" />

              <input name="phone" type="tel" placeholder="Phone Number" required
                value={phone}
                onChange={(e) => { setPhone(e.target.value); if (whatsappSame) setWhatsapp(e.target.value); }}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-[#E1FF6B] transition-colors text-sm" />

              <div>
                <input name="whatsapp" type="tel" placeholder="WhatsApp Number"
                  value={whatsappSame ? phone : whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  disabled={whatsappSame}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-[#E1FF6B] transition-colors text-sm disabled:opacity-50" />
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input type="checkbox" checked={whatsappSame} onChange={() => { setWhatsappSame(!whatsappSame); if (!whatsappSame) setWhatsapp(phone); else setWhatsapp(""); }} className="accent-[#E1FF6B] w-4 h-4" />
                  <span className="text-white/50 text-xs">Same as phone number</span>
                </label>
              </div>

              <select name="plan" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/70 outline-none focus:border-[#E1FF6B] transition-colors text-sm">
                <option value="none">Select a Plan (Optional)</option>
                <optgroup label="Web Development">
                  <option value="Web Starter (₹5,999)">Web Starter ₹5,999</option>
                  <option value="Web Growth (₹14,999)">Web Growth ₹14,999</option>
                  <option value="Web Pro (₹29,999+)">Web Pro ₹29,999+</option>
                </optgroup>
                <optgroup label="Digital Marketing">
                  <option value="DM Basic (₹ 2,999/mo)">DM Basic ₹ 2,999/mo</option>
                  <option value="DM Growth (₹5,999/mo)">DM Growth ₹5,999/mo</option>
                  <option value="DM Pro (₹11,999/mo)">DM Pro ₹11,999/mo</option>
                </optgroup>
                <optgroup label="Business Fresher Package">
                  <option value="Fresher Starter (₹6,999 + ₹1,999/mo)">Fresher Starter ₹6,999 + ₹1,999/mo</option>
                  <option value="Fresher Growth (₹9,999 + ₹2,999/mo)">Fresher Growth ₹9,999 + ₹2,999/mo</option>
                  <option value="Fresher Pro Launch (₹14,999 + ₹3,999/mo)">Fresher Pro Launch ₹14,999 + ₹3,999/mo</option>
                </optgroup>
                <option value="Custom / Not sure">Custom / Not sure yet</option>
              </select>

              <textarea name="message" placeholder="Tell us about your project or business..." rows={4} required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none focus:border-[#E1FF6B] transition-colors text-sm resize-none" />

              <button type="submit"
                className="w-full bg-[#E1FF6B] text-[#101B10] font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-[0.15em]">
                Submit Enquiry <Send size={16} />
              </button>
              <p className="text-center text-white/30 text-xs">We respond within 2 hours on WhatsApp</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
