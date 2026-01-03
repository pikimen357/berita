import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

interface BlogPost {
    title: string;
    slug: string;
    description: string;
    image: string;
    date: string;
    author: string;
}

export default async function Home() {
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
        <>
            <Heading title="This is Blog" />
            <p>List of blog</p>

            {blogPosts.map((post: BlogPost, index: number) => (
                <PostCard key={index} 
                    title={post.title} 
                    href={`/blog/${post.slug}`}
                    description={post.description}
                    image={post.image}
                    date={post.date}
                    author={post.author}/>
            ))}
            
        </>
    );
}