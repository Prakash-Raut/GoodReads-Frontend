import Banner from "@/components/home/Banner";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { UIProvider } from "@/providers/UIProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Good Reads",
	description: "A simple book review app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<UIProvider>
					<Banner />
					<Header />
					{children}
					<Footer />
				</UIProvider>
			</body>
		</html>
	);
}
