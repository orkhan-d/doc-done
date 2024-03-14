import Link from "next/link";
import '@/globals.css';
import {deleteSession, getSession, logout} from "@/actions";
import {redirect} from "next/navigation";
import clsx from "clsx";

export default async function Navbar () {
    const session = await getSession();

    return (
        <header className={'bg-blue-500'}>
            <nav className={clsx(
                'font-bold text-white flex gap-3 flex-row items-center justify-between py-2 px-6',
            )}>
                <Link href={'/'}>Главная</Link>
                <div className={'flex flex-row items-center justify-between gap-6'}>
                    <Link href={'/me/files'}>Мои файлы</Link>
                    <Link href={'/me/files/upload'}>Загрузить файл</Link>
                </div>
                {session ?
                    <div className={'flex flex-row items-center justify-between gap-6'}>
                        <Link href={'/me'}>Профиль</Link>
                        <form action={logout}>
                            <button>Выход</button>
                        </form>
                    </div>
                    :
                    <div className={'flex flex-row items-center justify-between gap-6'}>
                        <Link href={'/login'}>Вход</Link>
                        <Link href={'/register'}>Регистрация</Link>
                    </div>
                }
            </nav>
        </header>
    )
}