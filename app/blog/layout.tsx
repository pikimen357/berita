import Link from "next/link";

export default function BlogLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex gap-8 min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 h-screen sticky top-0">
                <div className="bg-white p-6 border-r border-gray-200 h-full overflow-y-auto flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Menu Blog</h3>
                    
                    <nav className="space-y-3 flex-1 flex flex-col">
                        <div className="pb-4 border-b border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-600 uppercase mb-3">Kategori</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-2 transition duration-200 block text-sm">
                                        Tutorial
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-2 transition duration-200 block text-sm">
                                        Tips & Tricks
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-2 transition duration-200 block text-sm">
                                        Best Practices
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="pb-4 border-b border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-600 uppercase mb-3">Populer</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/blog/belajar-nextjs" className="text-gray-700 hover:text-blue-600 hover:pl-2 transition duration-200 block text-sm">
                                        Belajar Next.js
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/latihan-route-next" className="text-gray-700 hover:text-blue-600 hover:pl-2 transition duration-200 block text-sm">
                                        Latihan Route
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/judul-berita" className="text-gray-700 hover:text-blue-600 hover:pl-2 transition duration-200 block text-sm">
                                        Judul Berita
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto pt-4">
                            <h4 className="text-sm font-semibold text-gray-600 uppercase mb-3">Lainnya</h4>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200">
                                Subscribe
                            </button>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
                <div className="prose prose-sm max-w-none">
                    {children}
                </div>
            </main>
        </div>
    );
}