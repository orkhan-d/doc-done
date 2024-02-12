import {z} from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export const RegisterFormSchema = z.object({
    login: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string().readonly()
}).superRefine(({password, confirmPassword}, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "invalid_string",
            path: ["password"],
            fatal: true,
            message: "Пароли должны совпадать",
            validation: "cuid"
        });
        ctx.addIssue({
            code: "invalid_string",
            path: ["confirmPassword"],
            fatal: true,
            message: "Пароли должны совпадать",
            validation: "cuid"
        });
    }
})