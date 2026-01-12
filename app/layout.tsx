import Navbar from "@/components/Navbar";
import { roboto } from "./fonts";
import './globals.css';
import { Metadata } from "next";

interface LayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: {
        default: "Belajar Next.js",
        template: "%s | Belajar Next.js",
    },
    description: "Belajar Next.js Fundamental dari dasar hingga mahir",
    icons: {
        icon: "/images/round.jpeg",
    }
};


export  default function Layout({ children } : LayoutProps) {
    return (
        <html lang="en" className={roboto.variable}>
            {/* <head>
                <title>Learn Next.js Fundamental</title>
            </head> */}
            <body className="flex flex-col min-h-screen bg-gray-50">

                <header className="bg-white shadow-md sticky top-0 z-50">
                    <Navbar />
                </header>

                <main className="grow w-full">
                    {children}
                </main>

                <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
                        <p className="text-gray-300 mt-5">© 2024 Next.js Fundamental</p>
                    </div>
                </footer>
                
            </body>
        </html>
    );
}