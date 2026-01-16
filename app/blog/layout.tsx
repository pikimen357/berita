import Link from "next/link";
import ListAside from "@/components/ListAside";
import { JSX } from "react";

export default  async function BlogLayout({children}: {children: React.ReactNode}): Promise<JSX.Element> {

    return (
        <div className="flex gap-8 min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 h-screen sticky top-20">
                <div className="bg-linear-to-b from-slate-50 to-slate-100 p-6 border-r border-slate-200 h-full overflow-y-auto flex flex-col rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Menu Blog</h3>
                    
                    <nav className="space-y-3 flex-1 flex flex-col">
                        <div className="pb-4 border-b border-slate-200">
                            <h4 className="text-sm font-semibold text-slate-700 uppercase mb-3">Kategori</h4>
                            <ul className="space-y-2">
                                <ListAside content="Tutorial" />
                                <ListAside content="Tips & Tricks" />
                                <ListAside content="Best Practices" />
                            </ul>
                        </div>

                        <div className="pb-4 border-b border-slate-200">
                            <h4 className="text-sm font-semibold text-slate-700 uppercase mb-3">Terupdate</h4>
                            <ul className="space-y-2">
                                <ListAside content="Perkembangan AI" />
                                <ListAside content="Keamanan Siber" />
                                <ListAside content="Serangan Rudal" />
                                <ListAside content="Teknologi Blockchain" />
                            </ul>
                        </div>

                        <div className="">
                            <h4 className="text-sm font-semibold text-slate-700 uppercase mb-3">Lainnya</h4>
                            <button className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200 shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 pr-8">
                <div className="prose prose-sm max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">
                    {children}
                </div>
            </main>
        </div>
    );
}