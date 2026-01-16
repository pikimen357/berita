import { JSX } from "react";

export default function ListAside( { content }: { content: string }): JSX.Element {
    return (
        <li>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition duration-200 block text-sm hover:underline hover:pl-1">
                {content}
            </a>
        </li>
    )
}