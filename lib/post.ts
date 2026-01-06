import { marked } from "marked";
import matter from "gray-matter";
import { readFile, readdir } from "node:fs/promises";
import qs  from "qs";
import { writeFileSync } from "fs";

export async function getPost(slug: string):Promise<{ slug: string; title: string; image: string; description: string; date: string; author: string; html: string; rate: string }> {

    const text = await readFile(`./content/blog/${slug}.md`, "utf-8");

    const { content, data: { title, image, description, date, author, rate } }  = matter(text);
    const html = await marked(content);

    return { slug, title, image, description, date, author,  html, rate };
    
}

// export async function getAllPosts():Promise<Array<{ slug: string; title: string; description: string; image: string; date: string; author: string }>> {

//     const files = await readdir(`./content/blog`);

//     // cari file dengan ekstensi .md dan hapus ekstensi .md untuk mendapatkan slug
//     const slugs = files.filter(file => file.endsWith('.md')).map(file => file.replace('.md', ''));

//     // baca setiap file markdown dan ekstrak metadatanya 
//     const posts = await Promise.all(
//         slugs.map(async (slug) => {
//             const text = await readFile(`./content/blog/${slug}.md`, "utf-8");
//             const { data: { title, description, image, date, author } } = matter(text);
//             return { slug, title, description, image, date, author };
//         })
//     );

//     return posts;
// }

export async function getAllPosts(){

    // ambil url dari environment variable
    const baseUrl = process.env.BASE_URL;

    const  url: string  =  `${baseUrl}/posts` + '?' + qs.stringify({
        fields : ['slug','title', 'description', 'publishedAt','author', 'body'],
        populate: { image : {fields: 'url'} },
        sort: ['publishedAt:desc'],
        // pagination: { pageSize: 1 }
    },
    { 
        encodeValuesOnly: true 
    });

    const response: Response = await fetch(url);
    const { data } = await response.json();

    const posts = data.map((item: any) => ({
        slug: item.slug,
        title: item.title,
        author: item.author,
        description: item.description,
        image: item.image,
        date: item.publishedAt,
    }));

    return posts;
}

// fungsi untuk mendapatkan semua slug dari postingan
export async function getSlugs() {

    const files = await readdir(`./content/blog`);

    return files.filter(file => file.endsWith('.md'))
                .map(file => file.replace('.md', ''));
}

