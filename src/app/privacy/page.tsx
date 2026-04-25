import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | XO Graphics Full-Service Digital Agency Chennai",
  description: "Privacy Policy for XO Graphics. Learn how we collect, store, and protect your personal data when you use our web development, digital marketing, and SEO services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-[#101B10]">
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">Privacy Policy</h1>
          <p className="text-[#6C8E00] font-bold tracking-widest uppercase text-sm">Effective Date April  2026</p>
          <p className="mt-6 text-gray-500 leading-relaxed max-w-2xl">
            XO Graphics is committed to protecting your privacy. This policy explains how we collect, use, store, and protect your personal information when you interact with our website or engage our services.
          </p>
        </div>

        <div className="space-y-14 font-medium leading-relaxed text-gray-700">

          <section id="section-1" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">1.</span>Who We Are
            </h2>
            <p>
              XO Graphics is a full-service digital agency based in Chennai, Tamil Nadu, India. We offer web development, digital marketing, SEO, social media management, graphic design, brand identity, and the Business Fresher Package a complete digital launch system for new businesses. Our website is <a href="https://www.xographics.in" className="text-[#6C8E00] underline">www.xographics.in</a>.
            </p>
          </section>

          <section id="section-2" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">2.</span>What Information We Collect
            </h2>
            <p className="mb-4 font-bold text-[#101B10]">Information you provide directly:</p>
            <ul className="space-y-2 mb-6">
              {["Full name", "Email address", "Phone number and/or WhatsApp number", "Business name and project details", "Service plan selected", "Any additional information included in your enquiry message"].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1FF6B] border border-[#101B10] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-4 font-bold text-[#101B10]">Information collected automatically:</p>
            <ul className="space-y-2">
              {[
                "IP address and approximate location (city/region level)",
                "Browser type, device type, and operating system",
                "Pages visited, time spent, and actions taken on our website",
                "Referral source (how you found our website)",
                "These are collected via Google Analytics 4 and standard server logs.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1FF6B] border border-[#101B10] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="section-3" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">3.</span>How We Use Your Information
            </h2>
            <ul className="space-y-3">
              {[
                "To respond to your service enquiry and provide relevant information about our packages and pricing.",
                "To process your project or retainer engagement, including invoicing, delivery, and communication.",
                "To send you project updates, content drafts, monthly reports, and performance analytics relevant to your active service.",
                "To improve our website experience, understand user behavior, and optimize our service offerings.",
                "To send occasional promotional updates or offers only to users who have opted in or have an existing client relationship with us.",
                "We do not use your data for automated decision-making or profiling for third-party advertising purposes.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#E1FF6B] bg-[#101B10] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="section-4" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">4.</span>Legal Basis for Processing
            </h2>
            <p>
              We process your personal data on the following legal bases: (a) your consent, where you have explicitly provided it; (b) contractual necessity, where processing is required to fulfill our service agreement with you; and (c) legitimate interests, where we have a reasonable business interest such as improving our services or communicating with existing clients, and your interests and rights are not overridden.
            </p>
          </section>

          <section id="section-5" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">5.</span>Data Sharing & Third Parties
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We only share data in the following limited circumstances:
            </p>
            <ul className="space-y-3">
              {[
                "Service providers: Form submissions are processed via Formspree. Payment processing is handled by Razorpay. Analytics are managed through Google Analytics 4. Each of these providers processes data under their own privacy policies and data processing agreements.",
                "Platform access for digital marketing clients: To manage your social media or ad accounts, we may require access to your Meta Business Suite, Google Ads account, or Google Business Profile. Access is used exclusively for agreed service delivery and is never shared further.",
                "Legal compliance: We may disclose information if required by law, court order, or government authority.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#E1FF6B] bg-[#101B10] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="section-6" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">6.</span>Cookies & Tracking Technologies
            </h2>
            <p className="mb-4">
              Our website uses cookies small text files stored on your device to improve functionality and analyze usage patterns. Specifically:
            </p>
            <ul className="space-y-2">
              {[
                "Essential cookies: Required for basic website functionality (cannot be disabled).",
                "Analytics cookies: Used by Google Analytics 4 to understand how visitors use our site. These are anonymized and do not identify you personally.",
                "You may disable cookies at any time through your browser settings. Note that disabling certain cookies may affect your experience on our site.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1FF6B] border border-[#101B10] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="section-7" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">7.</span>Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Enquiry data is retained for up to 12 months. Active client data is retained for the duration of the engagement plus 2 years. Analytics data is retained per Google Analytics' default retention settings (14 months). You may request earlier deletion at any time see Section 8.
            </p>
          </section>

          <section id="section-8" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">8.</span>Your Rights
            </h2>
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            <ul className="space-y-3">
              {[
                "Access: Request a copy of the personal data we hold about you.",
                "Correction: Request that we update or correct inaccurate data.",
                "Deletion: Request that we delete your personal data (subject to legal or contractual obligations).",
                "Withdrawal of consent: Opt out of marketing communications at any time by replying 'STOP' to any message or emailing us directly.",
                "Portability: Request your data in a portable format where technically feasible.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#E1FF6B] bg-[#101B10] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:xographics1017@gmail.com" className="text-[#6C8E00] underline font-bold">xographics1017@gmail.com</a>
              . We will respond within 7 business days.
            </p>
          </section>

          <section id="section-9" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">9.</span>Data Security
            </h2>
            <p>
              XO Graphics implements appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include restricted access to client data, use of reputable third-party processors with data protection standards, and secure communication channels. However, no online method of data transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section id="section-10" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">10.</span>Children's Privacy
            </h2>
            <p>
              Our services are intended for businesses and individuals aged 18 and above. We do not knowingly collect personal data from anyone under the age of 18. If we become aware that we have inadvertently collected data from a minor, we will delete it promptly.
            </p>
          </section>

          <section id="section-11" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">11.</span>Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our services, applicable law, or our data handling practices. Any updates will be posted on this page with a revised effective date. We encourage you to review this page periodically. Continued use of our website or services after an update constitutes acceptance of the revised policy.
            </p>
          </section>

          <section id="section-12" className="scroll-mt-32">
            <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
              <span className="text-[#6C8E00] mr-2">12.</span>Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at:
            </p>
            <div className="mt-6 bg-[#f7fee7] rounded-2xl p-6 border border-[#101B10]/10">
              <p className="font-black text-[#101B10] text-lg mb-1">XO Graphics</p>
              <p className="text-gray-500 text-sm">Full-Service Digital Agency · Chennai, Tamil Nadu, India</p>
              <a href="mailto:xographics1017@gmail.com" className="inline-block mt-3 text-[#6C8E00] font-bold underline text-sm">xographics1017@gmail.com</a>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
