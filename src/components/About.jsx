import React from "react";

const About = () => {
  return (
    <div className="w-full py-20 p-20 bg-[#CDEA68] rounded-tl-3xl text-black">
      <h1 className="text-[4vw] leading-[5vw] tracking-tight ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[2px] mt-20 border-[#5e6e2a]">
        <div className="w-1/2  ">
          <h1 className="text-4xl mt-10">Our Approach: </h1>
          <button className=" flex uppercase items-center px-10 py-4 gap-5 mt-7 bg-zinc-900 rounded-full text-white ">
            Read more
            <div className="w-2 h-2  bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] mt-10 rounded-3xl bg-green-800"></div>
      </div>
    </div>
  );
};

export default About;
