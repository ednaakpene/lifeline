import React from 'react';

const Hero = () => {
  return (
    <div 
      className="hero min-h-screen relative bg-cover bg-no-repeat" 
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/blue-pill-capsule-pain-relief-medication-generative-ai_188544-45782.jpg?t=st=1716225638~exp=1716229238~hmac=a99153544fa6794a9efb528b00f0b3d91e0f935d083d6511b10bf6b3b0021c7a&w=1380)', 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-white font-bold">Hello there</h1>
          <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
