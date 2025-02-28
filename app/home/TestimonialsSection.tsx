"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch px-20 py-11 mt-16 w-full bg-emerald-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-3xl font-semibold text-center text-black">
        Trusted Voices
      </h2>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-3/12 max-md:ml-0 max-md:w-full">
            <TestimonialCard
              text="We have just finished an incredible two-week tour through Sri Lanka, and we owe so much of the experience to our amazing tour guide Lalith. From start to finish, he made our holiday seamless, enjoyable and truly memorable"
              author="-Becky Ramsey"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/ba69751346c56fe586f63dd462820222a2e83388f6c95246d0bdf9b16310f8cd?placeholderIfAbsent=true"
            />
          </div>
          <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <TestimonialCard
              text="We are two families from China, 4 adults, 2 children, a total of 6 people who spent 8 days in Sri Lanka. Our guide and driver Mr. Lalith is a responsible, reliable and responsible person. We visited during the 8 days. We have visited"
              author="-LU Y"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/93475fb7da0909d56901e8c9dfd53c8ccad8b68f03d341307698dfcbaa17d8ed?placeholderIfAbsent=true"
            />
          </div>
          <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <TestimonialCard
              text="Mr Lalith met us at the airport on arrival into the country and was so helpful and accommodating! He helped us get a sim and drive us to an ATM. He drove our family to Sigiriya, stopping along the way when we need for food and answered"
              author="-Danielle B"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/d74a2acb26ef7b8a453c9532465003e54fb253ea434ed6c07e6223ba7a7de539?placeholderIfAbsent=true"
            />
          </div>
          <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <TestimonialCard
              text="Lalith is a great driver. In addition to being a good driver, during our trip in Sri Lanka he showed us other interesting places (such as waterfalls, local cuisine, spice garden, trips to national parks,... ) that we did not know about. He got up for us"
              author="-Jana S"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/7e62a08302f1a4c484544514fdd52a657a932e916847e30adecdd0979e1825ed?placeholderIfAbsent=true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
