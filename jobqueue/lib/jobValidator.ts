import {z} from 'zod'

 export const jobSchema = z.object({
    JobType: z.enum(["SEND_EMAIL"]),

    payload: z.object({
        to: z.email(),
        subject: z.string().min(1),
        message: z.string().min(1),
    })
})
