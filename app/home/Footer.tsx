"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center self-stretch px-20 pt-9 pb-6 mt-16 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1096px] max-md:max-w-full">
        <h2 className="self-start text-2xl text-white">LOGO</h2>
        <div className="flex gap-10 items-start max-md:max-w-full">
          <div className="flex flex-col self-stretch text-base text-white">
            <div className="flex gap-5 self-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/effa410b2e2795577f0fcdb6410ee5152f1247a07334137fa173bce7a4e78122?placeholderIfAbsent=true"
                alt="Phone icon"
                className="object-contain shrink-0 w-5 aspect-square"
              />
              <a href="tel:+94770838768" className="basis-auto">
                +94 77 083 8768
              </a>
            </div>
            <div className="flex gap-5 mt-2 whitespace-nowrap">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/c3072d9fab15c4e5c902bc6c795e683bb97bb3296c595527acc2c32751919856?placeholderIfAbsent=true"
                alt="Email icon"
                className="object-contain shrink-0 w-5 aspect-square"
              />
              <a
                href="mailto:kumaralalith152@gmail.com"
                className="grow shrink w-[201px]"
              >
                kumaralalith152@gmail.com
              </a>
            </div>
          </div>
          <address className="flex gap-4 text-base text-white not-italic">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/a5227c48090a7fcdf9173e837c06b867048f3fc6f088ed536ca133e39120412a?placeholderIfAbsent=true"
              alt="Location icon"
              className="object-contain shrink-0 self-start w-5 aspect-square"
            />
            <p>
              247/2 Wijayarama Road,
              <br />
              Gampaha, Sri Lanka
            </p>
          </address>
          <div className="flex gap-3.5">
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/2e4130712e81c2b30821e6252b006e09a7c4dd79316b32134b98d4a915cb11dd?placeholderIfAbsent=true"
                alt="Facebook icon"
                className="object-contain shrink-0 aspect-square w-[30px]"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/ffd3542e51538d4df1b0615b2cd8b2d42214e87b8028603bda84521a8599edf5?placeholderIfAbsent=true"
                alt="Instagram icon"
                className="object-contain shrink-0 aspect-square w-[30px]"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/80cda6686f18207f38db7a284aa6e1d0ece8cc13f86eaed2610233de2bac6d71?placeholderIfAbsent=true"
                alt="Twitter icon"
                className="object-contain shrink-0 aspect-square w-[30px]"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-base font-extralight text-white">
        © LK Tours Lanka All Rights Reserved 2024
      </p>
    </footer>
  );
};

export default Footer;
