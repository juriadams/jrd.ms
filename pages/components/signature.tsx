import type { FunctionComponent } from "react";

export const Signature: FunctionComponent<{ href: string }> = ({ href }) => (
	<a
		className="inline-flex flex-row opacity-80 focus-visible:opacity-100 hover:opacity-100 transition duration-300 hover:duration-0 select-none px-2 py-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
		href={href}
		target="_blank"
		rel="noopener noreferrer"
	>
		<img
			src="/signature.png"
			alt="Signature"
			className="h-14 select-none pointer-events-none invert dark:invert-0"
		/>
	</a>
);
