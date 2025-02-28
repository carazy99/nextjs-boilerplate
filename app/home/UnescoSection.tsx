"use client";

import React from "react";

const UnescoSection: React.FC = () => {
  return (
    <section className="flex relative flex-col self-stretch mt-20 w-full text-5xl text-center min-h-[567px] text-neutral-300 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/323a38d7ecaf43f060200a515b02d65db0a6066e55713189e62077689df4441a?placeholderIfAbsent=true"
        alt="UNESCO World Heritage Site in Sri Lanka"
        className="object-cover absolute inset-0 size-full"
      />
      <blockquote className="relative px-16 pt-56 pb-44 w-full bg-neutral-900 bg-opacity-40 max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
        "Explore Sri Lanka's Wonders: Eight UNESCO World Heritage Sites Await
        You!"
      </blockquote>
    </section>
  );
};

export default UnescoSection;
