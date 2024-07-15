export default function NewsletterSection() {
	return (
		<div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Subscribe to our newsletter.
						</h2>
						<p className="mt-4 text-lg text-center leading-8">
							Stay up to date with the latest news, events, and
							updates from our community.
						</p>
						<div className="mt-6 flex max-w-md gap-x-4">
							<label
								htmlFor="email-address"
								className="sr-only"
							>
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
								placeholder="Enter your email"
							/>
							<button
								type="submit"
								className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
