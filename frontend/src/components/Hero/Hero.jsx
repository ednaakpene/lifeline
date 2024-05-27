import React from "react";
import Button from "../../layouts/Button";
import hero from "../../assets/hero-5.jpg";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div>
      <form
            onSubmit={(e) => e.preventDefault()} 
            className="max-w-xl mx-auto mt-2">
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-teal-600"
                />
            </div>
        </form>
        </div>

      <div className="relative z-10 flex flex-col items-center space-y-5 mt-10">
        <h1 className="text-5xl mt-4 font-bold text-center">
          Your Health, Our Priority
        </h1>
        <p className="text-2xl text-center">
          Discover comprehensive medical services tailored to your unique needs.
          From preventive care to specialized treatments, we're here to support
          you on your journey to optimal health.
        </p>

        <Button title="Explore Our Services" />
      </div>
    </div>
  );
};

export default Hero;
