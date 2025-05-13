"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";

const index = () => {
  return (
    <>
      <div className="header-margin"></div>

      <Navbar />

      <NotFound />

      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
