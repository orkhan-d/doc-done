import './App.css'
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/Navbar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "@/pages/LoginPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";
import Footer from "@/components/footer/Footer.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Navbar/>
                    <Routes>
                        <Route path="*" element={<NotFoundPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                    </Routes>
                    <Footer/>
                </ThemeProvider>
            </BrowserRouter>
        </>
    )
}

export default App
