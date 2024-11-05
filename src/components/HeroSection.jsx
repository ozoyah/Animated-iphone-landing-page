import React from "react";
import { Link } from "react-scroll";
import SoundSection from "./SoundSection";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const HeroSection = () => {
  return (
    <>
      <section className="bg-black">
        <div
          className="mx-auto p-auto max-w-4xl w-full flex items-center
        flex-col relative z-10"
        >
          <h1 className="text-gray-300 text-xl py-1 font-bold">New</h1>
          <img className="w-36" src={Iphone} alt="Iphone 16"></img>
          <p className="text-purple-400 pt-2 mt-2 mb-4 text-5xl text-center font-extrabold">
            Bigger and Better
          </p>
          <span className=" text-white text-xl text-center font-semibold">
            From $41.62/mo for 24 mo. or $999 before trade-in
          </span>
          <div className="flex flex-row items-center gap-4 justify-between">
            <div>
              <button className="bg-blue-700 text-white text-center text-2xl font-medium m-3 px-3 border-black rounded-2xl min-w-6">
                Buy
              </button>
            </div>
            <div>
              <Link
                to="scrollSection"
                smooth={true}
                duration={500}
                className="text-blue-500 my-3 font-medium cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img src={HoldingIphone} className="h-68 md:ml-96"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
