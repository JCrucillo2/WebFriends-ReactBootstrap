import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "@/components/Appbar";
import FrontCarousel from "@/components/FrontCarousel";
import AboutUs from "@/components/AboutUs";
import Team from "@/components/Team";

const App = () => {
	return (
		<>
			<header>
				<Appbar />
			</header>
			<main>
				<FrontCarousel />
				<AboutUs />
				<Team />
			</main>
		</>
	);
};
export default App;
