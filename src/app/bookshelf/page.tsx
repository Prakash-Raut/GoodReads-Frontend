import BookTable from "@/components/shelf/BookTable";

export default function page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<BookTable />
		</main>
	);
}
