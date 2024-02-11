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
import {EyeClosedIcon, EyeNoneIcon} from "@radix-ui/react-icons";

const LoginPage = () => {
    return (
        <div className={"flex flex-col justify-center items-center w-full h-full gap-3"}>
            <div className={"flex justify-center items-center w-6/12 gap-6"}>
                <EyeNoneIcon className={"w-10 h-10"}/>
                <p className={"text-5xl"}>404 Not found!</p>
            </div>
            <p className={"opacity-50"}>Страница не найдена! Перейдите на другую</p>
        </div>
    );
};

export default LoginPage;