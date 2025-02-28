"use client";

import React from "react";

interface TestimonialCardProps {
  text: string;
  author: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  imageSrc,
}) => {
  return (
    <article className="flex flex-col items-start px-4 py-5 mx-auto w-full text-xs bg-white rounded-xl max-md:pr-5 max-md:mt-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/b99e662b05f7ad38012971def148e4aeefa53416970a9217225fd87328eb2614?placeholderIfAbsent=true"
        alt="Quote icon"
        className="object-contain aspect-square w-[25px]"
      />
      <p className="mt-9 ml-2.5 leading-5 text-neutral-900">
        {text}{" "}
        <span style={{ color: "rgba(154,154,154,1)" }}>Read more...</span>
      </p>
      <div className="flex gap-10 mt-5 ml-2.5 font-medium text-neutral-400">
        <p className="my-auto">{author}</p>
        <img
          src={imageSrc}
          alt={`${author} profile`}
          className="object-contain shrink-0 aspect-square w-[30px]"
        />
      </div>
    </article>
  );
};

export default TestimonialCard;
