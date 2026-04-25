import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | XO Graphics Full-Service Digital Agency Chennai",
  description: "Terms of Service for XO Graphics. Read our policies covering web development, digital marketing, SEO, social media management, and graphic design services.",
};

const sections = [
  {
    id: "1", title: "Scope of Agreement",
    body: "These Terms of Service govern all web development, digital marketing, SEO, social media management, graphic design, brand identity, and related services provided by XO Graphics ('we', 'us', or 'our') to clients ('you' or 'your'). By engaging our services whether through a signed proposal, a WhatsApp confirmation, or a payment you acknowledge that you have read, understood, and agreed to these terms in full.",
  },
  {
    id: "2", title: "Non-Disclosure",
    body: "XO Graphics respects the confidentiality of your business. Any proprietary, financial, or strategic information shared with us during an engagement will not be disclosed to any third party without your prior written consent, unless required by law. We expect the same discretion in return: our internal pricing, strategies, and deliverables shared with you remain confidential and should not be shared with competitors or third parties.",
  },
  {
    id: "3", title: "Payment Terms",
    list: [
      "For one-time web development projects: 50% advance payment is required before work begins. The remaining 50% is due upon delivery and client approval, before files are transferred.",
      "For the Business Fresher Package: 50% upfront upon onboarding confirmation. Remaining 50% due after Phase 2 (Digital Setup) is completed.",
      "For monthly digital marketing and SEO retainers: full payment is due at the beginning of each billing cycle before services for that month commence.",
      "No work will be initiated until the applicable advance or monthly fee has been received and confirmed.",
      "Accepted payment methods: Razorpay, GPay, PhonePe, NEFT/IMPS, and UPI. Invoices will be sent via email or WhatsApp.",
    ],
  },
  {
    id: "4", title: "Monthly Retainer Terms",
    list: [
      "Digital marketing and SEO retainers require a minimum 3-month commitment for Basic and Growth plans, and a recommended 6-month commitment for Pro plans.",
      "Fresher Package ongoing retainers (Phase 5) carry a minimum 3-month commitment before transitioning to standard plans.",
      "Retainer fees are non-refundable once the month's services have commenced.",
      "Cancellation of a retainer requires 30 days' written notice (via email or WhatsApp) before the next billing cycle. Cancellation during an active month will not result in a refund for that month.",
    ],
  },
  {
    id: "5", title: "Revisions & Scope of Work",
    list: [
      "Web development projects include the number of revision rounds specified in your chosen plan (1 round for Starter, 2 for Growth, 3 for Pro).",
      "Social media content includes one round of revision per monthly content batch, submitted before scheduling.",
      "Revision requests must be specific, consolidated, and submitted within 48 hours of receiving a deliverable. Vague or piecemeal feedback may extend timelines.",
      "Requests that constitute a significant change to the original brief (new pages, new sections, or structural redesigns) are considered out-of-scope and may be quoted separately.",
    ],
  },
  {
    id: "6", title: "Client Responsibilities",
    list: [
      "You agree to provide all required content, text, images, videos, login credentials, brand assets promptly and in the agreed format before or during the project.",
      "A designated point of contact from your side must be accessible for approvals and feedback. Projects that stall due to unresponsive clients may be paused, and timelines will be adjusted accordingly.",
      "You are responsible for ensuring that all content you provide is accurate, legally owned by you, and cleared for commercial use. XO Graphics is not liable for content-related legal disputes arising from material supplied by the client.",
      "For social media management: content approval must be given within 48 hours of submission. Unapproved content is assumed approved and may be scheduled at our discretion to maintain posting consistency.",
    ],
  },
  {
    id: "7", title: "Delivery & Approval",
    list: [
      "You will be notified when a project or deliverable is complete. You have 3 business days to review and submit feedback or changes.",
      "If no feedback is received within the stated period, the deliverable will be considered approved and either published or handed off as final.",
      "For website projects, final files are delivered via Google Drive or GitHub. You are responsible for backing up all delivered files. XO Graphics does not provide long-term file storage.",
    ],
  },
  {
    id: "8", title: "Ownership & Intellectual Property",
    list: [
      "Upon full and final payment, you receive complete ownership of all custom deliverables created for your project—including website code, design files, and written content.",
      "For digital marketing retainers, all designed posts, reels, stories, and banners created for your brand become your property upon payment of the relevant monthly fee.",
      "All deliverables remain the intellectual property of XO Graphics until full payment has been received. We reserve the right to withhold file transfer in cases of outstanding payment.",
      "You must ensure that any content (logos, images, music, fonts) you provide is legally licensed for commercial use. XO Graphics accepts no liability for third-party copyright infringement related to client-supplied material.",
      "XO Graphics reserves the right to showcase completed work in our portfolio, on social media, and in case studies, unless the client explicitly requests otherwise in writing.",
    ],
  },
  {
    id: "9", title: "SEO & Digital Marketing Results",
    body: "While XO Graphics applies industry-standard SEO practices and data-driven marketing strategies, we do not guarantee specific search rankings, follower counts, lead volumes, or revenue outcomes. Digital results depend on numerous external variables including Google algorithm updates, market competition, ad platform changes, and your business's responsiveness to recommendations. We commit to professional best-effort execution and transparent reporting.",
  },
  {
    id: "10", title: "Paid Advertising (Meta Ads & Google Ads)",
    list: [
      "Ad spend (the actual budget spent on Meta or Google platforms) is paid directly by the client to the respective platform. XO Graphics charges only a management fee for campaign setup, targeting, creative design, and reporting.",
      "XO Graphics is not responsible for ad rejections, account restrictions, or changes in platform policy that affect campaign performance.",
      "We recommend a minimum monthly ad spend of ₹3,000–₹5,000 for meaningful results. Lower budgets may limit reach and conversion potential.",
    ],
  },
  {
    id: "11", title: "Business Fresher Package Specific Terms",
    list: [
      "The Business Fresher Package is a phased 4–5 week setup program. Timelines depend on client availability and prompt provision of required inputs.",
      "The one-time setup fee covers Phases 1–4. Phase 5 (Ongoing Growth) is billed as a monthly retainer from Month 2 onwards.",
      "Add-ons (e.g., visiting card design, WhatsApp catalogue, competitor audit) are billed separately and confirmed in writing before work begins.",
      "After the minimum commitment period, Fresher clients are encouraged to transition to the standard Growth Bundle at our prevailing rate.",
    ],
  },
  {
    id: "12", title: "Third-Party Platforms",
    body: "XO Graphics works across platforms including Instagram, Facebook, LinkedIn, YouTube, Google Business Profile, Google Analytics, Razorpay, Formspree, and others. These platforms are governed by their own terms of service, which may change at any time. We are not responsible for restrictions, suspensions, or functionality changes caused by these third parties.",
  },
  {
    id: "13", title: "Force Majeure & Delays",
    body: "XO Graphics is not liable for delays caused by incomplete client content, delayed approvals, platform outages, natural disasters, internet disruptions, or any circumstances beyond our reasonable control. Where delays are caused by the client, project timelines will be extended accordingly with no penalty to XO Graphics.",
  },
  {
    id: "14", title: "Non-Payment & Recovery",
    body: "In the event of non-payment after delivery or client approval, XO Graphics reserves the right to: suspend all ongoing services immediately, withhold remaining deliverables or file transfers, take legal action to recover the outstanding amount, and publicly retain ownership of delivered work until payment is received.",
  },
  {
    id: "15", title: "Limitation of Liability",
    body: "XO Graphics' total liability to the client for any claim arising from our services shall not exceed the total fees paid by the client in the 3 months preceding the claim. We are not liable for indirect, consequential, or incidental damages including loss of revenue, loss of data, or reputational harm resulting from our services.",
  },
  {
    id: "16", title: "Governing Law",
    body: "These Terms of Service are governed by the laws of India. Any disputes arising from or related to our services shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.",
  },
  {
    id: "17", title: "Updates to These Terms",
    body: "XO Graphics may update these Terms of Service at any time to reflect changes in our services, pricing structure, or applicable law. The updated terms will be posted on this page with a revised date. Continued use of our services after an update constitutes your acceptance of the revised terms.",
  },
];

