"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { useEffect, ReactNode } from "react";
import AOS from "aos";
import ScrollToTop from "@/components/ScrollToTop";

// Styles and dependencies
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import Navbar from "@/components/Navbar";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
