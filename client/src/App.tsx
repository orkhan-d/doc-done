import { useState } from 'react'
import './App.css'
import LoginPage from "@/pages/login/LoginPage.tsx";
import { ThemeProvider } from "@/components/theme-provider";

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {/*<LoginPage/>*/}
                lorem
            </ThemeProvider>
        </>
    )
}

export default App
