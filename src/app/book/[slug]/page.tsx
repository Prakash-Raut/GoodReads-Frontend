import { Button, Divider, Link } from "@nextui-org/react";
import Image from "next/image";
import bookImg from "../../../../public/book.jpg";

export default function Page({ params }: { params: { slug: string } }) {
	return (
		<main className="flex min-h-screen w-full items-start justify-start px-24 py-10">
			<aside className="flex flex-col w-1/3 justify-start items-center min-h-screen p-16">
				<Image
					src={bookImg}
					height={200}
					width={200}
					alt="book-image"
				/>
				<Button
					color="secondary"
					variant="ghost"
					size="lg"
				>
					Read
				</Button>
			</aside>
			<div className="w-2/3">
				<h1 className="text-4xl font-medium">
					The Psychology of Money
				</h1>
				<section className="flex flex-col justify-between items-start gap-5 py-5">
					<Link
						href="#"
						underline="hover"
						size="lg"
					>
						Morgal Housel
					</Link>
					<div className="flex">
						<div>Rating</div>
						<div>Reviews</div>
					</div>
					<article>
						Doing well with money isn't necessarily about what you
						know. It's about how you behave. And behavior is hard to
						teach, even to really smart people. Money--investing,
						personal finance, and business decisions--is typically
						taught as a math-based field, where data and formulas
						tell us exactly what to do. But in the real world people
						don't make financial decisions on a spreadsheet. They
						make them at the dinner table, or in a meeting room,
						where personal history, your own unique view of the
						world, ego, pride, marketing, and odd incentives are
						scrambled together. In The Psychology of Money,
						award-winning author Morgan Housel shares 19 short
						stories exploring the strange ways people think about
						money and teaches you how to make better sense of one of
						life's most important topics.
					</article>
					<ul>
						<li></li>
					</ul>
					<div>
						<p className="text-sm">252 pages, Paperback</p>
						<p className="text-sm">
							First published January 1, 2020
						</p>
					</div>
				</section>
				<Divider />
			</div>
		</main>
	);
}
