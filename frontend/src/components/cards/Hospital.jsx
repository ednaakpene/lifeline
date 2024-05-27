import React from "react";
import korlebu from "../../assets/Korlebu.jpg";
import tgh from "../../assets/tgh.jpg";
import ugmc from "../../assets/ugmc.jpg";

const Hospital = () => {
  return (
    <div className="mt-10 px-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={korlebu} alt="Korlebu" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Korlebu Teaching Hospital</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Accra, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={ugmc} alt="ugmc" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">
            University of Ghana Medical Centre
          </h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Accra, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={tgh} alt="tgh" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Tema General Hospital</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Tema, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
