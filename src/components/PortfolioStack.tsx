'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "FC Meena Turf",
    description: "A high-performance sports booking platform built with React and Firebase, featuring real-time availability and a sleek dark UI.",
    link: "https://fc-meena-turf.web.app/",
    mediaUrl: "/portfolio/turf-video.mp4",
    isVideo: true,
    color: "#E1FF6B",
  },
  {
    title: "Nakshathra Resorts",
    description: "Luxury resort landing page focused on visual storytelling and seamless user experience for bookings.",
    link: "https://nakshathra-resorts.web.app/",
    mediaUrl: "/portfolio/resort-video.mp4",
    isVideo: true,
    color: "#FFFFFF",
  },
  {
    title: "Personal Portfolio",
    description: "Your creative identity. A high-end showcase of development skills using modern motion physics and interactive typography.",
    link: "#",
    mediaUrl: "/portfolio/portfolio-video.mp4", // Ensure you have this video file
    isVideo: true,
    color: "#E1FF6B",
  },
  {
    title: "Cherry Chue",
    description: "An ongoing brand transformation for a modern boutique, blending commercial graphics with high-end web tech.",
    link: "https://cherry-chue.vercel.app/",
    mediaUrl: "/portfolio/cherry-video.mp4",
    isVideo: true,
    color: "#FFFFFF",
  }
];

const Card = ({ i, title, description, mediaUrl, isVideo, link, color, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'start start'] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 30}px)` }}
        className="flex flex-col relative h-[450px] w-[90%] md:w-[70%] rounded-3xl p-8 md:p-12 origin-top shadow-2xl border border-black/5 overflow-hidden"
      >
        <h2 className="text-3xl font-bold text-[#101B10] text-center mb-6">{title}</h2>
        <div className="flex flex-col md:flex-row h-full gap-8">
          <div className="md:w-[40%] flex flex-col justify-center">
            <p className="text-[#101B10] font-medium leading-relaxed">{description}</p>
            <a href={link} target="_blank" className="mt-4 flex items-center gap-2 font-bold text-[#101B10] underline underline-offset-4">
              Visit Live Site <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>
          <div className="md:w-[60%] h-64 md:h-full rounded-2xl overflow-hidden relative border border-black/10 bg-black/5">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              {isVideo ? (
                <video src={mediaUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <img src={mediaUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function PortfolioStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <ReactLenis root>
      <section ref={container} className="bg-[#101B10] py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase italic">
            Featured <span className="text-[#E1FF6B]">Projects</span>
          </h2>
        </div>
        {projects.map((project, i) => {
          // range calculation adjusted for 4 projects (0.25 segments)
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card 
              key={i} i={i} {...project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </section>
    </ReactLenis>
  );
}