import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const {name, email, password} = await request.json()
        if(!name || !email ||!password){
            return NextResponse.json({
                msg: "These fields are required"
            }, {status: 400})
        }

        const existingUser = await prisma.user.findUnique({
            where: {email}
        })

        if(existingUser){
            return NextResponse.json({
                msg: "User already exists"
            }, {status: 400})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
           data: {
             name,
            email,
            password: hashedPassword
           }
        })

        return NextResponse.json({
            msg: "User created successfully",
            user
        }, {status: 200})



    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "Internal Server Error"
        }, {status: 500})
    }
}