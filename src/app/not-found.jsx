"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";

const NotFound = () => {
    const router = useRouter();


  return (
    <div className="h-screen w-screen flex-col justify-between bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200">
        <div className="h-full w-full flex justify-between flex-col items-center">
            <div className="px-7 py-5 w-full flex justify-center">
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl pr-4 text-red-900 font-semibold text-right ">Go Back Home: </h1>
                    <p className="  text-2xl text-red-900 font-semibold cursor-pointer text-right hover:scale-125 transition" onClick={() => router.push("/")}><HiHome size={50}/></p>
                </div>
            </div>
            <div className="text-6xl text-red-900 font-bold">
                Page Not Found!
            </div>
            <h3 className=" text-red-900 font-bold py-4 text-center text-lg">Created for CC303 by Surya Sunkari and Ethan Benson</h3>
        </div>
    </div>
  )
}

export default NotFound