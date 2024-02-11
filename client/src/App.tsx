import { useState } from 'react'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/Navbar.tsx";

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Navbar/>
            </ThemeProvider>
        </>
    )
}

export default App
