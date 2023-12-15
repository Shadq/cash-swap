import React from "react";
import secure from "./assets/secure.png";

const Info = () => {
  return (
    <div className="mt-28 flex flex-col-reverse md:flex-row" id="info">
      <div className="ml-10 mr-10 flex flex-col justify-center lg:ml-80 md:w-halfWidth gap-8">
        <h2 className="text-5xl font-bold">Secure and Open Source</h2>
        <span className="text-xl text-gray-400">
          CA$H Swap is open source and very secure. If you have any issues
          contact us.
        </span>
        <button className="bg-orange-600 rounded-lg w-36 pt-2.5 pb-2.5 text-goodGray font-semibold transition-transform hover:scale-105 delay-100">
          Code Repo
        </button>
      </div>
      <div className="lg:mr-80 w-halfWidth ">
        <img src={secure} alt="secure" />
      </div>
    </div>
  );
};

export default Info;
