"use client"

import axios from "axios";
import React, { useState } from "react";

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignup(){
        try {
            await axios.post("http://localhost:3000/api/auth/signup", {
                name,
                email,
                password
            })
            alert("USer created successfully")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center border border-blue-100">
      <div className="w-120 h-100 bg-slate-900 p-10">
        <label className="text-white text-xl">Name</label>
        <br />
        <input
          className="mt-1 border "
          type="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label className="text-white text-xl mt-2">Email</label>
        <br />
        <input
          className="mt-1 border "
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label className="text-white text-xl">Password</label>
        <br />
        <input
          className="mt-1 border "
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='m-5 bg-blue-300 w-15 rounded p-1 text-black'>
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
