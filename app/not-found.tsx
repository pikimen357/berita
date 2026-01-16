import Link from "next/link";
import { JSX } from "react";

export default function NotFoundPage(): JSX.Element {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen -mt-32 px-4">
                <div className="text-center space-y-6">
                    <div className="mb-5">
                        <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-300">
                            404
                        </h1>
                    </div>
                    {/* <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-gray-500">
                        404
                    </h1> */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-400">
                        Oops! Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto">
                        Maaf, halaman yang Anda cari mungkin telah dihapus atau tidak tersedia saat ini.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 mt-10">
                        <Link 
                            href="/" 
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
                        >
                            Kembali ke Beranda
                        </Link>
                        <Link 
                            href="/blog" 
                            className="px-6 py-3 border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg transition duration-200"
                        >
                            Lihat Blog
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}