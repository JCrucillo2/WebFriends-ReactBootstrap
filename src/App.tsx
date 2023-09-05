import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "@/components/Appbar";
import FrontCarousel from "@/components/FrontCarousel";
import AboutUs from "@/components/AboutUs";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const App = () => {
	return (
		<>
			<Appbar />
			<main>
				<FrontCarousel />
				<AboutUs />
				<Team />
				<Services />
				<Pricing />
				<Contact />
			</main>
			<Footer />
		</>
	);
};
export default App;
