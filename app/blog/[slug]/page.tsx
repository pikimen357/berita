import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";

export default async function Home(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;

    const post = await getPost(slug);

    return (
        <>
            <Heading title={post.title} />
            <p className="italic text-sm pb-2">{post.date} - {post.author}</p>
            <p className="italic text-sm pb-2">Rate: {post.rate}</p>
            <img src={post.image}      className="rounded-lg shadow-md mb-5"
                width={600} height={400} />
            <article 
                dangerouslySetInnerHTML={{ __html: post.html }} 
                className="prose font-roboto max-w-none" 
                ></article>
        </>
    );
}