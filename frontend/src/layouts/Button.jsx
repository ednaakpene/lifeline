import React from "react";

const Button = ({ title }) => {
  return (
    <div>
          <button className="btn rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium shadow text-white">
        {title}
      </button>
    </div>
  );
};

export default Button;
