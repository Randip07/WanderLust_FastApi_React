import { IndianRupee, MapPinHouse } from "lucide-react";
import React, { useState } from "react";
import PopUp from "./PopUp";

const Card = ({ listing }) => {
   const [showPopUp, setShowPopUp] = useState(false);
   return (
      <>
         <div onClick={() => setShowPopUp(true)} className="flex flex-col w-60 h-60 cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <img src={`${listing?.img}`} alt="" className="rounded-t-xl h-4/10 object-cover" />
            <div className="bg-white p-4 rounded-b-xl gap-1.5 flex flex-col">
               <h2 className="text-xl">{listing.name.length > 18 ? listing.name.slice(0, 17) + "..." : listing.name}</h2>
               <h4 className="text-xs">{listing.description.length > 50 ? listing.description.slice(0, 50) + "..." : listing.description}</h4>
               <div className="flex flex-row gap-1 mt-2 items-center">
                  <MapPinHouse size={15} />
                  <h4 className="text-xs">{listing?.location}</h4>
               </div>
               <div className="flex flex-row gap-1 items-center">
                  <IndianRupee size={15} />
                  <h4 className="text-xs">{listing?.price}/-</h4>
               </div>
            </div>
         </div>

         {showPopUp && <PopUp onClose={() => setShowPopUp(false)} listing = {listing} />}
      </>
   );
};


export default Card;
