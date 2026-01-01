import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";

interface BlogPost {
    title: string;
    href: string;
    description: string;
    image: string;
    date: string;
    author: string;
}

export default function Home() {
    const blogPosts: BlogPost[] = [
        {
            title: "Belajar Next.js",
            href: "/blog/belajar-nextjs",
            description: "Belajar Next.js dengan mudah dan cepat untuk pemula.",
            image: "/images/gedung.png",
            date: "13.01.2022",
            author: "Anna Maria Doe"
        },
        {
            title: "React Hooks Pemula",
            href: "/blog/belajar-nextjs",
            description: "Memahami React Hooks dan cara menggunakannya dengan efektif.",
            image: "/images/gedung.png",
            date: "15.01.2022",
            author: "John Smith"
        },
        {
            title: "TypeScript untuk React",
            href: "/blog/belajar-nextjs",
            description: "Panduan lengkap menggunakan TypeScript dalam proyek React Anda.",
            image: "/images/gedung.png",
            date: "17.01.2022",
            author: "Sarah Johnson"
        },
        {
            title: "CSS Tailwind Tips",
            href: "/blog/belajar-nextjs",
            description: "Tips dan trik menggunakan CSS Tailwind untuk desain yang responsif.",
            image: "/images/gedung.png",
            date: "19.01.2022",
            author: "Mike Davis"
        },
        {
            title: "Web Performance Optimization",
            href: "/blog/belajar-nextjs",
            description: "Optimasi performa website untuk loading yang lebih cepat.",
            image: "/images/gedung.png",
            date: "21.01.2022",
            author: "Lisa Anderson"
        }
    ];

    return (
        <>
            <Heading title="This is Blog" />
            <p>List of blog</p>

            {blogPosts.map((post: BlogPost, index: number) => (
                <PostCard key={index} 
                    title={post.title} 
                    href={post.href}
                    description={post.description}
                    image={post.image}
                    date={post.date}
                    author={post.author}/>
            ))}
            
        </>
    );
}