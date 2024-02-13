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
import {RegisterFormSchema} from "@/formSchemas.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            login: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
        fetch("http://localhost:8000/auth/register", {
            method: "POST",
            body: JSON.stringify(values)
        }).then(async (data) => {
            if(!data.ok) {
                const json = await data.json();
                throw {
                    json: json,
                    error: Error()
                }
            }

            return await data.json();
        })
            .then(json => {
                json = JSON.parse(json);
                localStorage.setItem('access-token', json.access_token);
                navigate('/');
            })
            .catch(({json}) => {
                if(json.detail.code==422){
                    form.setError('email', {
                        message: 'Такой e-mail уже существует!',
                        type: 'invalid_string'
                    });
                }
            })
    }

    return (
        <div className={"items-center justify-center flex flex-1 h-full"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      onError={() => console.log("error")}
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