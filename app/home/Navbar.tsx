"use client";

import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-5 justify-between px-12 py-6 w-full text-white bg-black bg-opacity-10 max-md:px-5 max-md:max-w-full">
      <h1 className="my-auto text-2xl">LOGO</h1>
      <div className="flex flex-wrap gap-8 items-center text-base font-semibold">
        <a href="https://fantastic-eureka-q7rxjg57995295gv-3000.app.github.dev/" className="self-stretch my-auto">
          HOME
        </a>
        <a href="#" className="self-stretch my-auto">
          TOURS
        </a>
        <a href="#" className="self-stretch my-auto uppercase basis-auto">
          Personalized Tours
        </a>
        <a href="#" className="self-stretch my-auto">
          GALLERY
        </a >
        <a href="https://fantastic-eureka-q7rxjg57995295gv-3000.app.github.dev/contact">
        <Button variant="primary">INQUIRE NOW</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
