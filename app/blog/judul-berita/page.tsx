import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Heading title="Berita Banjir Sumatra" />
            <Image src="/images/banjir.png" className="rounded-lg shadow-md mb-5" alt="Banjir Sumatra" width={600} height={400}  />
            <p className="text-justify px-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit atque dolores dolor enim ipsum rem? Rem alias, cum dolorum corrupti nihil, aut ea error architecto mollitia omnis autem quidem?
            Facere possimus ut dolorum doloribus, eligendi cupiditate non a autem! A, voluptatibus quaerat nam vitae, recusandae minima accusantium molestias placeat tempore, dolore nisi commodi ratione. Accusantium quos animi ducimus nobis!
            Aut, unde illo. Odio provident, in animi nulla culpa tempora reiciendis vitae ipsam debitis ratione earum eum dolorum amet distinctio ad eaque ipsum molestias eligendi laudantium voluptatem optio qui? Quo!</p>
        </>
    );
}