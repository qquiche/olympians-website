"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from '@mui/material/Card';
import { HiHome } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import RelevantOlympians from "@/components/RelevantOlympians";

const OlympianPage = ({name, image, otherNames, relevantOlympians, title, origin, mainInfo, relevantMyths, analysisInfo}) => {
  const router = useRouter();

  return (
    <div className="h-min-content w-full flex-col justify-between bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200">
        <div className="h-full w-full flex justify-between flex-col items-center">
            <div className="px-7 py-5 w-full flex justify-between">
                <p className="  text-5xl text-red-900 font-semibold text-right " >{name}</p>
                <p className="  text-2xl text-red-900 font-semibold cursor-pointer text-right hover:scale-125 transition" onClick={() => router.push("/")}><HiHome size={50}/></p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <Card className=" w-1/3 h-full bg-slate-200 rounded-3xl m-3 shadow-lg border-2 border-black flex flex-col justify-evenly">
                    <div className="flex justify-center py-5" style = {{margin: "10px"}}>
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            alt={"Picture of " + name}
                            className="rounded-xl"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl text-black text-center py-1 underline">Other names</h1>
                        <p className="text-lg text-black text-center px-3 pb-10">{otherNames}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-2">
                        <h1 className="font-bold text-2xl text-black text-center py-1 underline">Relevant Olympians/Gods</h1>
                        <RelevantOlympians olympians={relevantOlympians} />
                    </div>
                </Card>
                <Card className=" w-2/3 h-full bg-slate-200 rounded-3xl mx-3 shadow-lg border-2 border-black flex flex-col items-center">
                    <h1 className="font-bold text-4xl text-black text-center py-5">{title}</h1>
                    <div className="flex flex-col justify-evenly w-4/5 h-full">
                        <div className="py-3">
                            <h1 className="font-bold text-2xl text-black py-1 underline">Origin</h1>
                            <p className="text-lg">
                                {origin}
                            </p>
                        </div>
                        <div className="py-3">
                            <h1 className="font-bold text-2xl text-black py-1 underline">Main Information</h1>
                            <p className="text-lg">
                                {mainInfo}
                            </p>
                        </div>

                        <div className="py-3 flex justify-evenly w-full items-start">
                        <Link href={'/myths/' + name.toLowerCase()}>
                            <div className="w-1/2">
                                <h1 className="font-bold text-2xl text-black py-1 underline">Relevant Myths</h1>
                                <div className="text-black mx-5">
                                    {relevantMyths.map((myth) => <div className='py-1' key={myth}>{myth}</div>)}
                                </div>
                            </div>
                        </Link>
                            <div className="w-1/2">
                                <h1 className="font-bold text-2xl text-black py-1 underline">Analysis</h1>
                                <div className="text-black text-lg">
                                    {analysisInfo}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <h3 className=" text-red-900 font-bold py-4 text-center text-lg">Created for CC303 by Surya Sunkari and Ethan Benson</h3>
        </div>
    </div>
  );
};

export default OlympianPage;
