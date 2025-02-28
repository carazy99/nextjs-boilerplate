"use client";
import React from "react";
import Navbar from "../home/Navbar";
import HeroSection from "./HeroSection";
import PackageGallery from "./PackageGallery";
import CustomPackageCTA from "./CustomPackageCTA";
import Footer from "../home/Footer";

function Packages() {
  const firstRowImages = [
    "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/15df2d1f9f663a84b420f931611c3272396a3896de291c0ac8fac4b8e4198d19?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/a27ebdd370a449ce7307ad4ea79100dfad55a32bbfe82546c26f0684c245f0b2?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/b62130bb4fdc629d95580e957678a3ec46e97321a0792404d74e3d98858bbf4e?placeholderIfAbsent=true",
  ];

  const secondRowImages = [
    "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/9c568bf2a9bbc71914e14e497d442e353466befbe81b78c7d4f9aa9ad485c00d?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/44bfc0c4bdcda26773420fbcb47bfcb1a185e46d23f8a1fc8ec8afe02e53c575?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/e227aa81d448de530db654f7ff5820a37023d70a3d1b43b57a4c70e6df8cc22c?placeholderIfAbsent=true",
  ];

  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <section className="flex relative flex-col self-stretch w-full text-black min-h-[543px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/97882975fa730a53d316cfd6b792535be6201b39357076f3192140f4053d1acd?placeholderIfAbsent=true"
          alt="Sri Lanka tour background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative pb-36 w-full bg-black bg-opacity-30 max-md:pb-24 max-md:max-w-full">
          <Navbar />
          <HeroSection />
        </div>
      </section>

      <PackageGallery images={firstRowImages} className="mt-20 max-md:mt-10" />
      <PackageGallery images={secondRowImages} className="mt-14 max-md:mt-10" />

      <CustomPackageCTA />
      <Footer />
    </main>
  );
}

export default Packages;
