"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  period: string;
  badge?: string;
  highlight: boolean;
  features: string[];
  notIncluded?: string[];
  planId: string;
  ctaLabel: string;
};

const webPlans: Plan[] = [
  {
    name: "Starter",
    price: "₹5,999",
    period: "one-time",
    highlight: false,
    planId: "web-starter",
    ctaLabel: "Choose Starter",
    features: [
      "1-page responsive website (up to 5 sections)",
      "Mobile-first design",
      "WhatsApp Chat button integration",
      "Google Maps embed",
      "Contact form setup",
      "Social media links",
      "Basic on-page SEO (title, meta, alt text)",
      "1 round of revisions",
      "Delivery in 5–7 working days",
    ],
    notIncluded: ["Multi-page website", "E-commerce / booking system", "Google Analytics setup"],
  },
  {
    name: "Growth",
    price: "₹14,999",
    period: "one-time",
    badge: "Most Popular",
    highlight: true,
    planId: "web-growth",
    ctaLabel: "Choose Growth",
    features: [
      "Multi-page website (up to 6 pages)",
      "Premium custom UI design",
      "Mobile + tablet optimized",
      "Lead capture form with email notification",
      "Google Analytics 4 setup",
      "Google Search Console setup",
      "Full on-page SEO (all pages)",
      "LocalBusiness schema markup",
      "Image optimization for fast loading",
      "2 rounds of revisions",
      "Sitemap + Robots.txt",
      "Delivery in 10–15 working days",
      "30-day post-launch support",
    ],
    notIncluded: ["E-commerce store", "Payment gateway"],
  },
  {
    name: "Pro",
    price: "₹29,999+",
    period: "one-time",
    highlight: false,
    planId: "web-pro",
    ctaLabel: "Get a Quote",
    features: [
      "Custom multi-page website (7–15 pages)",
      "Full custom UI/UX design",
      "CMS integration (client-editable content)",
      "E-commerce or booking system (if needed)",
      "Payment gateway (Razorpay/PayU)",
      "Full on-page + technical SEO",
      "Core Web Vitals optimization",
      "GA4 + goal/event tracking",
      "3 rounds of revisions",
      "Delivery in 21–35 working days",
      "60-day post-launch support",
      "Training session for CMS usage",
    ],
  },
];

const dmPlans: Plan[] = [
  {
    name: "Basic",
    price: "₹ 2,999",
    period: "/ month",
    highlight: false,
    planId: "dm-basic",
    ctaLabel: "Choose Basic",
    features: [
      "12 posts/month (3 per week)",
      "4 Reels/month",
      "Captions + hashtag research",
      "Custom  designs",
      "Instagram + WhatsApp Business Status",
      "1 Festival/Offer poster per month",
      "3-month minimum commitment",
    ],
    notIncluded: ["Analytics report", "Meta/Google Ads", "SEO"],
  },
  {
    name: "Growth",
    price: "₹5,999",
    period: "/ month",
    badge: "Most Popular",
    highlight: true,
    planId: "dm-growth",
    ctaLabel: "Choose Growth",
    features: [
      "20 posts/month",
      "8 Reels/month",
      "CTA-based captions + strategy",
      "Premium branded designs",
      "Instagram + Facebook",
      "Monthly Content Strategy Plan",
      "Monthly Performance Report",
      "Google Business Profile management",
      "Priority WhatsApp support",
      "3-month minimum commitment",
      "2 FREE festival/offer posters/month",
    ],
    notIncluded: ["Google/Meta Ads", "LinkedIn management"],
  },
  {
    name: "Pro",
    price: "₹11,999",
    period: "/ month",
    highlight: false,
    planId: "dm-pro",
    ctaLabel: "Choose Pro",
    features: [
      "30 posts/month",
      "12–16 Reels/month",
      "Instagram + Facebook + LinkedIn",
      "Advanced content strategy",
      "Detailed monthly analytics",
      "Meta Ads + Google Ads setup",
      "On-page SEO (up to 5 pages)",
      "Competitor deep-dive analysis",
      "Monthly 1-hour growth call",
      "6-month recommended commitment",
    ],
    notIncluded: ["Ad spend budget (paid by client)"],
  },
];

