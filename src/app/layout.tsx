import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XO Graphics Full-Service Digital Agency | Web Development & Digital Marketing | Chennai",
  description:
    "XO Graphics is a full-service digital agency in Chennai offering web development, digital marketing, social media management, SEO, and graphic design. Affordable. Skilled. Built for businesses that deserve to be seen.",
  keywords: [
    "digital marketing agency Chennai",
    "web development agency Chennai",
    "graphic design Chennai",
    "SEO agency Chennai",
    "social media marketing Chennai",
    "full service digital agency",
    "website design Chennai",
    "XO Graphics",
    "digital agency Tamil Nadu",
    "affordable web development India",
  ],
  authors: [{ name: "XO Graphics", url: "https://www.xographics.in" }],
  creator: "XO Graphics",
  publisher: "XO Graphics",
  metadataBase: new URL("https://www.xographics.in"),
  alternates: {
    canonical: "https://www.xographics.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.xographics.in",
    siteName: "XO Graphics",
    title: "XO Graphics Full-Service Digital Agency | Chennai",
    description:
      "Web Development, Digital Marketing, SEO & Graphic Design all under one roof. XO Graphics builds your website AND markets it. Chennai-based. Affordable excellence.",
    images: [
      {
        url: "https://www.xographics.in/logo.png",
        width: 800,
        height: 800,
        alt: "XO Graphics Full-Service Digital Agency Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XO Graphics Full-Service Digital Agency | Chennai",
    description:
      "Web Development, Digital Marketing, SEO & Graphic Design in Chennai. Affordable. Professional. Results-driven.",
    images: ["https://www.xographics.in/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.xographics.in",
  name: "XO Graphics",
  alternateName: "XO Graphics",
  description:
    "Full-service digital agency in Chennai offering web development, digital marketing, SEO, social media management, and graphic design.",
  url: "https://www.xographics.in",
  logo: "https://www.xographics.in/logo.png",
  image: "https://www.xographics.in/logo.png",
  telephone: "+918072888570",
  email: "xographics1017@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0827,
    longitude: 80.2707,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [
    "https://instagram.com/xographics.in",
    "https://wa.me/918072888570",
  ],
  priceRange: "₹₹",
  areaServed: {
    "@type": "City",
    name: "Chennai",
  },
  serviceType: [
    "Web Development",
    "Digital Marketing",
    "SEO Optimization",
    "Social Media Management",
    "Graphic Design",
    "Content Creation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Agency Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom responsive websites built for performance and conversions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description: "Social media management, content creation, and paid advertising",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization",
          description: "Local and on-page SEO to help your business rank on Google",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