export default function Terms() {
  return (
    <main className="bg-white min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-[#101B10]">
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">Terms of Service</h1>
          <p className="text-[#6C8E00] font-bold tracking-widest uppercase text-sm">Last Updated April  2026</p>
          <p className="mt-6 text-gray-500 leading-relaxed max-w-2xl">
            Please read these terms carefully before engaging XO Graphics for any service. These terms establish the professional standards, expectations, and protections for both parties.
          </p>
        </div>

        {/* Quick nav */}
        <div className="mb-16 bg-[#f7fee7] rounded-2xl p-6 border border-[#101B10]/10">
          <p className="text-xs font-black uppercase tracking-widest text-[#6C8E00] mb-4">Jump to section</p>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#section-${s.id}`}
                className="text-xs font-bold text-[#101B10] bg-white px-3 py-1.5 rounded-lg border border-[#101B10]/10 hover:bg-[#101B10] hover:text-[#E1FF6B] transition-colors">
                {s.id}. {s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-14 font-medium leading-relaxed text-gray-700">
          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="scroll-mt-32">
              <h2 className="text-xl font-black text-[#101B10] uppercase tracking-tight border-b border-gray-100 pb-3 mb-5">
                <span className="text-[#6C8E00] mr-2">{s.id}.</span>{s.title}
              </h2>
              {s.body && <p>{s.body}</p>}
              {s.list && (
                <ul className="space-y-3">
                  {s.list.map((li, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#E1FF6B] bg-[#101B10] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
