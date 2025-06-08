import { GitHubIcon, XIcon } from "@/components/icon";
import { useMetadata } from "@ronin/blade/server/hooks";
import { Portrait } from "@/pages/components/portrait";
import { Signature } from "@/pages/components/signature";
import { Social } from "@/pages/components/social";

const LINKS = {
	RONIN: "https://ronin.co",
	X: "https://x.com/juriadams",
	GITHUB: "https://github.com/juriadams",
};

const Page = () => {
	useMetadata({
		title: "@juriadams – jrd.ms",
		description: "Juri Adams, CTO, Product & Engineering at RONIN.",
		bodyClassName: "overscroll-none",
	});

	return (
		<div className="w-full max-w-sm sm:max-w-2xl h-full sm:h-auto rounded-4xl border border-neutral-200 dark:border-neutral-800 p-4 shadow-2xl shadow-neutral-300/20 dark:shadow-neutral-900/40">
			<div className="h-full flex flex-col sm:flex-row gap-6 sm:gap-4 justify-between">
				<div className="sm:shrink-0">
					<Portrait />
				</div>

				<div className="flex flex-col items-start justify-between self-end w-full">
					<div className="p-3">
						<Signature href={LINKS.X} />
					</div>

					<span className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />

					<div className="flex flex-row items-center justify-between self-end w-full gap-4 pt-3 pb-1 sm:pb-2.5 pl-1 pr-1 sm:pr-2.5">
						<a
							href={LINKS.GITHUB}
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 focus-visible:text-neutral-900 dark:focus-visible:text-neutral-100 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100 select-none rounded-md transition duration-300 hover:duration-0 focus-visible:duration-0 px-2 py-1.5"
						>
							Projects
						</a>

						<div className="flex flex-row gap-2 items-center">
							<Social
								icon={<XIcon size={20} className="p-[3px]" />}
								href={LINKS.X}
							/>

							<Social icon={<GitHubIcon size={20} />} href={LINKS.GITHUB} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
