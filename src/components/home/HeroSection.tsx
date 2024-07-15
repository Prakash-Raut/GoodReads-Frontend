import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="relative isolate px-6 pt-14 lg:px-8">
			<div className="mx-auto max-w-2xl py-14 sm:py-24">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						Join a community of millions of book lovers.{" "}
						<a
							href="#"
							className="font-semibold text-indigo-600"
						>
							<span
								className="absolute inset-0"
								aria-hidden="true"
							/>
							Read more <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Discover and Share Your Love for Books
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Despite the enormous quantity of books, how few people
						read! And if one reads profitably, one would realize how
						much stupid stuff the vulgar herd is content to swallow
						every day. - Voltaire
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/dashboard"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Join Now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
