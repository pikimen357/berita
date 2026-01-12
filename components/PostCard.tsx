import Link from "next/link";
import Image from "next/image";

export default function PostCard({title, href, description,image, date, author}): JSX.Element {
    return (
        <div className="flex flex-wrap gap-x-5 md:flex-nowrap">
            <div className="mb-4 w-full md:mb-0 md:w-2/12">
                <div className="relative mb-6 overflow-hidden p-3 rounded">
                    <Image src={image} alt={title} className="rounded-lg" width={640} height={360} />
                    <Link href={href}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden
                            bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,0%,0.2)]">

                        </div>
                    </Link>
                </div>
            </div>
            
            <div className="mb-6 w-full md:w-10/12 md:px-3">
                <Link href={href} className="no-underline">
                    <h2 className="text-lg font-bold text-slate-900 cursor-pointer hover:underline hover:text-blue-600">
                        {title}
                    </h2>
                </Link>
                <p className="mb-3 text-sm text-slate-600 italic">
                    Published <span className="font-semibold">{date}</span> by <span className="italic">{author}</span>
                </p>
                <p className="text-slate-800 text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}