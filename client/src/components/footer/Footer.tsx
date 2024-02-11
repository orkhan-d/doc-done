import ThemeToggler from "@/components/ThemeToggler/ThemeToggler.tsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {GitHubLogoIcon, InstagramLogoIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {flushSync} from "react-dom";

const Footer = () => {
    return (
        <div className={`flex justify-between items-center p-3
                        border-t-2 border-t-black dark:border-t-white`}>
            <div className={"flex gap-3"}>
                <p className={"text-[1.5rem]"}>Doc-Done</p>
                <Button variant="outline" size="icon">
                    <a className={"w-full h-full flex justify-center items-center"} target={"_blank"} href={"https://github.com/orkhan-d/doc-done"}>
                        <GitHubLogoIcon className="absolute h-[1.5rem] w-[1.5rem] scale-100 transition-all" />
                    </a>
                </Button>
            </div>
            <div className={"flex gap-3"}>
                <p className={"text-[1.3rem]"}>Creator:</p>
                <p className={"text-[1.3rem]"}>Dzhafarli Orkhan</p>
                <Button variant="outline" size="icon">
                    <a className={"w-full h-full flex justify-center items-center"} target={"_blank"} href={"https://instagram.com/0rkhan.d"}>
                        <InstagramLogoIcon className="absolute h-[1.5rem] w-[1.5rem] scale-100 transition-all" />
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default Footer;