import React from "react";
import cash from "./assets/money.png";

const About = () => {
  return (
    <div className="mt-32 flex flex-col md:flex-row" id="about">
      <div className="lg:ml-80 w-halfWidth ">
        <img src={cash} alt="cash" />
      </div>
      <div className="ml-10 mr-10 flex flex-col justify-center lg:mr-80 md:w-halfWidth gap-8">
        <h2 className="text-5xl font-bold">Fast and Reliable</h2>
        <span className="text-xl text-gray-400">
          Cash out your crypto in just 5 business day and <br /> deceide if to
          receive it in cash.
        </span>
        <button className="bg-blue-700 rounded-lg w-36 pt-2.5 pb-2.5 text-goodGray font-semibold transition-transform hover:scale-105 delay-100">
          More Details
        </button>
      </div>
    </div>
  );
};

export default About;
