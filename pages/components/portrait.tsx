export const Portrait = () => (
	<div className="relative min-h-32 rounded-t-2xl rounded-b-md sm:rounded-l-2xl sm:rounded-r-md overflow-hidden sm:max-h-none max-h-96 shadow-xl shadow-neutral-300/30 dark:shadow-neutral-900/40 transition">
		<img
			src="/portrait.jpg"
			alt="Portrait"
			className="sm:h-84 sm:mt-0 -mt-8 w-full sm:w-auto select-none pointer-events-none sm:scale-110"
		/>

		<div className="absolute inset-x-0 bottom-0 h-[75%]">
			<div className="w-full h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
		</div>

		<div className="absolute inset-x-0 bottom-0 px-4 pt-2 pb-4 flex flex-col gap-0.5">
			<div className="flex flex-row items-baseline justify-start gap-2">
				<h1 className="text-neutral-100 font-medium text-xl">Juri</h1>
				<h2 className="text-neutral-100 text-lg select-none">24</h2>
			</div>

			<div className="flex flex-row items-baseline justify-start gap-2">
				<a
					className="text-neutral-100 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 select-none rounded-md transition duration-300 hover:duration-0 focus-visible:duration-0 px-1 py-px -mx-1 -my-px"
					href="https://ronin.co"
					target="_blank"
					rel="noopener noreferrer"
				>
					RONIN
				</a>

				<span className="text-neutral-100/70 text-xs select-none">
					CTO, Engineering
				</span>
			</div>
		</div>
	</div>
);
