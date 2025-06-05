import { GitHubIcon, XIcon } from "@/components/icon";
import { useMetadata } from "@ronin/blade/server/hooks";
import { Portrait } from "@/pages/components/portrait";
import { Signature } from "@/pages/components/signature";
import { Social } from "@/pages/components/social";
import { Title } from "@/pages/components/title";

const LINKS = {
	RONIN: "https://ronin.co",
	X: "https://x.com/juriadams",
	GITHUB: "https://github.com/juriadams",
};

const Page = () => {
	useMetadata({
		title: "@juriadams – jrd.ms",
		description: "Juri Adams, CTO, Product & Engineering at RONIN.",
	});

	return (
		<div className="w-full max-w-sm sm:max-w-2xl rounded-4xl border border-neutral-200 dark:border-neutral-800 p-4 shadow-2xl shadow-neutral-300/20 dark:shadow-neutral-900/40">
			<div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
				<div className="shrink-0">
					<Portrait />
				</div>

				<div className="flex flex-col self-end w-full">
					<div className="py-2">
						<Signature href={LINKS.X} />
					</div>

					<span className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />

					<div className="flex flex-row gap-4 items-center justify-between pr-3 py-2">
						<Title href={LINKS.RONIN} />

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
