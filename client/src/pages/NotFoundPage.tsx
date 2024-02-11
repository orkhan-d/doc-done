import {EyeNoneIcon} from "@radix-ui/react-icons";

const LoginPage = () => {
    return (
        <div className={"flex flex-1 flex-col justify-center items-center w-full h-full gap-3"}>
            <div className={"flex justify-center items-center w-6/12 gap-6"}>
                <EyeNoneIcon className={"w-10 h-10"}/>
                <p className={"text-5xl"}>404 Not found!</p>
            </div>
            <p className={"opacity-50"}>Страница не найдена! Перейдите на другую</p>
        </div>
    );
};

export default LoginPage;