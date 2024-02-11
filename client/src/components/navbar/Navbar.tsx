import ThemeToggler from "@/components/ThemeToggler/ThemeToggler.tsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

const Navbar = () => {
    return (
        <div className={`flex justify-between p-3
                        border-b-2 border-b-black dark:border-b-white`}>
            <div className={"flex gap-5"}>
                <Button asChild>
                    <Link to={"/login"}>Войти</Link>
                </Button>
                <Button asChild>
                    <Link to={"/register"}>Регистрация</Link>
                </Button>
            </div>
            <ThemeToggler/>
        </div>
    );
};

export default Navbar;