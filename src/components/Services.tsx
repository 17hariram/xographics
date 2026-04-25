import { Code, BarChart, PenTool, Smartphone, Share2, Search, Megaphone, Globe } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    desc: "From single-page landing pages to full multi-page business websites and e-commerce stores. We build with HTML, WordPress, Webflow, and Next.js mobile-first, lightning-fast, and conversion-optimized. Every site includes on-page SEO, sitemap, and performance tuning from day one.",
    icon: <Code className="text-[#E1FF6B]" size={32} />,
    tag: "Web"
  },
  {
    title: "Search Engine Optimization",
    desc: "Rank on Page 1 of Google for your city and service. We offer Local SEO (Google Business Profile, NAP consistency, directory listings), on-page SEO (keywords, meta tags, schema markup), and full technical SEO audits. Results visible in 4–12 weeks depending on your market.",
    icon: <Search className="text-[#E1FF6B]" size={32} />,
    tag: "SEO"
  },
  {
    title: "Social Media Management",
    desc: "Consistent, on-brand content posted for you without you having to think about it. We handle content strategy, post design, caption writing, hashtag research, and scheduling across Instagram, Facebook, and LinkedIn. Monthly performance reports included.",
    icon: <Share2 className="text-[#E1FF6B]" size={32} />,
    tag: "Marketing"
  },
  {
    title: "Graphic Design & Branding",
    desc: "From Instagram posts to festival posters, pitch decks to brand kits we design visuals that convert scrollers into customers. Every design is custom-crafted to match your brand identity. We also offer standalone logo and brand kit design for businesses starting from scratch.",
    icon: <PenTool className="text-[#E1FF6B]" size={32} />,
    tag: "Design"
  },
  {
    title: "Paid Ads Management",
    desc: "Meta Ads (Instagram + Facebook) and Google Ads set up, managed, and optimized by us. We handle campaign creation, audience targeting, creative design, and monthly performance reports. Ad spend budget is paid separately by you; we charge only for management.",
    icon: <Megaphone className="text-[#E1FF6B]" size={32} />,
    tag: "Ads"
  },
  {
    title: "Google Business Profile",
    desc: "Your Google Business Profile is often the first thing potential customers see. We set it up fully name, address, phone, hours, photos, description, Q&A, and regular posts. A fully optimized GBP directly increases walk-in visits and phone inquiries for local businesses.",
    icon: <Globe className="text-[#E1FF6B]" size={32} />,
    tag: "Local SEO"
  },
  {
    title: "Content Creation",
    desc: "Reels, carousels, story templates, and short-form video editing. We create scroll-stopping content tailored to your niche and audience. Whether you provide footage or want faceless content, we script, edit, and caption it ready to post and grow your reach.",
    icon: <Smartphone className="text-[#E1FF6B]" size={32} />,
    tag: "Content"
  },
  {
    title: "Analytics & Reporting",
    desc: "Know what's working and what's not. We set up Google Analytics 4, Google Search Console, and Meta Business Suite and send you clear monthly reports covering reach, engagement, keyword rankings, and traffic. Data-driven decisions, zero jargon.",
    icon: <BarChart className="text-[#E1FF6B]" size={32} />,
    tag: "Analytics"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-mono text-[#6C8E00] uppercase tracking-[0.3em] mb-4">What we do</p>
          <h2
            id="services-heading"
            className="text-5xl font-bold text-[#101B10] tracking-tighter"
          >
            OUR{' '}
            <span className="font-black text-[#101B10] underline decoration-[#E1FF6B]">EXPERTISE</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl text-lg leading-relaxed">
            We are a full-service digital agency web development and digital marketing under one roof,
            working as one strategy, not two separate silos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-[#101B10]/10 hover:border-[#101B10] hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6C8E00] bg-[#f0f9e8] px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#101B10] mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
