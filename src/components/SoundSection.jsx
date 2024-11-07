import React from "react";
import { Element } from "react-scroll";

const SoundSection = () => {
  return (
    <>
      <Element name="scrollSection">
        <section className="bg-white">
          <div className="my-44 max-w-xl">
            <div className="flex items-left text-center flex-col">
              <h2 className="text-black text-xl font-medium">
                New Sound System
              </h2>
              <p className="bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500 text-transparent text-6xl font-semibold my-4 ">
                Feel the base
              </p>
              <span className="text-xl font-normal">
                From $41.62/mo for 24 mo. or $999 before trade-in
              </span>
              <div className="flex justify-center">
                <button className="bg-blue-700 text-white text-center text-2xl font-medium m-3 px-3 min-w-6 border-none rounded-2xl">
                  Buy
                </button>
                <a
                  src=""
                  href="#"
                  className="text-blue-500 text-xl my-3 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default SoundSection;