const fresherPlans: Plan[] = [
  {
    name: "Fresher Starter",
    price: "₹6,999",
    period: "+ ₹1,999/mo",
    highlight: false,
    planId: "fresher-starter",
    ctaLabel: "Choose Starter",
    features: [
      "Logo design (3 concepts, 1 revision)",
      "Brand color palette + typography",
      "1-page responsive starter website",
      "Google Business Profile setup",
      "Instagram + Facebook account setup",
      "WhatsApp Business setup",
      "10 starter posts (ready to publish)",
      "Basic on-page SEO",
      "Photography direction guide",
      "First 30-day analytics report",
    ],
    notIncluded: ["Paid ads campaign", "Local directory submissions"],
  },
  {
    name: "Fresher Growth",
    price: "₹9,999",
    period: "+ ₹2,999/mo",
    badge: "Best for New Businesses",
    highlight: true,
    planId: "fresher-growth",
    ctaLabel: "Choose Growth",
    features: [
      "Everything in Starter, plus:",
      "Brand voice document + tagline (3 options)",
      "Brand kit (PNG + SVG logos, Google Drive folder)",
      "Multi-platform bios (IG, FB, GBP, WhatsApp)",
      "Content calendar (Month 1 28 days)",
      "3 Reels concepts + shot-list scripts",
      "5 Instagram highlight cover icons",
      "5 service/product descriptions (SEO-friendly)",
      "Local directory submissions (10+ listings)",
      "Starter Meta Ads campaign (₹500–₹1k budget)",
      "WhatsApp Business catalogue (up to 10 items)",
      "Google Search Console setup",
      "Review request system (Google + WhatsApp)",
      "Monthly: 8 posts, 4 stories, GBP updates, analytics",
    ],
  },
  {
    name: "Fresher Pro Launch",
    price: "₹14,999",
    period: "+ ₹3,999/mo",
    highlight: false,
    planId: "fresher-pro",
    ctaLabel: "Get a Quote",
    features: [
      "Everything in Growth, plus:",
      "Business identity consulting (30-min session)",
      "Competitor audit (3 competitors analyzed)",
      "Pricing & offer design consultation",
      "Guided phone photography shoot (1 hour)",
      "Email setup guidance (Gmail / G-Suite)",
      "Printed visiting card design file",
      "First-month micro-budget ad strategy",
      "Monthly: 12 posts, strategy check-in call",
      "Upsell pathway to full Growth Bundle",
      "Year 1 total value roadmap provided",
    ],
    notIncluded: ["Ad spend budget (paid by client)"],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`flex flex-col rounded-3xl border-2 p-7 transition-all duration-300 ${plan.highlight ? "bg-[#101B10] border-[#E1FF6B] text-white shadow-2xl scale-[1.02]" : "bg-white border-[#101B10]/10 hover:border-[#101B10]/40"}`}>
      {plan.badge && (
        <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] bg-[#E1FF6B] text-[#101B10] px-3 py-1.5 rounded-full mb-4 self-start">
          {plan.badge}
        </span>
      )}
      <h3 className={`text-lg font-black uppercase tracking-wider mb-1 ${plan.highlight ? "text-white" : "text-[#101B10]"}`}>{plan.name}</h3>
      <div className="flex items-end gap-1 mb-6 mt-2">
        <span className={`text-3xl font-black ${plan.highlight ? "text-[#E1FF6B]" : "text-[#101B10]"}`}>{plan.price}</span>
        <span className={`text-sm mb-1 font-medium ${plan.highlight ? "text-white/50" : "text-gray-400"}`}>{plan.period}</span>
      </div>
      <ul className="space-y-2 mb-6 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-[#E1FF6B]" : "text-[#6C8E00]"}`}/>
            <span className={plan.highlight ? "text-white/90" : "text-gray-600"}>{f}</span>
          </li>
        ))}
        {plan.notIncluded?.map((f, i) => (
          <li key={`no-${i}`} className="flex items-start gap-2 text-sm">
            <X size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-white/25" : "text-gray-300"}`}/>
            <span className={plan.highlight ? "text-white/35" : "text-gray-300"}>{f}</span>
          </li>
        ))}
      </ul>
      <Link href={`#contact?plan=${plan.planId}`}
        className={`w-full py-4 rounded-2xl font-black text-center text-sm uppercase tracking-[0.15em] transition-all ${plan.highlight ? "bg-[#E1FF6B] text-[#101B10] hover:scale-[1.02]" : "bg-[#101B10] text-white hover:bg-[#1a2e1a]"}`}>
        {plan.ctaLabel}
      </Link>
    </div>
  );
}

