import React from 'react';
import Button from '../../layouts/Button';

const Hero = () => {
  return (
    <div 
      className="relative h-[750px] flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover" 
      style={{ backgroundImage: `url('https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?t=st=1716757165~exp=1716760765~hmac=596dd5c272478258cc7be24d71e69f5f23d69caadd5f2918c01b84e238420540&w=1380')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 "></div>

      {/* Content */}
      <div className="relative z-10 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

        <Button  title="See Services" />
      </div>
    </div>
  );
}

export default Hero;
