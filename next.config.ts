import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler disabled it conflicts with GSAP's imperative useEffect/ref patterns
  // reactCompiler: true,
};

export default nextConfig;
