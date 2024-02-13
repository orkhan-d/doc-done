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
import {LoginFormSchema} from "@/formSchemas.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {

        fetch("http://localhost:8000/auth/login", {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(values),
        })
            .then(async (data) => {
                if(!data.ok)
                    throw {
                        data: await data.json(),
                        error: Error()
                    }
                return await data.json();
            })
            .then(json => {
                json = JSON.parse(json);
                localStorage.setItem('access-token', json.access_token);
                navigate('/');
            })
            .catch(({data}) => {
                if(data.detail.code==422) {
                    form.setError('email', {
                        message: 'Неверные данные!',
                        type: 'invalid_string'
                    });
                    form.setError('password', {
                        message: 'Неверные данные!',
                        type: 'invalid_string'
                    });
                }
        })
    }

    return (
        <div className={"items-center justify-center flex flex-1 h-full"}>
            <Form {...form}>
                <form method={"POST"} onSubmit={form.handleSubmit(onSubmit)}
                      className={`space-y-5 p-6 w-1/4
                                border-2 border-black dark:border-white
                                m-0-auto rounded-2xl`}>
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
                    <Button type="submit">Войти</Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginPage;