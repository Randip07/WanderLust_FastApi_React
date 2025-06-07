import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import React from "react";


export default function SideBar({ children }) {
   return (
      <aside className="h-screen">
         <nav className="h-full flex flex-col bg-white border-r rounded-tr-4xl border-amber-100 shadow-sm">
            <div className="p-4 pb-2 flex gap-2 items-center">
               <img
                  src="https://hygzdmdnxozugqoywumb.supabase.co/storage/v1/object/public/uploads/postImages/logo.png"
                  alt="image"
                  className={`overflow-hidden transition-all w-15`}
               />
               <h4 className="text-xl">Wanderlust</h4>
            </div>

               <ul className="flex-1 flex-col px-3">{children}</ul>

            <div className="border-t border-amber-100 flex p-3 gap-2">
               <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className="w-10 h-10 rounded-md" />
               <div className={`flex justify-between items-center overflow-hidden transition-all w-52 ml-3`}>
                  <div className="leading-4">
                     <h4 className="font-semibold">Ranadip Das</h4>
                     <span className="text-xs text-gray-600">ranadipdas@gmail.com</span>
                  </div>
                  <MoreVertical size={20} />
               </div>
            </div>
         </nav>
      </aside>
   );
}
