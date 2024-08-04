"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Learning = [
  {
    id: 1,
    title: 'Formal Music Education',
    desc: 'Structured learning through institutions (e.g., music schools, conservatories).',
    pros: 'Professional instructors, comprehensive curriculum, certifications.',
    cons: 'Costly, requires time commitment.',
  }, 
  {
    id: 2,
    title: 'Private Lessons',
    desc: 'One-on-one instruction with a music teacher.',
    pros: 'Personalized feedback, tailored lessons, flexible scheduling.',
    cons: 'Can be expensive, dependent on the teacher’s availability.',
  }, 
  {
    id: 3,
    title: 'Online Courses',
    desc: 'Digital platforms offering music lessons and resources.',
    pros: 'Accessible anywhere, often more affordable, variety of resources.',
    cons: 'Less personal interaction, can be overwhelming to choose from.',
  }, 
  {
    id: 4,
    title: 'Self-Teaching',
    desc: 'Learning through books, videos, and practice on your own.',
    pros: 'Flexible pace, cost-effective, encourages independence.',
    cons: 'No direct feedback, potential for developing bad habits.',
  }, 
  {
    id: 5,
    title: 'Group Classes/Workshops',
    desc: 'Learning in a group setting with peers.',
    pros: 'Social interaction, collaborative learning, often more affordable.',
    cons: 'Less personalized attention, varying skill levels within the group.',
  }, 
]

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
        <div className="py-5 mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
             {Learning.map((index) => (
                 <CardSpotlight className="h-76 w-96">
                 <div key={index.id} className="p-2 m-2">
                   <div className="card">
                     <h4 className="text-xl py-2 text-red-200	">{index.title}</h4>
                     <p>{index.desc}</p>
                     <div className="py-4">
                     <ul className="my-2">
                       <li className="py-2">Pros: {index.pros}</li>
                       <li className="py-4">Cons: {index.cons}</li>
                     </ul>
                     </div>
                   </div>
                 </div>
                 </CardSpotlight>
             ))
             }
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
