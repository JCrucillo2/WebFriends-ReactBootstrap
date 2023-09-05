import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Image1 from "@/assets/friends-drinking-coffee.webp";
import Button from "react-bootstrap/Button";

const AboutUs = () => {
	return (
		<section id="aboutUs">
			<Container className="py-5">
				<div className="text-center mb-5">
					<h2 className="text-uppercase font-weight-regular text-primary mb-5">
						<u>About Us</u>
					</h2>
					<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
				</div>

				<Row>
					<Col md={6}>
						<Image src={Image1} alt="friends drinking coffee" className="img-fluid mb-4 mb-md-0" />
					</Col>
					<Col md={6}>
						<h3>How We Got Started</h3>
						<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
						<p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
						<Button variant="secondary" href="#team">
							Meet The Team
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default AboutUs;
