import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <article className="flex flex-col items-start w-full text-base font-light text-black max-md:mt-10 max-md:max-w-full">
      <p className="self-stretch leading-6 max-md:max-w-full">
        We're here to assist you! Whether you have questions about our tours,
        need assistance with bookings, or want to share feedback, we'd love to
        hear from you. At LK Tour Lanka, your satisfaction means everything to
        us. Simply fill out the form on the left or contact us directly via
        phone or email. Let's make your dream journey a reality!
      </p>

      <div className="flex gap-5 mt-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/881e670ba2bc70c7234f4f4401e13fec55cf1f3af25bad69ad7deadb4cfa455e?placeholderIfAbsent=true"
          alt="Phone icon"
          className="object-contain shrink-0 w-5 aspect-square"
        />
        <a href="tel:0770838768" className="basis-auto">
          077 083 8768
        </a>
      </div>

      <div className="flex gap-5 mt-4 whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/53aed5f022babf27a4f23495f0978dc951acba2e4266fb809d40573643a4811a?placeholderIfAbsent=true"
          alt="Email icon"
          className="object-contain shrink-0 w-5 aspect-square"
        />
        <a href="mailto:kumaralalith152@gmail.com" className="basis-auto">
          kumaralalith152@gmail.com
        </a>
      </div>

      <div className="flex gap-5 mt-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b1c4c0574fb4e7e98583be3b54a7517/ebb9e0dbc7757fb7d275483f3d8e0b9886c9f185fd1ca31675e38566bc111167?placeholderIfAbsent=true"
          alt="Location icon"
          className="object-contain shrink-0 w-5 aspect-square"
        />
        <address className="flex-auto not-italic">
          247/2 Wijayarama Road, Gampaha, Sri Lanka.
        </address>
      </div>
    </article>
  );
};

export default ContactInfo;
