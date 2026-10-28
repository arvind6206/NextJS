import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,
    {params}: {params: Promise<{id: string}>}
){
    try {
        const {id} = await params;
        if(!id){
            return NextResponse.json({
                msg: "id is required"
            }, {status: 400})
        }

        const job = await prisma.job.findUnique({
            where: {
                id: id
            }
        })

        if(!job){
            return NextResponse.json({
                msg: "Job not found"
            }, {status: 404})
        }

        return NextResponse.json({
            msg: "job fetched successfully",
            job
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            msg: "Internal Server Error"
        }, {status: 500})
    }
}