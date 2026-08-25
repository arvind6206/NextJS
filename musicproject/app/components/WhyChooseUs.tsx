"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Discover Your Sound
      </div>
    ),
  },
  {
    title: "Learn from Passionate and Experienced Instructors",
    description:
      "Learn from musicians who are passionate about teaching and dedicated to helping you improve. Whether you're picking up an instrument for the first time or looking to refine your skills, our instructors provide personalized guidance and practical feedback.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--purple-500))] text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Master Your Instrument at Your Own Pace",
    description:
      "Build strong musical foundations through structured lessons designed around your goals. Practice essential techniques, understand music theory, develop your confidence, and gradually progress from the basics to advanced musical concepts.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Master Your Instrument
      </div>
    ),
  },
  {
    title: "Turn Your Ideas into Music",
    description:
      "Go beyond learning an instrument and discover your creative side. Explore songwriting, composition, improvisation, and music production while developing your own unique musical style and creative voice.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--rose-500))] text-white">
        Create Your Music
      </div>
    ),
  },
  {
    title: "Practice, Perform, and Grow with Confidence",
    description:
      "Put your skills into practice through performances and interactive sessions. Build confidence, overcome stage fear, collaborate with fellow musicians, and celebrate every milestone along your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white">
        Practice & Perform
      </div>
    ),
  },
];

function WhyChooseUs() {
  return <div>
    <StickyScroll content={musicSchoolContent}/>
  </div>;
}

export default WhyChooseUs;
