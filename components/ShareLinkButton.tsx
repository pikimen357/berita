'use client';

import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function ShareLinkButton(): React.JSX.Element {

    const [copied, setCopied] = useState(false);

    function copyLinkToClipboard(): void {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    }

    console.log("Shared Link Button" + copied);

    return (
        <button onClick={copyLinkToClipboard}
                className="border px-2 py-1 rounded text-black hover:bg-black hover:text-white active:underline flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />        
            {copied ? "Link Copied!" : "Share Link"}
        </button>
    );
}