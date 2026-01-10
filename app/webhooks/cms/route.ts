import { revalidateTag } from "next/cache";
import { CAHCE_TAG_POSTS } from "@/lib/post";

export async function POST(request: Request): Promise<Response> {

    const payload = await request.json();

    console.log("Webhook received:", payload);

    if (payload.model === "post") {
        revalidateTag(CAHCE_TAG_POSTS, "max");
        console.log("Revalidated: ", CAHCE_TAG_POSTS);
    }

    return new Response(null, { status: 204 });
}