type Tab = "web" | "dm" | "fresher";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("web");
  const plans = activeTab === "web" ? webPlans : activeTab === "dm" ? dmPlans : fresherPlans;

  const tabs: { id: Tab; label: string }[] = [
    { id: "web", label: "Web Development" },
    { id: "dm", label: "Digital Marketing" },
    { id: "fresher", label: "Business Fresher" },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#f7fee7] px-6" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-[#6C8E00] uppercase tracking-[0.3em] mb-4">Transparent pricing</p>
          <h2 id="pricing-heading" className="text-5xl font-bold text-[#101B10] tracking-tight">PRICING</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            No hidden costs. No surprises. Choose your category and the plan that fits your business.
          </p>

          {/* Tab toggle */}
          <div className="inline-flex mt-10 bg-[#101B10] rounded-2xl p-1.5 gap-1 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl font-black text-[11px] uppercase tracking-[0.15em] transition-all duration-200 ${activeTab === tab.id ? "bg-[#E1FF6B] text-[#101B10]" : "text-white/60 hover:text-white"}`}
                aria-pressed={activeTab === tab.id}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Fresher tab description */}
          {activeTab === "fresher" && (
            <div className="mt-8 max-w-2xl mx-auto bg-[#101B10] text-white rounded-2xl px-8 py-5 text-sm text-left">
              <p className="text-[#E1FF6B] font-black uppercase text-xs tracking-widest mb-2">Starting from zero?</p>
              <p className="text-white/80 leading-relaxed">
                The <strong className="text-white">Business Fresher Package</strong> is a complete launch system brand identity, website, social media setup, Google presence, content foundation, and visibility all in one phased program. Built for first-time entrepreneurs, family businesses going digital, and professionals turning skills into a business.
              </p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => <PlanCard key={`${activeTab}-${i}`} plan={plan} />)}
        </div>

        {/* Add-ons note for fresher tab */}
        {activeTab === "fresher" && (
          <div className="mt-10 bg-white rounded-2xl border border-[#101B10]/10 p-8 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#6C8E00] mb-3">Popular Add-Ons</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex justify-between"><span>Business naming + domain check</span><span className="font-bold text-[#101B10]"> </span></li>
                <li className="flex justify-between"><span>WhatsApp catalogue (up to 10 items)</span><span className="font-bold text-[#101B10]"> </span></li>
                <li className="flex justify-between"><span>Competitor audit report (detailed)</span><span className="font-bold text-[#101B10]"> </span></li>
                <li className="flex justify-between"><span>5 extra social media posts</span><span className="font-bold text-[#101B10]"> </span></li>
                <li className="flex justify-between"><span>Visiting card design file</span><span className="font-bold text-[#101B10]"> </span></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#6C8E00] mb-3">Growth Pathway</p>
              <p className="text-sm text-gray-500 leading-relaxed">After Month 3, Fresher clients transition to our standard Growth DM retainer (₹5,999/mo). By Month 6, you're a full-value digital client. <span className="text-[#101B10] font-bold"></span></p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
