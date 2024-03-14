import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "@/globals.css";
import Navbar from "@/_ui/Navbar";

const roboto = Roboto({
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "700"]
});

export const metadata: Metadata = {
    title: "DocDone",
    description: "0rkhan.d production",
};

export default function RootLayout({children}:
    Readonly<{children: React.ReactNode}>) {

    return (
        <html lang="en">
            <body className={`${roboto.className}`}>
                <Navbar/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
