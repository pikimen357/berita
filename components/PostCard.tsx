import Link from "next/link";

export default function PostCard({title, href, description,image, date, author}) {
    return (
        <div className="flex flex-wrap gap-x-5 md:flex-nowrap">
            <div className="mb-4 w-full md:mb-0 md:w-2/12">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img src={image} className="w-full h-full rounded-lg" />
                    <Link href={href}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden
                            bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,0%,0.2)]">

                        </div>
                    </Link>
                </div>
            </div>
            
            <div className="mb-6 w-full md:w-10/12 md:px-3">
                <Link href={href} className="no-underline">
                    <h2 className="text-lg font-bold text-gray-900 cursor-pointer hover:underline hover:text-blue-600">
                        {title}
                    </h2>
                </Link>
                <p className="mb-3 text-sm text-gray-600 italic">
                    Published <span className="font-semibold">{date}</span> by <span className="italic">{author}</span>
                </p>
                <p className="text-gray-700 text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}