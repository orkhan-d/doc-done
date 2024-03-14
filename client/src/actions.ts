import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function getSession() {
    'use server'

    return cookies().get('session')?.value;
}

export async function setSession() {
    'use server'

    cookies().set('session', 'lorem');
}

export async function deleteSession() {
    'use server'

    cookies().set('session', '', {expires: new Date(0)});
        // cookies().delete('session');
}

export async function logout() {
    'use server'

    await deleteSession();
    redirect('/');
}