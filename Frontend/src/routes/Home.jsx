import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import SideBarItem from "../components/SideBarItem";
import { BadgePlus, LayoutDashboard, UserCircle } from "lucide-react";
import Dashboard from "../components/Dashborad";
import Profile from "../components/Profile";
import NewListing from "../components/NewListing";

const Home = () => {
   const [tab, setTab] = useState("Dashboard");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);

   return loading ? (
     <div className="flex h-screen flex-col justify-center items-center ">
       <Loading />
       <h4 className="text-2xl -top-10 relative">Welcome to the Wanderlust</h4>
     </div>
   ) : (
      <>
         <div className="flex flex-row bg-gray-100">
            <div className="w-2/12 ">
               <SideBar>

                  <button className="w-full mt-5" onClick={() => setTab("Dashboard")}>
                     <SideBarItem icon={<LayoutDashboard size={25} />} text="Dashboard" active={tab == "Dashboard"} />
                  </button>
                  <button onClick={() => setTab("Profile")} className="w-full">
                     <SideBarItem icon={<UserCircle size={25} />} text="Profile" alert={true} active={tab == "Profile"} />
                  </button>
                  <button className="w-full" onClick={() => setTab("New Listing")}>
                     <SideBarItem icon={<BadgePlus size={25} />} text="List your Feed" active={tab == "New Listing"} />
                  </button>
               </SideBar>
            </div>
            <div className="w-10/12 flex justify-center">
               {tab == "Dashboard" && <Dashboard />}
               {tab == "Profile" && <Profile />}
               {tab == "New Listing" && <NewListing />}
            </div>
         </div>
      </>
   );
};

export default Home;
