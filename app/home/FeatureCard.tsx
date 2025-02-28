"use client";

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col max-w-full w-[322px]">
      <h3 className="self-start text-base font-semibold text-center text-neutral-900">
        {title}
      </h3>
      <p className="mt-2.5 text-xs font-medium leading-4 text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
