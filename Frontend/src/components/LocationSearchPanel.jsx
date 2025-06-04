import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";

export const LocationSearchPanel = ({ setOpenVehiclePanel }) => {
  const locations = [
    "B-194 195, Sector-4, Vidyadhar Nagar, Jaipur, Rajasthan",
    "D-16 Doodh Mishthan Bhadar, BaniPark, Jaipur, Rajasthan",
    "A-14 Shashtri Nagara, Jaipur, Rajasthan",
    "C-19 Narayan Singh Circle, Raja Park, Jaipur Rajasthan",
  ];
  return (
    <div className="flex flex-col gap-3 p-3">
      {locations.map((location, index) => {
        return (
          <div
            key={index}
            onClick={() => setOpenVehiclePanel(true)}
            className="flex items-center gap-4 leading-5 font-semibold border-2 active:border-black py-3 px-2 rounded-lg"
          >
            <div className="bg-[#eee] p-2 rounded-full">
              <IoLocation className="text-xl" />
            </div>
            <h3>{location}</h3>
          </div>
        );
      })}
    </div>
  );
};
