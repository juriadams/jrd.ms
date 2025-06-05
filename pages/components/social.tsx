import type { FunctionComponent, ReactNode } from "react";

export const Social: FunctionComponent<{
	icon: ReactNode;
	href: string;
}> = ({ icon, href }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="opacity-70 focus-visible:opacity-100 focus-visible:text-neutral-900 dark:focus-visible:text-neutral-100 hover:opacity-100 transition duration-300 hover:duration-0 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 select-none p-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
	>
		{icon}
	</a>
);
