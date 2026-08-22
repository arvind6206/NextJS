import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function POST(request: NextRequest){
    try {
        const {email, password} = await request.json()
        if(!email ||!password){
            return NextResponse.json({
                msg: "These fields are required"
            }, {status: 400})
        }

        const findUser = await prisma.user.findUnique({
            where: {email}
        })

        if(!findUser){
            return NextResponse.json({
                msg: "User does not exist"
            }, {status: 400})
        }

        const matched = await bcrypt.compare(password, findUser.password);
        if(!matched){
            return NextResponse.json({
                msg: "Incorrect Password"
            }, {status: 400})
        }

        const JWT_SECRET = process.env.JWT_SECRET!

        const token = jwt.sign({
           userId: findUser.id
        }, JWT_SECRET)

        return NextResponse.json({
            msg: "Login Successfully",
            token
            
        }, {status: 200})



    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "Internal Server Error"
        }, {status: 500})
    }
}