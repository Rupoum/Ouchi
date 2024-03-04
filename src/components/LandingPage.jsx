import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <>
      <div className="w-full     pt-1">
        <div className="textstructure mt-52  px-20">
          {["We Create", "Eye-opening ", "Presentations"].map((item, index) => {
            return (
              <div className="makser ">
                <div className="w-fit  flex items-end overflow-hidden">
                  {index === 1 && (
                    <div className="w-[8vw] mr-3 rounded-md h-[5.7vw] -top-[1.2vw] relative"></div>
                  )}
                  <h1 className="uppercase flex  h-full leading-[9vw] text-8xl tracking-tighter">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px] flex items-center justify-between     py-3 px-20 border-zinc-700 mt-20">
          {[
            "for public and private componies ",
            "From the first pitch to IPO ",
          ].map((item, index) => (
            <p className="text-md font-light tracking-light leading-none">
              {item}
            </p>
          ))}
          <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[2px] rounded-full capitalize border-zinc-500 text-md">
              Start the project{" "}
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[2px] border-x-zinc-500 rounded-full">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
