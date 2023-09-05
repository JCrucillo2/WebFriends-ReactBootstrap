import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Image1 from "@/assets/mountains.webp";
import Image2 from "@/assets/space.webp";
import Image3 from "@/assets/water-bg.webp";

const FrontCarousel = () => {
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<Image src={Image1} alt="mountains" className="d-block w-100" />
					<Carousel.Caption>
						<h3>The best choice for for your startup</h3>
						<p>Design and style should work towards making you look good and feel good</p>
						<Button variant="light">Choose Package</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image src={Image2} alt="space" className="w-100" />
					<Carousel.Caption>
						<h3>Sky is the limit for WebFriends</h3>
						<p>Our team consists of people that have will be able to accomodate your needs. We guarantee that you will end up with an awesome website!</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image src={Image3} alt="water" className="w-100" />
					<Carousel.Caption>
						<h3>Created to make business easy</h3>
						<Button variant="light">Contact Us</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};
export default FrontCarousel;
