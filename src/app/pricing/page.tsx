"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
function page() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <ShootingStars />
        <StarsBackground />
      <h1 className="text-2xl font-bold">Pricing</h1>
    </div>
  )
}

export default page
