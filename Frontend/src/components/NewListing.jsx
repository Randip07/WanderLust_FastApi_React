import { FormControl, TextField } from "@mui/material";
import React from "react";

const NewListing = () => {
   return (
      <div className="flex-1 px-10 py-4">
        <h1 className="text-3xl tracking-wider">List Your Home</h1>
         <div className="px-10 py-10 flex justify-center">
            <div className="bg-white px-10 py-10 flex flex-col gap-3 w-3/4 rounded-2xl shadow-2xl">
               <h4>Enter your home name</h4>
              <TextField id="outlined-basic" label="Home Name" variant="outlined"/>
              <h4>Enter your home description</h4>
              <TextField id="outlined-basic" multiline label="Home Description" variant="outlined" className="w-full"/>
              <h4>Enter your home location</h4>
              <TextField id="outlined-basic" label="Home Location" variant="outlined" className="w-full"/>
              <h4>Enter your home Price</h4>
              <TextField id="outlined-basic" label="Price per night" variant="outlined" className="w-full" type="number"/>
              <button className="bg-indigo-600 text-amber-50 text-2xl self-start px-10 py-3 rounded-full transition-all ease-in-out cursor-pointer hover:scale-105">Create</button>
            </div>
         </div>
      </div>
   );
};

export default NewListing;