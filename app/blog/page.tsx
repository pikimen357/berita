import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>This is Blog</h1>
            <p>List of blog</p>
            <ul>
                <li>
                    <Link href="/blog/belajar-nextjs">Post </Link>
                </li>
                <li>
                    <Link href="/blog/latihan-route-next">Latihan Route</Link>
                </li>
            </ul>
        </>
    );
}