import React, { useState } from "react";
import Card from "./Card";
import { listingData } from "../assets/dummyData";
import Loading from "./Loading";

const Dashboard = () => {
   const [listings, setListings] = useState(listingData);
   const [loading, setLoading] = useState(true);

   useState(()=>{
    setTimeout(() => {
        setLoading(false)
    }, 500);
   },[])
   return loading ? (
      <div className="flex justify-center items-center">
         <Loading/>
      </div>
   ) : (
      <div className="px-8 h-screen flex-1 flex-row overflow-scroll">
         <div className="border-b-2 border-gray-300 py-4 mb-4 sticky top-0 bg-gray-100 z-50">
            <h2 className="text-3xl tracking-wider">Explore All Listings</h2>
         </div>
         <div className="flex gap-10 mb-10 ml-3 flex-row flex-wrap">
            {listings.map((listing, index) => {
               return <Card key={index} listing={listing} />;
            })}
         </div>
      </div>
   );
};

export default Dashboard;
