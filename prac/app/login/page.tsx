"use client"

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    async function handleLogin(){
        try {
            await axios.post("http://localhost:3000/api/auth/login", {
                email,
                password
            })
            alert("USer logged in")
          router.replace("/")

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center border border-blue-100">
      <div className="w-120 h-100 bg-slate-900 p-10">
        

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
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
