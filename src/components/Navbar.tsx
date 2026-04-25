"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About",    href: "#about",     shape: "1" },
  { label: "Our Work", href: "#portfolio",  shape: "2" },
  { label: "Services", href: "#services",   shape: "3" },
  { label: "Pricing",  href: "#pricing",    shape: "4" },
  { label: "Contact",  href: "#contact",    shape: "5" },
];

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ── Hover shape effects ──────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;
    let ctx: { revert: () => void } | null = null;

    // Dynamically import GSAP so it only runs client-side (no SSR crash)
    import("gsap").then(({ gsap }) => {
      import("gsap/CustomEase").then(({ CustomEase }) => {
        gsap.registerPlugin(CustomEase);
        try { CustomEase.create("main", "0.65,0.01,0.05,0.99"); } catch { /* already registered */ }
        gsap.defaults({ ease: "main", duration: 0.7 });

        ctx = gsap.context(() => {
          const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
          const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");

          menuItems.forEach((item) => {
            const shapeIndex = item.getAttribute("data-shape");
            const shape = shapesContainer?.querySelector(`.bg-shape-${shapeIndex}`) ?? null;
            if (!shape) return;
            const shapeEls = shape.querySelectorAll(".shape-element");

            const onEnter = () => {
              shapesContainer?.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
              shape.classList.add("active");
              gsap.fromTo(shapeEls,
                { scale: 0.5, opacity: 0, rotation: -10 },
                { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
              );
            };
            const onLeave = () => {
              gsap.to(shapeEls, {
                scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
                onComplete: () => shape.classList.remove("active"), overwrite: "auto",
              });
            };
            item.addEventListener("mouseenter", onEnter);
            item.addEventListener("mouseleave", onLeave);
            (item as any)._xo_cleanup = () => {
              item.removeEventListener("mouseenter", onEnter);
              item.removeEventListener("mouseleave", onLeave);
            };
          });
        }, containerRef);
      });
    });

    return () => {
      ctx?.revert();
      containerRef.current?.querySelectorAll(".menu-list-item[data-shape]")
        .forEach((item: any) => item._xo_cleanup?.());
    };
  }, []);

  // ── Open / close animation ───────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;
    let ctx: { revert: () => void } | null = null;

    import("gsap").then(({ gsap }) => {
      ctx = gsap.context(() => {
        const navWrap    = containerRef.current!.querySelector(".nav-overlay-wrapper");
        const menu       = containerRef.current!.querySelector(".menu-content");
        const overlay    = containerRef.current!.querySelector(".xo-overlay");
        const bgPanels   = containerRef.current!.querySelectorAll(".backdrop-layer");
        const menuLinks  = containerRef.current!.querySelectorAll(".nav-link");
        const fadeItems  = containerRef.current!.querySelectorAll("[data-menu-fade]");
        const btnTexts   = containerRef.current!.querySelectorAll(".xo-btn-p");
        const btnIcon    = containerRef.current!.querySelector(".menu-button-icon");
        const tl = gsap.timeline();

        if (isMenuOpen) {
          navWrap?.setAttribute("data-nav", "open");
          tl.set(navWrap, { display: "block" })
            .fromTo(btnTexts,  { yPercent: 0 },   { yPercent: -100, stagger: 0.2 })
            .fromTo(btnIcon,   { rotate: 0 },      { rotate: 315 }, "<")
            .fromTo(overlay,   { autoAlpha: 0 },   { autoAlpha: 1 }, "<")
            .fromTo(bgPanels,  { xPercent: 101 },  { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
            .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");
          if (fadeItems.length) {
            tl.fromTo(fadeItems, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
          }
        } else {
          navWrap?.setAttribute("data-nav", "closed");
          tl.to(overlay,  { autoAlpha: 0 })
            .to(menu,     { xPercent: 120 }, "<")
            .to(btnTexts, { yPercent: 0 }, "<")
            .to(btnIcon,  { rotate: 0 }, "<")
            .set(navWrap, { display: "none" });
        }
      }, containerRef);
    });

    return () => ctx?.revert();
  }, [isMenuOpen]);

  // ── Escape key ───────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleMenu = () => setIsMenuOpen((p) => !p);
  const closeMenu  = () => setIsMenuOpen(false);

  return (
    <div ref={containerRef}>
      {/* ── Fixed top bar ── */}
      <div className="xo-site-header">
        <header className="xo-header">
          <nav className="xo-nav-row">
            <Link href="/" className="xo-logo-row" aria-label="XO Graphics Home">
              <img src="/logo.png" alt="XO Graphics Logo" className="xo-logo-img" />
              <span className="xo-logo-text">XO Graphics</span>
            </Link>
            <div className="xo-nav-right">
              <span className="xo-toggle-hint">Click to explore</span>
              <button className="nav-close-btn" onClick={toggleMenu} aria-label="Toggle menu">
                <div className="xo-btn-text-wrap">
                  <p className="xo-btn-p">Menu</p>
                  <p className="xo-btn-p">Close</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="menu-button-icon">
                  <path d="M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z" fill="currentColor"/>
                  <path d="M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"/>
                  <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"/>
                  <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"/>
                  <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"/>
                  <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* ── Full-screen overlay + slide-in drawer ── */}
      <section style={{ position:"fixed", inset:0, zIndex:300, pointerEvents:"none" }}>
        <div data-nav="closed" className="nav-overlay-wrapper" style={{ display:"none", position:"fixed", inset:0, pointerEvents:"auto" }}>
          {/* Backdrop */}
          <div className="xo-overlay" onClick={closeMenu}
            style={{ position:"absolute", inset:0, background:"rgba(16,27,16,0.60)", backdropFilter:"blur(4px)" }} />

          {/* Slide-in panel */}
          <nav className="menu-content" style={{ position:"absolute", top:0, right:0, width:"min(480px,100vw)", height:"100%", overflow:"hidden" }}>
            {/* Background layers */}
            <div style={{ position:"absolute", inset:0, overflow:"hidden" }}>
              <div className="backdrop-layer"        style={{ position:"absolute", inset:0, background:"#101B10" }} />
              <div className="backdrop-layer second"  style={{ position:"absolute", inset:0, background:"#152315" }} />
              <div className="backdrop-layer first"   style={{ position:"absolute", inset:0, background:"#1a2e1a" }} />

              {/* Ambient shapes */}
              <div className="ambient-background-shapes" style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
                {/* Shape 1 circles */}
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0 }}>
                  <circle className="shape-element" cx="80"  cy="120" r="40" fill="rgba(225,255,107,0.12)" style={{opacity:0}}/>
                  <circle className="shape-element" cx="300" cy="80"  r="60" fill="rgba(108,142,0,0.10)"   style={{opacity:0}}/>
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(225,255,107,0.07)" style={{opacity:0}}/>
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(108,142,0,0.12)"   style={{opacity:0}}/>
                </svg>
                {/* Shape 2 waves */}
                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0 }}>
                  <path className="shape-element" d="M0 200 Q100 100,200 200 T400 200" stroke="rgba(225,255,107,0.15)" strokeWidth="60" fill="none" style={{opacity:0}}/>
                  <path className="shape-element" d="M0 280 Q100 180,200 280 T400 280" stroke="rgba(108,142,0,0.10)"   strokeWidth="40" fill="none" style={{opacity:0}}/>
                </svg>
                {/* Shape 3 dot grid */}
                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0 }}>
                  {([50,150,250,350] as number[]).map((cx,i)=><circle key={`r1-${i}`} className="shape-element" cx={cx} cy={50}  r={8}  fill="rgba(225,255,107,0.25)" style={{opacity:0}}/>)}
                  {([100,200,300]    as number[]).map((cx,i)=><circle key={`r2-${i}`} className="shape-element" cx={cx} cy={150} r={12} fill="rgba(108,142,0,0.20)"   style={{opacity:0}}/>)}
                  {([50,150,250,350] as number[]).map((cx,i)=><circle key={`r3-${i}`} className="shape-element" cx={cx} cy={250} r={10} fill="rgba(225,255,107,0.20)" style={{opacity:0}}/>)}
                </svg>
                {/* Shape 4 organic blobs */}
                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0 }}>
                  <path className="shape-element" d="M100 100 Q150 50,200 100 Q250 150,200 200 Q150 250,100 200 Q50 150,100 100" fill="rgba(225,255,107,0.09)" style={{opacity:0}}/>
                  <path className="shape-element" d="M250 200 Q300 150,350 200 Q400 250,350 300 Q300 350,250 300 Q200 250,250 200" fill="rgba(108,142,0,0.08)"   style={{opacity:0}}/>
                </svg>
                {/* Shape 5 diagonal lines */}
                <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0 }}>
                  <line className="shape-element" x1="0"   y1="100" x2="300" y2="400" stroke="rgba(225,255,107,0.12)" strokeWidth="30" style={{opacity:0}}/>
                  <line className="shape-element" x1="100" y1="0"   x2="400" y2="300" stroke="rgba(108,142,0,0.09)"   strokeWidth="25" style={{opacity:0}}/>
                  <line className="shape-element" x1="200" y1="0"   x2="400" y2="200" stroke="rgba(225,255,107,0.07)" strokeWidth="20" style={{opacity:0}}/>
                </svg>
              </div>
            </div>

            {/* Menu content */}
            <div style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", height:"100%", padding:"44px 44px" }}>
              {/* Brand */}
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:48 }}>
                <img src="/logo.png" alt="XO Graphics"
                  style={{ height:36, width:36, borderRadius:"50%", objectFit:"cover", border:"2px solid rgba(225,255,107,0.3)" }}/>
                <span style={{ fontSize:14, fontWeight:900, color:"#E1FF6B", letterSpacing:"-0.02em", textTransform:"uppercase" }}>
                  XO Graphics
                </span>
              </div>

              {/* Nav links */}
              <ul style={{ listStyle:"none", padding:0, margin:0, flex:1 }} className="menu-list">
                {navLinks.map((link) => (
                  <li key={link.label} className="menu-list-item" data-shape={link.shape}
                    style={{ overflow:"hidden", marginBottom:2 }}>
                    <Link href={link.href} className="nav-link" onClick={closeMenu}
                      style={{ display:"block", textDecoration:"none", padding:"11px 0", position:"relative",
                               borderBottom:"1px solid rgba(225,255,107,0.08)" }}>
                      <p className="nav-link-text"
                        style={{ fontSize:"clamp(24px,5vw,38px)", fontWeight:900, color:"#fff",
                                 letterSpacing:"-0.03em", textTransform:"uppercase", margin:0, transition:"color 0.2s" }}>
                        {link.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div data-menu-fade style={{ marginTop:32 }}>
                <Link href="#contact" onClick={closeMenu}
                  style={{ display:"inline-block", background:"#E1FF6B", color:"#101B10", fontSize:12,
                           fontWeight:900, textTransform:"uppercase", letterSpacing:"0.15em",
                           padding:"13px 26px", borderRadius:13, textDecoration:"none" }}>
                  Get Started →
                </Link>
                <p style={{ marginTop:10, fontSize:10, color:"rgba(225,255,107,0.35)", fontWeight:600,
                            letterSpacing:"0.1em", textTransform:"uppercase" }}>
                  Full-Service Digital Agency · Chennai
                </p>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <style>{`
        .xo-site-header{position:fixed;top:0;left:0;right:0;z-index:200;padding:16px 24px;}
        .xo-header{max-width:1200px;margin:0 auto;background:rgba(247,254,231,0.88);
          backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,0.5);border-radius:18px;
          padding:10px 22px;box-shadow:0 4px 24px rgba(16,27,16,0.07);}
        .xo-nav-row{display:flex;align-items:center;justify-content:space-between;}
        .xo-logo-row{display:flex;align-items:center;gap:10px;text-decoration:none;}
        .xo-logo-img{height:32px;width:32px;border-radius:50%;object-fit:cover;border:1px solid rgba(16,27,16,0.12);}
        .xo-logo-text{font-size:14px;font-weight:900;color:#101B10;letter-spacing:-0.03em;text-transform:uppercase;}
        .xo-nav-right{display:flex;align-items:center;gap:12px;}
        .xo-toggle-hint{font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#6C8E00;display:none;}
        @media(min-width:600px){.xo-toggle-hint{display:block;}}
        .nav-close-btn{display:flex;align-items:center;gap:9px;background:#101B10;color:#E1FF6B;
          border:none;border-radius:13px;padding:9px 15px;cursor:pointer;overflow:hidden;}
        .xo-btn-text-wrap{height:16px;overflow:hidden;display:flex;flex-direction:column;}
        .xo-btn-p{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;
          line-height:16px;margin:0;white-space:nowrap;}
        .menu-button-icon{display:block;flex-shrink:0;}
        .nav-link:hover p{color:#E1FF6B !important;}
        .bg-shape{transition:opacity 0.3s;}
        .bg-shape.active{opacity:1 !important;}
      `}</style>
    </div>
  );
}
