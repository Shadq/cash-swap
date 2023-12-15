import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex mt-32 justify-center" id="stats">
      <div className="flex flex-col rounded-3xl p-10 md:flex-row gap-28 lg:pt-24 lg:pb-24 lg:pl-36 lg:pr-36 lg:bg-bgStats lg:bg-no-repeat lg:bg-contain">
        <CountUp start={0} end={200000} duration={1.5}>
          {({ countUpRef }) => (
            <div className="flex flex-col text-center ">
              <span ref={countUpRef} className="text-5xl text-sky-500" />
              <span className="text-gray-400 text-2xl"> Users</span>
            </div>
          )}
        </CountUp>
        <CountUp start={0} end={300} duration={1.5} prefix="$" suffix="M">
          {({ countUpRef }) => (
            <div className="flex flex-col text-center">
              <span ref={countUpRef} className="text-5xl text-green-500" />
              <span className="text-gray-400 text-2xl"> Total Value</span>
            </div>
          )}
        </CountUp>
        <CountUp start={0} end={250} duration={1.5} suffix="+">
          {({ countUpRef }) => (
            <div className="flex flex-col text-center ">
              <span ref={countUpRef} className="text-5xl text-orange-600" />
              <span className="text-gray-400 text-2xl"> Investors</span>
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default Stats;
