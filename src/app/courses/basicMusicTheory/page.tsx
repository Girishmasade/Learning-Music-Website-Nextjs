"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

function page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
      <h1 className='text-center text-4xl pt-12 font-bold text-stone-500'>Basic Music Theory</h1>
      <div className="w-full h-40 relative">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

export default page
