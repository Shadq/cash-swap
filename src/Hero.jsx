import React from "react";
import lock from "./assets/lock.png";

const Hero = () => {
  return (
    <div
      className="mt-32 flex flex-col-reverse md:items-center md:flex-row"
      id="hero"
    >
      <div className="ml-10 lg:ml-80 flex flex-col gap-8 w-halfWidth md:w-full">
        <h1 className="text-4xl md:text-6xl font-bold">
          The best DEX to cash out <br /> your crypto easily
        </h1>
        <span className="text-xl md:text-2xl text-gray-400">
          Buy, Sell and cash out your crypto easily from anywhere
        </span>
        <div className="flex gap-6 md:justify-start justify-center">
          <button className=" bg-goodGreen rounded-lg w-full pt-2.5 pb-2.5 md:w-auto md:pl-7 md:pr-7 md:pt-2.5 md:pb-2.5 text-goodGray font-semibold transition-transform hover:scale-105 delay-100">
            Launch App
          </button>
        </div>
      </div>
      <div className="w-halfWidth ml-10 hidden lg:block lg:mr-80">
        <img src={lock} />
      </div>
    </div>
  );
};

export default Hero;
