import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";
import { Metadata } from "next";
import Link from "next/link";
import { parse } from "node:path";

export const revalidate = 30; // Revalidate every 30 seconds

export const metadata: Metadata = {
    title: "Blog",
    description: "Belajar Next.js Fundamental dari dasar hingga mahir",
};

interface BlogPost {
    title: string;
    slug: string;
    description: string;
    image: string;
    date: string;
    author: string;
}

export default async function Home({ searchParams }) {
    
    const params = await searchParams;

    const page = parsePageParam(params.page);
    console.log(`Page: ${page}`);

    const allPosts = await getAllPosts();
    
    const blogPosts: BlogPost[] = allPosts.map(post => ({
        title: post.title,
        slug: post.slug,
        description: post.description,
        image: post.image,
        date: post.date,
        author: post.author
    }));

    return (
        <div className="px-4 py-8 sm:px-6 lg:px-8">
            <Heading title="This is Blog" />
            <h2 className="text-gray-600 text-lg font-medium">List of blog</h2>
            <br />
            <div className="flex gap-3">
                <Link href={`/blog?page=${page > 1 ? page - 1 : 1}`}>&lt;</Link>
                <span>Page {page}</span>
                <Link href={`/blog?page=${page + 1}`}>&gt;</Link>
            </div>
            <div className="mt-8 space-y-4">
                {blogPosts.map((post: BlogPost, index: number) => (
                    <PostCard
                        key={index}
                        title={post.title}
                        href={`/blog/${post.slug}`}
                        description={post.description}
                        image={post.image}
                        date={post.date}
                        author={post.author}
                    />
                ))}
            </div>
        </div>
    );
}

function parsePageParam(paramalue): number {
    
    if(paramalue){
        const pageNumber = parseInt(paramalue);
        if(isFinite(pageNumber) && pageNumber > 0){
            return pageNumber;
        }
    }

    return 1;
}