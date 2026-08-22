import React from "react";

function About() {
  return (
    <div>
      <div className="flex items-center justify-center mt-2">
        <h2 className="text-md font-semibold text-slate-800">ABOUT ME</h2>
      </div>
      <div className='mt-2'>
        <p className='text-md font-serif m-3'>
            Hii, I'm Arvind Vishwkarma a BTech Computer Science student graduated in 2026.
            I have secured 8.17 CGPA in my Graduation.
            Coming to my Tech Stack I have knowledge in MERN Stack and currently I'm learning
            about Next.js and Typescript.
            I have also developed some projects throughout my BTech journey and one of them is
            Food Ordering Website where user can browse food items and order foods. I use MERN Stack to build this project.

        </p>
      </div>
    </div>
  );
}

export default About;
