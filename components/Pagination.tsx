import Link from "next/link";
import { ChevronLeftIcon,  ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationProps { 
    href: string;
    page: number;
    pageCount: number;
}

export default function Pagination({ href, page, pageCount }: PaginationProps): JSX.Element { 
    return (
        <div className="flex gap-3">

                {/* Previous Button < */}
                <PaginationLink 
                    href={`${href}?page=${page > 1 ? page - 1 : 1}`} 
                    enabled={page > 1}
                >
                    <ChevronLeftIcon className="h-4 w-4" />
                </PaginationLink>

                <span>Page {page} of {pageCount}</span>

                {/* Next Button > */}
                <PaginationLink 
                href={`${href}?page=${page < pageCount ? page + 1 : page}`}
                enabled={page < pageCount}
                >
                    <ChevronRightIcon className="h-4 w-4" />
                </PaginationLink>
        </div>
    );
}

function PaginationLink({children, href, enabled}: {children: React.ReactNode, href: string, enabled: boolean}): JSX.Element{

    if (!enabled) { 
        return(
            <span className="px-3 py-1 border border-gray-300 rounded-md text-gray-400 cursor-not-allowed">
                {children}
            </span>
        );
    }

    return(
        <Link
            href={href}
            className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200 transition"
            >
            {children}
        </Link>
    );
}