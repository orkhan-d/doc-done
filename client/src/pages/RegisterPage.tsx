import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import {LoginFormSchema, RegisterFormSchema} from "@/formSchemas.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

const LoginPage = () => {
    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
        console.log(values);
    }

    return (
        <div className={"items-center justify-center flex flex-1 h-full"}>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)}
                      className={`space-y-5 p-6 w-1/4
                      border-2 border-black dark:border-white
                      m-0-auto rounded-2xl`}>
                    <FormField
                        control={form.control}
                        name="login"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Логин</FormLabel>
                                <FormControl>
                                    <Input placeholder="Логин" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="E-mail" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                    <Input placeholder="Пароль" type={"password"} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Подтверждение пароля</FormLabel>
                                <FormControl>
                                    <Input placeholder="Подтверждение пароля" type={"password"} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Войти</Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginPage;