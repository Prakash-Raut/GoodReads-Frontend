import BookCard from "@/components/BookCard";
import { Button } from "@nextui-org/react";

const bookList = [
	{
		id: "123-The-Midnight-Library",
		title: "The Midnight Library",
		cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585832694l/52129515.jpg",
	},
	{
		id: "456-The-Silent-Patient",
		title: "The Silent Patient",
		cover: "https://visme.co/blog/wp-content/uploads/2021/06/sophie-kinsella-the-undomestic-goddess-book-cover-example.jpeg",
	},
	{
		id: "789-The-Vanishing-Half",
		title: "The Vanishing Half",
		cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547189796l/37570546.jpg",
	},
	{
		id: "101-The-Seven-Husbands-of-Evelyn-Hugo",
		title: "Atomic Habits",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
	},
	{
		id: "101-The-Seven-Husbands-of-Evelyn-Hugo",
		title: "Atomic Habits",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465761302i/28257707.jpg",
	},
	{
		id: "101-The-Seven-Husbands-of-Evelyn-Hugo",
		title: "Atomic Habits",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg",
	},
	{
		id: "101-The-Seven-Husbands-of-Evelyn-Hugo",
		title: "Atomic Habits",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442726934i/4865.jpg",
	},
];

export default function page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex justify-center items-center gap-5 flex-wrap max-w-[1024px]">
				{bookList.map((book) => {
					return (
						<BookCard
							key={book.id}
							id={book.id}
							title={book.title}
							cover={book.cover}
						/>
					);
				})}
			</div>
			<div className="mt-5">
				<Button
					isLoading
					color="secondary"
					spinner={
						<svg
							className="animate-spin h-5 w-5 text-current"
							fill="none"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							/>
							<path
								className="opacity-75"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								fill="currentColor"
							/>
						</svg>
					}
				>
					Load More Books
				</Button>
			</div>
		</main>
	);
}
