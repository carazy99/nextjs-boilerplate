import React from "react";

interface PackageGalleryProps {
  images: string[];
  className?: string;
}

const PackageGallery: React.FC<PackageGalleryProps> = ({
  images,
  className = "",
}) => {
  return (
    <section className={`w-full max-w-[968px] ${className} max-md:max-w-full`}>
      <div className="flex gap-5 max-md:flex-col">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[33%] ${
              index > 0 ? "ml-5" : ""
            } max-md:ml-0 max-md:w-full`}
          >
            <img
              src={image}
              alt={`Tour package ${index + 1}`}
              className="object-contain grow w-full rounded-md aspect-[0.69] max-md:mt-6"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageGallery;
