"use client";

import React from "react";
import Button from "./Button";

const GallerySection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="mt-16 text-3xl font-semibold text-center text-black max-md:mt-10">
        Moments Captured
      </h2>
      <div className="mt-8 w-full max-w-[922px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/7dbbcc49098e842c3d9430ba60c669c7465227681d1e90beda0ecdef9efc988b?placeholderIfAbsent=true"
              alt="Tour moment in Sri Lanka"
              className="object-contain grow w-full aspect-[1.29] max-md:mt-7"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/1252403004fb182467a9c59ed1115635a882a96ea0944854e5549c961ed607bc?placeholderIfAbsent=true"
              alt="Tour moment in Sri Lanka"
              className="object-contain grow w-full aspect-[1.29] max-md:mt-7"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/6a2a2545bbaf33a60fce40c9213483dc31fe39d989eacc92013fdf05d5ff41bd?placeholderIfAbsent=true"
              alt="Tour moment in Sri Lanka"
              className="object-contain grow w-full aspect-[1.29] max-md:mt-7"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-w-[922px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/cae73c22dea2936dc7eaa3c638fd9fe1e86b967ba94bf688686e2367a1c2e84b?placeholderIfAbsent=true"
              alt="Tour moment in Sri Lanka"
              className="object-contain grow w-full aspect-[1.29] max-md:mt-7"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/106de21205de16f26f36e060ed7460469b6d06ddca1284f0e96f2815c898afc2?placeholderIfAbsent=true"
              alt="Tour moment in Sri Lanka"
              className="object-contain grow w-full aspect-[1.29] max-md:mt-7"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/0083306d2bb98a3ee48c9a18e60bf7375bdaa8c6888aaa9c661fe10f83324b8d?placeholderIfAbsent=true"
              alt="Tour moment in Sri Lanka"
              className="object-contain grow w-full aspect-[1.29] max-md:mt-7"
            />
          </div>
        </div>
      </div>
      <Button variant="outline" className="mt-10 uppercase w-[218px]">
        See More Moments
      </Button>
    </section>
  );
};

export default GallerySection;
