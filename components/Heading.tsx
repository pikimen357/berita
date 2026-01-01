import { roboto } from '@/app/font';

export default function Heading({ title }: { title: string }) {
    return (
        <h1 className={`text-xl font-bold text-gray-900 mb-6 ${roboto.className} `}>
            {title}
        </h1>
    );
}