import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
// import PostCard from "@/components/PostCard"; // Hapus jika tidak dipakai, atau gunakan di bawah

export const metadata: Metadata = {
    title: "Belajar Next.js - Blog Teknologi Indonesia",
    description: "Belajar Next.js Fundamental dari dasar hingga mahir. Panduan lengkap, tutorial, dan tips terbaik untuk developer",
    icons: {
        icon: "/images/round.jpeg",
    },
};

// 1. Definisikan Interface untuk Type Safety
interface BlogPost {
    title: string;
    description: string;
    href: string;
    image: string;
    date: string;
    author: string;
}

// 2. Data statis dipindahkan ke luar komponen (Performance Optimization)
const featuredPosts: BlogPost[] = [
    {
        title: "Memulai dengan Next.js - Panduan Lengkap",
        description: "Pelajari dasar-dasar Next.js dan mulai membangun aplikasi web modern dengan framework React yang powerful.",
        href: "/blog/belajar-nextjs",
        image: "/images/gedung.png",
        date: "12 January 2026",
        author: "Developer"
    },
    {
        title: "Laravel Framework - Panduan Pemula",
        description: "Eksplorasi Laravel, framework PHP yang elegan dengan fitur-fitur powerful untuk development web yang efisien.",
        href: "/blog/belajar-laravel",
        image: "/images/banjir.png",
        date: "10 January 2026",
        author: "Developer"
    },
    {
        title: "Latihan Routing di Next.js",
        description: "Kuasai sistem routing di Next.js dengan contoh praktis dan best practices untuk aplikasi yang scalable.",
        href: "/blog/latihan-route-next",
        image: "/images/gedung.png",
        date: "8 January 2026",
        author: "Developer"
    }
];

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-32 px-4 sm:px-6 lg:px-8 w-full">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
                </div>
                
                <div className="relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 text-sm font-semibold">
                                ✨ Terbaru & Berkualitas
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Belajar Teknologi Web Modern
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Panduan lengkap, tutorial mendalam, dan tips eksklusif untuk menguasai Next.js, Laravel, dan teknologi web terkini.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/blog" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                                    Baca Blog
                                </Link>
                                <Link href="/contact" className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition duration-300">
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <div className="aspect-square bg-linear-to-br from-blue-400 to-purple-400 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Artikel Terbaru
                        </h2>
                        <p className="text-xl text-slate-600">
                            Konten edukatif terbaik untuk developer Indonesia
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredPosts.map((post, index) => (
                            <Link key={index} href={post.href} className="group">
                                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden bg-slate-200">
                                        <Image 
                                            src={post.image} 
                                            alt={post.title} 
                                            width={400} 
                                            height={200}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition duration-300">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-700 mb-4 flex-1">
                                            {post.description}
                                        </p>
                                        <div className="text-sm text-slate-600">
                                            <span className="font-semibold">{post.date}</span> • by {post.author}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/blog" className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg transition duration-300">
                            Lihat Semua Artikel →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Mengapa Memilih Blog Kami?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center p-8">
                            <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Konten Berkualitas</h3>
                            <p className="text-slate-700">
                                Artikel ditulis oleh developer berpengalaman dengan penjelasan yang mudah dipahami.
                            </p>
                        </div>

                        {/* Feature 2 (Fixed SVG Error) */}
                        <div className="text-center p-8">
                            <div className="inline-block bg-green-100 text-green-600 p-4 rounded-full mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 16.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-5.352 5.352a.75.75 0 001.06 1.06l5.352-5.352zM2.75 9a.75.75 0 100-1.5A.75.75 0 002.75 9zm0 5a.75.75 0 100-1.5A.75.75 0 002.75 14zm14.5-5a.75.75 0 100-1.5.75.75 0 000 1.5zm0 5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Update Rutin</h3>
                            <p className="text-slate-700">
                                Artikel baru dipublikasikan secara konsisten dengan topik yang relevan dan trending.
                            </p>
                        </div>

                        {/* Feature 3 (Fixed SVG Error) */}
                        <div className="text-center p-8">
                            <div className="inline-block bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18.403 0H1.597C.71 0 0 .75 0 1.676v16.648C0 19.25.71 20 1.597 20h16.806c.887 0 1.597-.75 1.597-1.676V1.676C20 .75 19.29 0 18.403 0zM5.354 5.373c0 .961.775 1.738 1.738 1.738s1.738-.777 1.738-1.738c0-.962-.775-1.738-1.738-1.738s-1.738.776-1.738 1.738zm12.413 11.769H2.234V9.31h15.533v7.832z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Contoh Praktis</h3>
                            <p className="text-slate-700">
                                Setiap artikel dilengkapi dengan contoh kode dan studi kasus nyata yang bisa dipelajari.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8 mb-0">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Jangan Lewatkan Update Terbaru
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Dapatkan notifikasi setiap kali kami mempublikasikan artikel baru.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300">
                            Hubungi Kami
                        </Link>
                        <Link href="/blog" className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition duration-300">
                            Jelajahi Blog
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}