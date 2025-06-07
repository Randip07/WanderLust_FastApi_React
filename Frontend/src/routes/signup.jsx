import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
   return (
      <div className="flex h-screen mx-auto justify-center pt-10 bg-gray-100">
         <div className="h-fit flex flex-col gap-3 px-10 py-10 bg-white rounded-2xl shadow-2xl w-2/6">
            <div className="flex gap-2 items-center">
               <img src="https://hygzdmdnxozugqoywumb.supabase.co/storage/v1/object/public/uploads/postImages/logo.png" alt="" className="w-15" />
               <h4 className="text-2xl font-semibold">Wanderlust</h4>
            </div>
            <div>
               <h4 className="text-4xl font-semibold">Let's</h4>
               <h4 className="text-4xl font-semibold">Get Started</h4>
               <h4 className="text-xs mt-2">Please fill all the details to create account</h4>
            </div>
            <div className="flex flex-col gap-5">
               <TextField id="outlined-basic" label="Name" size="small" variant="standard" type="text" required className="w-full" />
               <TextField id="outlined-basic" label="Email" size="small" variant="standard" type="email" required className="w-full" />
               <TextField id="outlined-basic" security="true" size="small" label="Password" variant="standard" type="password" required className="w-full" />
               <button className="bg-indigo-600 text-amber-50 text-2xl mt-2 px-10 py-3 rounded-full transition-all ease-in-out cursor-pointer hover:scale-105">Create</button>
            </div>
            <div className="flex justify-center gap-2">
               <h4>Already have an account?</h4>
               <h4 className="text-indigo-600 font-semibold cursor-pointer transform transition-all hover:scale-105">
                <Link to="/login">Login here</Link>
               </h4>
            </div>
         </div>
      </div>
   );
};

export default Signup;
