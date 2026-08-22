"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSignup = async () => {
        if (!username || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            await axios.post("http://localhost:3000/api/v1/signup", {
                username,
                password,
            });

            router.push("/signin");
        } catch (err) {
            console.error(err);
            alert("Signup failed");
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border p-5 flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleSignup}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}