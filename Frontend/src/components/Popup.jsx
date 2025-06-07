import { Download, IndianRupee, MapPinHouse, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import Loading from "./Loading";

const PopUp = ({ onClose, listing }) => {
   const [loading, setLoading] = useState(false);
   const modelRef = useRef();

   const closeModel = (e) => {
      if (modelRef.current === e.target) {
         onClose();
      }
   };

   // useEffect(()=>{
   //    setTimeout(() => {
   //       setLoading(false)
   //    }, 300);
   // },[])

   return (
      <div onClick={closeModel} ref={modelRef} className="z-100 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center pt-10 ">
         {loading ? <Loading></Loading> : (
            <Zoom duration={300}>
            <div className="flex flex-col text-white">
               <button onClick={onClose} className="place-self-end text-black cursor-pointer">
                  <X />
               </button>
               <div className="rounded-xl flex flex-col items-center mx-4 bg-white">
                        <div className="w-full bg-black rounded-xl">
                           <img src={listing?.img} alt="" className="h-50 w-full object-cover rounded-t-xl opacity-85" />
                        </div>
                        <div className="py-5 px-5 flex flex-col justify-start">
                           <h1 className="text-2xl font-extrabold text-black">{listing?.name}</h1>
                           <h4 className="text-lg max-w-lg text-black">{listing?.description}</h4>
                           <div className="flex flex-row gap-1 mt-2 items-center">
                              <MapPinHouse size={20} className="text-black" />
                              <h4 className="text-lg text-black">{listing?.location}</h4>
                           </div>
                           <div className="flex flex-row gap-1 items-center">
                              <IndianRupee size={20} className="text-black" />
                              <h4 className="text-lg text-black">{listing?.price}/-</h4>
                           </div>
                        </div>
               </div>
            </div>
         </Zoom>
         )}
      </div>
   );
};

export default PopUp;
