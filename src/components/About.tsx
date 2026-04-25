import VariableFontHoverByLetter from "./fancy/text/VariableFontHoverByLetter";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#101B10] text-white overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              id="about-heading"
              className="text-sm font-mono text-[#E1FF6B] uppercase tracking-[0.3em] mb-8"
            >
              The XO Graphics Story
            </h2>
            <div className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              <VariableFontHoverByLetter
                label="Bridging the Gap"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
              />
              <br />
              <VariableFontHoverByLetter
                label="Between Dreams &"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
              />
              <br />
              <VariableFontHoverByLetter
                label="Digital Reality."
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
              />
            </div>
          </div>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              In a digital landscape where &ldquo;Premium&rdquo; often means &ldquo;Overpriced,&rdquo;{" "}
              <span className="text-white font-bold">XO Graphics</span> was born to rewrite the rules.
              We are a <span className="text-[#E1FF6B] font-bold">full-service digital agency </span> 
              meaning we don&apos;t just build your website, we market it too.
            </p>
            <p>
              Based in Chennai, we specialize in web development, digital marketing, SEO, social media
              management, and commercial graphics. One team. One strategy. One invoice.
            </p>
            <p className="text-base">
              A website without marketing is a billboard in a forest. Social media without a website
              is a conversation with nowhere to land. We solve both and that&apos;s our edge.
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-10">
              <div>
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="text-xs uppercase tracking-widest text-[#E1FF6B]">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-xs uppercase tracking-widest text-[#E1FF6B]">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2-in-1</div>
                <div className="text-xs uppercase tracking-widest text-[#E1FF6B]">Web + Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
