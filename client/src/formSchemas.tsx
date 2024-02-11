import {z} from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export const RegisterFormSchema = z.object({
    login: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string()
}).superRefine(({password, confirmPassword}, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
})