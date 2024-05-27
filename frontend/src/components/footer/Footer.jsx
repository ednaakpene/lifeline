import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-600">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center  text-white sm:justify-start">
            <p className="text-2xl ">LIFELINE</p>
          </div>

          <p className="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
