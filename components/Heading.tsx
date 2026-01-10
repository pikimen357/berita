export default function Heading({ title }: { title: string }) {
    return (
        <h1 className="text-xl font-bold text-gray-900 mb-4">
            {title}
        </h1>
    );
}