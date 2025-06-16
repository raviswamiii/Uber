import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";

export const LocationSearchPanel = ({  suggestions, setPickup, setDestination, active }) => {
  // const locations = [
  //   "B-194 195, Sector-4, Vidyadhar Nagar, Jaipur, Rajasthan",
  //   "D-16 Doodh Mishthan Bhadar, BaniPark, Jaipur, Rajasthan",
  //   "A-14 Shashtri Nagara, Jaipur, Rajasthan",
  //   "C-19 Narayan Singh Circle, Raja Park, Jaipur Rajasthan",
  // ];
  
  const onSuggestionHandler = (suggestion) => {
    if(active === "pickup"){
      setPickup(suggestion);
    } else{
      setDestination(suggestion)
    }
  }

  return (
    <div className="flex flex-col gap-3 p-3 mt-16">
      {Array.isArray(suggestions) && suggestions.map((suggestion, index) => {
        return (
          <div
            key={index}
            onClick={() => onSuggestionHandler(suggestion)}
            className="flex items-center gap-4 leading-5 font-semibold border-2 active:border-black py-3 px-2 rounded-lg"
          >
            <div className="bg-[#eee] p-2 rounded-full">
              <IoLocation className="text-xl" />
            </div>
            <h3>{suggestion}</h3>
          </div>
        );
      })}
    </div>
  );
};
