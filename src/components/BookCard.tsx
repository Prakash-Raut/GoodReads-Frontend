import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function BookCard({
	id,
	title,
	cover,
}: {
	id: string;
	title: string;
	cover: string;
}) {
	return (
		<Card
			isFooterBlurred
			radius="lg"
			className="border-none"
		>
			<Image
				alt="Woman listing to music"
				className="object-cover"
				src={cover}
				width={200}
				height={200}
			/>
			<CardFooter
				className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1
			absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
			>
				<Link href={`/book/${id}`}>
					<Button
						className="text-tiny text-white bg-black/20"
						variant="flat"
						color="default"
						radius="lg"
						size="sm"
					>
						Explore
					</Button>
				</Link>
				<Button
					className="text-tiny text-white bg-black/20"
					variant="flat"
					color="default"
					radius="lg"
					size="sm"
				>
					Add to Shelf
				</Button>
			</CardFooter>
		</Card>
	);
}
