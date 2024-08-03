"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
function page() {
  return (
    <div className="bg-neutral-950">
      <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the way of Music
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            At Join the Way of Music, we believe that music is more than just a
            series of notes—it's a universal language that connects, inspires,
            and transforms lives. Our mission is to create a vibrant community
            where musicians of all levels can come together to learn, share, and
            grow.
          </p>
        </div>
        <BackgroundBeams />
      </div>
      <div className="h-50 w-full my-4 py-5 bg-gray-900">
        <div className="text-center px-6">
          <h1 className="text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Who We Are</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto my-2 text-sm text-center">
            We’re a passionate group of musicians, educators, and enthusiasts
            who are dedicated to fostering a love for music in every person we
            reach. Whether you’re a budding artist, a seasoned performer, or
            someone who simply loves to listen, our platform is designed with
            you in mind. We understand the joys and challenges of the musical
            journey, and we're here to support you every step of the way.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default page;
