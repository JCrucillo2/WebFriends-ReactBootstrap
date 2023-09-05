import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image1 from "@/assets/person1.webp";
import Image2 from "@/assets/person2.webp";
import Image3 from "@/assets/person3.webp";

const Team = () => {
	return (
		<section className="bg-light" id="team">
			<Container className="py-5">
				<h2 className="text-uppercase text-primary text-center mb-5">
					<u>Team</u>
				</h2>

				<Row>
					<Col md={4} className="mb-3 md-mb-0 text-center">
						<Image src={Image1} alt="john doe" className="rounded-circle img-fluid md-px-4 mb-3" />
						<h3>John Doe</h3>
						<p className="text-secondary fw-bold">Web Developer</p>
						<p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominates extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
						<a href="#" className="text-primary">
							Twitter
						</a>
						<br />
						<a href="#" className="text-primary">
							GitHub
						</a>
					</Col>

					<Col md={4} className="mb-3 md-mb-0 text-center">
						<Image src={Image2} alt="bob smith" className="rounded-circle img-fluid md-px-4 mb-3" />
						<h3>Bob Smith</h3>
						<p className="text-secondary fw-bold">Web Designer</p>
						<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
						<a href="#" className="text-primary">
							Instagram
						</a>
						<br />
						<a href="#" className="text-primary">
							GitHub
						</a>
					</Col>

					<Col md={4} className="mb-3 md-mb-0 text-center">
						<Image src={Image3} alt="jane brown" className="rounded-circle img-fluid md-px-4 mb-3" />
						<h3>Jane Brown</h3>
						<p className="text-secondary fw-bold">Photographer</p>
						<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
						<a href="#" className="text-primary">
							LinkedIn
						</a>
						<br />
						<a href="#" className="text-primary">
							Instagram
						</a>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default Team;
