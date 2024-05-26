import React from 'react';

const Products = () => {
  return (
    <div className='mt-10'> 
      <p className='text-bold text-center text-3xl'> Products</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4 mt-10 mx-12">

<a href="#" className="block max-w-xs rounded-3xl pb-4 border-solid border-2 border-teal-600  shadow-sm shadow-indigo-100">
  <img
    alt=""
     src="../../assets/general-wellness.jpg" 
    className="h-50 w-full rounded-t-3xl object-cover"
  />
  <div className="mt-2">
    <dl>
      <div>
        <dd className="font-medium">Men's Health</dd>
      </div>
    </dl>
  </div>
</a>
<a href="#" className="block max-w-xs border-solid border border-teal-600 rounded-3xl pb-4 shadow-sm shadow-indigo-100">
  <img
    alt=""
    src="https://img.freepik.com/free-photo/medium-shot-woman-training-with-dummbells_23-2150404904.jpg?t=st=1716473618~exp=1716477218~hmac=1f7ffe8105b608d84a1490485908df8aa96a79d9b81bb111a817d9b6fa80218c&w=1480"
    className="h-50 w-full rounded-t-3xl object-cover"
  />
  <div className="mt-2">
    <dl>
      <div>
        <dd className="font-medium">Women's Health</dd>
      </div>
    </dl>
  </div>
</a>
<a href="#" className="block max-w-xs rounded-3xl border-solid border border-teal-600 pb-4 shadow-sm shadow-indigo-100">
  <img
    alt=""
    src="https://img.freepik.com/free-photo/pills-with-glass-jar_23-2148021445.jpg?t=st=1716473787~exp=1716477387~hmac=15798eeb47b1b2b0ce6a97d377bc4748e4c36c6fe76e3f683aee60f62ad0b528&w=1480"
    className="h-40 w-full rounded-t-3xl object-cover"
  />
  <div className="mt-2">
    <dl>
      <div>
        <dd className="font-medium">Medicines and Treatment</dd>
      </div>
    </dl>
  </div>
</a>
<a href="#" className="block max-w-xs  rounded-3xl    shadow-sm shadow-indigo-100" style={{ backgroundColor:'#F1F1F2' }}>
  <img
    alt=""
    src="https://img.freepik.com/free-photo/self-care-home-with-face-mask_23-2149007150.jpg?t=st=1716473852~exp=1716477452~hmac=aeb89c458963ca19fc5cb5205292d2f8c7d9863efbab066b8efff7bcf3566123&w=1480"
    className="h-50 w-full rounded-t-3xl object-cover " 
  />
  <div className="mt-2 px-4 text-center mb-2">
    <dl>
      <div>
        <dd className="font-medium text-xl">General Wellbeing</dd>
        <dd className="text-sm text-gray-500">Holistic medical care for physical, mental, and emotional wellbeing.</dd>
      </div>
    </dl>
  </div>
</a>
</div>
    </div>
  );
};

export default Products;
