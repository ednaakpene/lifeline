import React from "react";
import hero from "../../assets/hero-5.jpg";
import Search from "../search/Search";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      

      <div className="relative z-10 flex flex-col items-center space-y-5 mt-10">
        <h1 className="text-7xl mt-4 font-bold text-center">
          Your Health, Our Priority
        </h1>
        <p className="text-2xl text-gray-400 text-center">
          Discover comprehensive medical services tailored to your unique needs.
          
        </p>

      </div>
     <div className="mt-10 z-10">
     <Search/>
     </div>
     </div>
  );
};

export default Hero;
