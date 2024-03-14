import "@/globals.css";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default function Home() {
    async function login() {
        'use server'

        const expires = new Date(Date.now()+180);
        cookies().set('session', 'lorem', {expires});
        redirect('/');
    }

    return (
        <div className={'text-center'}>
            <form action={login}>
                <input type={"submit"} value={"Login"}/>
            </form>
        </div>
    );
}
