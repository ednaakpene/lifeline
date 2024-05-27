import React from "react";
import topup from "../../assets/topup.jpg";
import ecp from "../../assets/ecp.jpg";
import origin from "../../assets/origin.jpg";

const Pharmacy = () => {
  return (
    <div className="mt-10 px-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={topup} alt="pharmacy" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Topup Pharmacy</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Accra, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              View Products
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={origin} alt="pharmacy" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Origin Pharmacy</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Dansoman, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              View Products
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={ecp} alt="Pharmacy" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">East Cantonment Pharmacy</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Tema, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
