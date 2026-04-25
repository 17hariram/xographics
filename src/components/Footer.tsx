import Link from "next/link";
import { Instagram, MessageCircle, Mail, Linkedin, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/xographics.in",      icon: <Instagram size={17} /> },
  { label: "WhatsApp",  href: "https://wa.me/918072888570",               icon: <MessageCircle size={17} /> },
  { label: "Email",     href: "mailto:xographics1017@gmail.com",          icon: <Mail size={17} /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/xo-graphics",  icon: <Linkedin size={17} /> },
  { label: "Facebook",  href: "https://www.facebook.com/share/1B4dkCD19j/",          icon: <Facebook size={17} /> },
  { label: "YouTube",   href: "https://youtube.com/@xographics",          icon: <Youtube size={17} /> },
];

const webServices = [
  "Landing Page Development",
  "Business Website Design",
  "Website Maintenance",
  "Speed Optimization",
  "On-Page SEO",
  "Google Analytics Setup",
];

const marketingServices = [
  "Social Media Management",
  "SEO Optimization",
  "Google Business Profile",
  "Meta & Google Ads",
  "Content Creation",
  "Analytics & Reporting",
];

export default function Footer() {
  return (
    <footer className="bg-[#101B10] pt-20 pb-10 px-6 border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black text-white mb-2 tracking-tight">
              XO<span className="text-[#E1FF6B]">Graphics</span>
            </h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
              Full-service digital agency. We build websites and market them one team, one strategy, one invoice.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={`XO Graphics on ${s.label}`}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#E1FF6B] hover:text-[#101B10] hover:border-[#E1FF6B] transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Web Services */}
          <div>
            <h4 className="text-[#E1FF6B] font-bold mb-5 uppercase text-xs tracking-[0.25em]">Web Development</h4>
            <ul className="space-y-2.5">
              {webServices.map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-white/50 text-sm hover:text-white transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h4 className="text-[#E1FF6B] font-bold mb-5 uppercase text-xs tracking-[0.25em]">Digital Marketing</h4>
            <ul className="space-y-2.5">
              {marketingServices.map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-white/50 text-sm hover:text-white transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#E1FF6B] font-bold mb-5 uppercase text-xs tracking-[0.25em]">Company</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><Link href="#about"     className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#pricing"   className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#contact"   className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/terms"     className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy"   className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-bold uppercase tracking-widest">
          <p>© XO Graphics, All Rights Reserved ( 2026)</p>
          <div className="flex gap-8">
            <Link href="/terms"   className="hover:text-[#E1FF6B] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-[#E1FF6B] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
