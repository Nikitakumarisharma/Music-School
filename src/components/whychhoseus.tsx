"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import Dpdata from "./dp.png";


const content = [
  {
    title: "Collaborative Jamming",
    description:
      "Jam together in real time with your band, fans, and producers. Collaborate on tracks, share ideas, and make decisions quickly. With our platform, streamline your creative flow and boost your musical productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Collaborative Jamming
      </div>
    ),
  },
  {
    title: "Real-Time Sound Mixing",
    description:
      "Hear changes as they happen. With our platform, every adjustment is updated in real time. Say goodbye to mixing delays and embrace the simplicity of instant sound feedback.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        <Image
  src={Dpdata}
  width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Track Versioning",
    description:
      "Never lose track of your music versions. Our platform ensures you're always working on the latest mix, eliminating the chaos of manual updates. Keep your team synced and the music flowing without interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Track Versioning
      </div>
    ),
  },
  {
    title: "Creative Flow Uninterrupted",
    description:
      "Keep the music going with real-time updates. Our platform ensures every adjustment is reflected instantly, helping you stay in the groove and maintain the creative flow without interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--green-500))] flex items-center justify-center text-white">
        Creative Flow Uninterrupted
      </div>
    ),
  },
];

function WhyChhoseUs (){
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChhoseUs