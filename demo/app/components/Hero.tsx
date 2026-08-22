import React from "react";

function Hero() {
  return (
    <div className='bg-slate-200'>
      <div className="flex items-center justify-center mt-10">
        <h2 className="text-xl font-semibold">
          Hii, I am Arvind Vishwkarma Full Stack Developer
        </h2>
      </div>
      <div className="flex items-center justify-center mt-3">
        <p>
          I build modern website and application using React, Node and Express
        </p>
      </div>
      <div className="flex justify-center mt-5 gap-5 text-blue-400 font-medium cursor-pointer">
        <a href="https://github.com/arvind6206">
          <h2>View Project</h2>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=smartclipai@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Contact Me</h2>
        </a>
      </div>
    </div>
  );
}

export default Hero;
