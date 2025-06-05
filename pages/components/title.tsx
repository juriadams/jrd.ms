import type { FunctionComponent } from "react";

export const Title: FunctionComponent<{ href: string }> = ({ href }) => (
	<a
		className="flex flex-col opacity-70 focus-visible:opacity-100 hover:opacity-100 transition duration-300 hover:duration-0 select-none px-2 py-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
		href={href}
		target="_blank"
		rel="noopener noreferrer"
	>
		<span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
			RONIN
		</span>
		<span className="text-xs text-neutral-500 dark:text-neutral-400">
			CTO, Product & Engineering
		</span>
	</a>
);
