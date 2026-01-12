import { marked } from "marked";
import {  readdir } from "node:fs/promises";
import qs  from "qs";

const baseUrl: string = process.env.BASE_URL;
const apiUrl:  string = baseUrl + 'api';

export const CAHCE_TAG_POSTS = 'posts';

interface FetchPostsParams {
    fields?: string[];
    filters?: Record<string, any>;
    populate?: Record<string, any>;
    sort?: string[];
    pagination?: {
        pageSize: number;
        page?: number;
        withCount?: boolean;
    };
}

interface StrapiFetchImage {
    id: number;
    documentId: string;
    url: string;
    formats?: {
        thumbnail?: {
            url: string;
        };
    };
}

interface StrapiPost {
    id: number;
    documentId: string;
    slug: string;
    title: string;
    description: string;
    author: string;
    publishedAt: string;
    body?: string;
    rate?: string;
    image?: StrapiFetchImage;
}

interface StrapiFetchResponse {
    data: StrapiPost[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            total?: number;
            pageCount?: number;
        };
    };
}

interface Post {
    slug: string;
    title: string;
    image: string;
    description: string;
    date: string;
    author: string;
    body?: string;
    rate?: string;
}

interface PostsResponse {
    posts: Post[];
    pageCount: number;
}

export async function getPost(slug: string): Promise<Post> {

    const { data } = await fetchPosts({
        filters : { slug: { $eq: slug } },
        fields : ['slug','title', 'description', 'publishedAt','author', 'body', 'rate'],
        populate: { image : {fields: 'url'} },
        pagination: { pageSize: 1, withCount: false }
    });

    if (data.length === 0) {
        return null;
    }
    
    const dataItem: StrapiPost = data[0];

    return await toPost(dataItem, true);
}

export async function getAllPosts(pageSize: number, page: number): Promise<PostsResponse> {

    const { data, meta } = await fetchPosts({
        fields : ['slug','title', 'description', 'publishedAt','author'],
        populate: { image : {fields: 'url'} },
        sort: ['updatedAt:desc'],
        pagination: { pageSize, page }
    });

    const posts = await Promise.all(data.map(item => toPost(item, false)));

    return {
        pageCount: meta.pagination.pageCount,
        posts
    };
}


async function fetchPosts(parameters: FetchPostsParams): Promise<StrapiFetchResponse> {
    const  url: string  =  `${apiUrl}/posts` + '?' + 
    qs.stringify(parameters, { encodeValuesOnly: true });

    console.log(url);

    const response: Response = await fetch(url, {
        next: { tags: [CAHCE_TAG_POSTS] }
    });

    if (!response.ok) {
        throw new Error(`Gagal mengambil data dari Strapi: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
}


async function toPost(item: StrapiPost, isFullPost: boolean = false): Promise<Post> {
    const imagePath: string = item.image?.formats?.thumbnail?.url 
                                    || item.image?.url 
                                    || '';

    // Pastikan path dimulai dengan /
    const cleanPath: string = imagePath.startsWith('/') ? imagePath : '/' + imagePath;

    const dateString = item.publishedAt ? item.publishedAt.slice(0, "yyyy-MM-DD".length) : '';
    const htmlBody = isFullPost && item.body ? await marked(item.body) : '';

    return {
        slug: item.slug,
        title: item.title,
        image: baseUrl?.replace(/\/$/, '') + cleanPath,
        author: item.author,
        description: item.description,
        date: dateString,
        ...(isFullPost && { body: htmlBody, rate: item.rate })
    };
}

export async function getSlugs(): Promise<string[]> {
    const { data } = await fetchPosts({
        fields : ['slug'],
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 1000, withCount: true }
    });

    return data.map((item: StrapiPost) => item.slug);
}