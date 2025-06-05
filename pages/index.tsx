import { GitHubIcon, XIcon } from "@/components/icon";

const LINKS = {
	RONIN: "https://ronin.co",
	X: "https://x.com/juriadams",
	GITHUB: "https://github.com/juriadams",
};

const Page = () => (
	<div className="w-full max-w-sm sm:max-w-2xl rounded-4xl border border-neutral-200 dark:border-neutral-800 p-4 shadow-2xl shadow-neutral-300/20 dark:shadow-neutral-900/40">
		<div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
			<div className="shrink-0">
				<div className="rounded-t-2xl rounded-b-lg sm:rounded-l-2xl sm:rounded-r-lg overflow-hidden sm:max-h-none max-h-96 shadow-xl shadow-neutral-300/30 dark:shadow-neutral-900/40">
					<img
						src="/portrait.jpg"
						alt="Portrait"
						className="sm:h-84 sm:mt-0 -mt-8 w-full sm:w-auto select-none pointer-events-none sm:scale-110"
					/>
				</div>
			</div>

			<div className="flex flex-col self-end w-full">
				<div className="px-1 py-2">
					<a
						className="inline-flex flex-row opacity-80 focus-visible:opacity-100 hover:opacity-100 transition duration-300 hover:duration-0 select-none px-1 py-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
						href={LINKS.X}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/signature.png"
							alt="Signature"
							className="h-14 select-none pointer-events-none invert dark:invert-0"
						/>
					</a>
				</div>

				<span className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />

				<div className="flex flex-row gap-4 items-center justify-between pl-1 pr-3 py-2">
					<a
						className="flex flex-col opacity-70 focus-visible:opacity-100 hover:opacity-100 transition duration-300 hover:duration-0 select-none px-1 py-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
						href={LINKS.RONIN}
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

					<div className="flex flex-row gap-2 items-center">
						<a
							href={LINKS.X}
							target="_blank"
							rel="noopener noreferrer"
							className="opacity-70 focus-visible:opacity-100 focus-visible:text-neutral-900 dark:focus-visible:text-neutral-100 hover:opacity-100 transition duration-300 hover:duration-0 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 select-none p-[7px] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
						>
							<XIcon size={14} />
						</a>

						<a
							href={LINKS.GITHUB}
							target="_blank"
							rel="noopener noreferrer"
							className="opacity-70 focus-visible:opacity-100 focus-visible:text-neutral-900 dark:focus-visible:text-neutral-100 hover:opacity-100 transition duration-300 hover:duration-0 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 select-none p-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
						>
							<GitHubIcon size={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Page;
