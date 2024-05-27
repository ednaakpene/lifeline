import React, { useState } from "react";
import Hospital from "../cards/Hospital";
import Appointment from "../cards/Appointment";
import Laboratories from "../cards/Laboratories";
import Pharmacy from "../cards/Pharmacy";

const Serve = () => {
  const [activeTab, setActiveTab] = useState("Hospitals");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mt-10 mb-10">
        <div className="">
          <p className="text-bold text-3xl text-center">Services</p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-white  rounded-lg w-full">
            <div className="flex border-b">
              <button
                className={`w-full py-2 px-4 text-center focus:outline-none ${
                  activeTab === "Hospitals"
                    ? "bg-teal-500"
                    : "hover:bg-teal-200"
                }`}
                onClick={() => handleTabClick("Hospitals")}
              >
                Hospitals
              </button>
              <button
                className={`w-full py-2 px-4 text-center focus:outline-none ${
                  activeTab === "Pharmacies"
                    ? "bg-teal-500"
                    : "hover:bg-teal-200"
                }`}
                onClick={() => handleTabClick("Pharmacies")}
              >
                Pharmacies
              </button>
              <button
                className={`w-full py-2 px-4 text-center focus:outline-none ${
                  activeTab === "Laboratories"
                    ? "bg-teal-500"
                    : "hover:bg-teal-200"
                }`}
                onClick={() => handleTabClick("Laboratories")}
              >
                Laboratories
              </button>
              <button
                className={`w-full py-2 px-4 text-center focus:outline-none ${
                  activeTab === "Appointments"
                    ? "bg-teal-500"
                    : "hover:bg-teal-200"
                }`}
                onClick={() => handleTabClick("Appointments")}
              >
                Appointments
              </button>
            </div>

            <div className="p-4">
              {activeTab === "Hospitals" && (
                <div>
                  <h2 className="text-xl font-bold">List of Hospitals</h2>
                  <p>Content for hospitals goes here...</p>
                  <Hospital />
                </div>
              )}
              {activeTab === "Pharmacies" && (
                <div>
                  <h2 className="text-xl font-bold">List of Pharmacies</h2>
                  <p>Content for pharmacies goes here...</p>
                  <Pharmacy />
                </div>
              )}
              {activeTab === "Laboratories" && (
                <div>
                  <h2 className="text-xl font-bold">List of Laboratories</h2>
                  <p>Content for laboratories goes here...</p>
                  <Laboratories />
                </div>
              )}
              {activeTab === "Appointments" && (
                <div>
                  <h2 className="text-xl font-bold">Appointments</h2>
                  <p>Content for appointments goes here...</p>
                  <Appointment />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serve;
