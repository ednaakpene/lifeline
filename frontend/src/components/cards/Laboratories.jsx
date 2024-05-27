import React from "react";
import synlab from "../../assets/synlab.jpg";
import mds from "../../assets/mds.jpg";
import genelab from "../../assets/genelab.jpg";

const Laboratories = () => {
  return (
    <div className="mt-10 px-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={mds} alt="lab" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">MDS-LANCET</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Accra, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              Book
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={synlab} alt="lab" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">SYNLAB</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">Dansoman, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              Book
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={genelab} alt="lab" class="w-full" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Genelab</h2>
          <h4 className="font-semibold">Location:</h4>
          <p class="text-gray-700">East Legon, Ghana</p>
          <h4 className="font-semibold">Working Hours:</h4>
          <p>Mon - Fri (8am-5pm)</p>
          <div class="flex justify-end mt-4">
            <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratories;
