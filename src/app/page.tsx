import CTASection from "@/components/home/CTASection";
import FeatureSectionOne from "@/components/home/FeatureSectionOne";
import FeatureSectionTwo from "@/components/home/FeatureSectionTwo";
import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";
import NewsletterSection from "@/components/home/NewsletterSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between mx-auto">
			<HeroSection />
			<StatsSection />
			<LogoCloud />
			<FeatureSectionOne />
			<FeatureSectionTwo />
			<CTASection />
			<Testimonials />
			<NewsletterSection />
		</main>
	);
}
