import React from "react";
import Button from "../../layouts/Button";
import hero from "../../assets/hero-5.jpg";
const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 "></div>

      {/* Content */}
      <div className="relative z-10 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Your Health, Our Priority
        </h1>
        <p className="text-2xl">
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
