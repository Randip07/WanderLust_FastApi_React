import React, { useState } from "react";
import PopUp from "./PopUp";
import { listingData } from "../assets/dummyData";
import Card from "./Card";
import Loading from "./Loading";

const Profile = () => {
   const [listings, setListings] = useState(listingData);
   const [loading, setLoading] = useState(true);

   useState(()=>{
       setTimeout(() => {
           setLoading(false)
       }, 1000);
      },[])
      
   return loading ? (
      <div className="flex justify-center items-center">
         <Loading />
      </div>
   ) : (
      <div className="flex-1 px-8 h-screen overflow-scroll">
         <div className="sticky top-0 bg-gray-100 z-10">
            <div className="py-4">
               <h1 className="text-3xl tracking-wider">Profile</h1>
            </div>
            <div className="px-10 py-5 border-b-1 flex gap-5 items-center">
               {/* <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className="w-20 rounded-full" /> */}
               <div className="bg-[#c7d2fe] text-[#3730a3] font-semibold text-4xl rounded-full px-6 py-6.5">RD</div>
               <div>
                  <h1 className="text-2xl font-semibold">Ranadip Das</h1>
                  <h1>ranadipdas07@gmail.com</h1>
               </div>
            </div>
         </div>

         <h1 className="text-2xl mt-2">Your Listings</h1>
         <div className="flex gap-10 my-5 ml-3 flex-row flex-wrap">
            {listings.map((listing, index) => {
               return <Card key={index} listing={listing} />;
            })}
         </div>
      </div>
   );
};

export default Profile;
