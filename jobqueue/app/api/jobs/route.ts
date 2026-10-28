import { prisma } from '@/lib/db';
import { jobSchema } from "@/lib/jobValidator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const body = await req.json()
        const result = jobSchema.safeParse(body)

        if(!result.success){
            return NextResponse.json({
                errors: result.error.flatten().fieldErrors
            }, {status: 400})
        }

        const {JobType, payload} = result.data;

        const job = await prisma.job.create({
            data: {
                JobType,
                payload
            }
        })

        return NextResponse.json({
            msg: "Job created successfully",
            job
        }, {status: 201})

    } catch (error) {
        console.error(error)
        return NextResponse.json({
            msg: "Internal Server Error"
        }, {status: 500})
    }
}

export async function GET(req: NextRequest){
    try {
        const jobs = await prisma.job.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json({
            msg: "Jobs fetched successfully",
            count: jobs.length,
            jobs
        }, {status: 200})
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            msg: "Internal Server Error"
        }, {status: 500})
    }
}