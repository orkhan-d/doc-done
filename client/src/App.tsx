import './App.css'
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/Navbar.tsx";
import {BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes} from "react-router-dom";
import LoginPage from "@/pages/LoginPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Navbar/>
                    <Routes>
                        <Route path="*" element={<NotFoundPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    )
}

export default App
