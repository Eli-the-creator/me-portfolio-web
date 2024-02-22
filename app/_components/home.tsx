"use client";

import animationData from "../../public/Animation - 1706810387733.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import React from "react";

export default function NameSection() {
  return (
    <div className="flex flex-col  justify-center items-center w-max-screen h-screen">
      <div className="mb-32">
        <div className="text-5xl md:text-9xl font-extrabold text-slate-100/90 mb-4">
          <h1 className="italic">Eliasz</h1>
          <h2 className="">Zakrzewski</h2>
        </div>
        <p className="text-md md:text-xl font-semibold font-mono text-slate-100/60">
          <span className="bg-orange-500 text-stone-800">
            FRONT & APP DEVELOPER
          </span>
          <br />
          WHO LIKE GOOD DESIGN & UX.
        </p>
      </div>
      <div className="w-16 h-16 md:w-20 md:h-20 ">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}
