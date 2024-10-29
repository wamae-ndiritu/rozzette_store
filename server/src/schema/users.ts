import { z }from "zod";

export const SignUpSchema = z.object({
    username: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string().startsWith('0', "Phone number must be 0* ** *** ***").max(10),
    password: z.string().min(6)
})