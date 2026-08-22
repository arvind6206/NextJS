import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between m-5 ">
      <div className=''>
        <h1 className='font-bold text-xl'>ARVIND</h1>
      </div>
      <div className="flex gap-5 items-center font-semibold cursor-pointer">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Skills</h2>
        <h2>Projects</h2>
        <h2>Experience</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
}

export default Navbar;
