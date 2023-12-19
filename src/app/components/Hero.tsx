"use client";
import { useState } from "react";
import Image from 'next/image'; // Import the next/image component
import  Main  from "@/app/images/main.webp";
import Navbar from "./Navbar";
export const UpdateUI = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue(value + 1);
  };

  const reset = () => {
    // Show a confirmation dialog
    const confirmReset = window.confirm("Are you sure you want to reset?");
    
    // If the user clicks OK, reset the value
    if (confirmReset) {
      setValue(0);
    }
  };


  return (
    <div className="w-full h-screen">
      <div>
      <Image
        src={Main} // Replace with your actual image path
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      </div>
      <Navbar/>
      <div className="relative flex justify-center">
        <div className="py-24">
        <p className="font-bold text-slate-50 px-5 py-2 text-8xl">{value}</p>
        <span className="">
        <button className="bg-gradient-to-r from-red-900 to-yellow-300 p-10 rounded-full border transform transition-transform hover:scale-110" onClick={increment}>Count</button>
        </span>
        <span>
        <button className="bg-gradient-to-r from-red-900 to-yellow-300 p-2 rounded-md border transform transition-transform hover:scale-110" onClick={reset}>Reset</button>
        </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateUI;
