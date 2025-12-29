import Link from "next/link";

import './globals.css';

interface LayoutProps {
    children: React.ReactNode;
}


export  default function Layout({ children } : LayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>Learn Next.js Fundamental</title>
            </head>
            <body className="flex flex-col min-h-screen bg-gray-50">

                <header className="bg-white shadow-md sticky top-0 z-50">
                    <nav className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
                        <ul className="flex gap-8 items-center">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
                    {children}
                </main>

                <footer className="bg-gray-800 text-white mt-12">
                    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
                        <p className="text-gray-300">© 2024 Next.js Fundamental</p>
                    </div>
                </footer>
                
            </body>
        </html>
    );
}