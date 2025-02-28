import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-5 justify-between px-12 py-6 w-full bg-black bg-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="my-auto text-2xl text-white">LOGO</div>
      <div className="flex flex-wrap gap-8 items-center text-base font-semibold text-white">
        <a
          href="#"
          className="self-stretch my-auto hover:text-yellow-500 transition-colors"
        >
          HOME
        </a>
        <a
          href="#"
          className="self-stretch my-auto hover:text-yellow-500 transition-colors"
        >
          TOURS
        </a>
        <a
          href="#"
          className="self-stretch my-auto uppercase basis-auto hover:text-yellow-500 transition-colors"
        >
          Personalized Tours
        </a>
        <a
          href="#"
          className="self-stretch my-auto hover:text-yellow-500 transition-colors"
        >
          GALLERY
        </a>
        <button className="self-stretch px-5 py-2.5 bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors">
          INQUIRE NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
