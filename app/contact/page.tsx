import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact"
};

export default function Contact() {
    return (
        <>
            <Heading title="Contact" />
            <p className="font-roboto">Please Contact us.</p>
        </>
    );
}