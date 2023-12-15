import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="font-newFont flex flex-row justify-around items-center h-16 sticky top-0 bg-goodGray">
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
        <h1 className="text-3xl font-medium cursor-pointer">
          <span className="text-goodGreen">CA$H </span> SWAP
        </h1>
      </Link>
      <ul className="hidden md:flex md:flex-row md:align-middle md:gap-6 text-lg cursor-pointer">
        <Link to="stats" spy={true} smooth={true} offset={-100} duration={500}>
          <li className="hover:text-gray-400">Stats</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <li className="hover:text-gray-400">About</li>
        </Link>
        <Link to="info" spy={true} smooth={true} offset={-100} duration={500}>
          <li className="hover:text-gray-400">Info</li>
        </Link>
        <Link to="faq" spy={true} smooth={true} offset={-100} duration={500}>
          <li className="hover:text-gray-400">FAQ</li>
        </Link>
      </ul>
      <button className="bg-goodGreen rounded-lg pl-7 pr-7 pt-2.5 pb-2.5 text-goodGray font-semibold transition-transform hover:scale-105 delay-100">
        Launch App
      </button>
    </nav>
  );
};

export default Header;
