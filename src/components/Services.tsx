import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { BsEye } from "react-icons/bs";
import { PiClockCountdown } from "react-icons/pi";
import { HiSun } from "react-icons/hi2";
import { MdOutlineMobileFriendly } from "react-icons/md";

const Services = () => {
	return (
		<section id="services">
			<Container className="py-5">
				<h3 className="text-center text-uppercase text-primary mb-5">
					<u>Our Services</u>
				</h3>

				<Row className="mb-5">
					<Col sm={6} md={3}>
						<div className="d-flex align-items-center mb-3">
							<div className="text-primary">
								<BsEye size={30} />
							</div>
							<p className="fw-bold mb-0 ms-2">Retina Ready</p>
						</div>
						<p>We ensure that every single one of our photos and sites are also optimized for retina devices. We always go above and beyond in providing high quality products while maintaining a high-speed performance.</p>
					</Col>

					<Col sm={6} md={3}>
						<div className="d-flex align-items-center mb-3">
							<div className="text-primary">
								<PiClockCountdown size={30} />
							</div>
							<p className="fw-bold mb-0 ms-2">Lightweight</p>
						</div>
						<p>All of the sites we create are checked multiple times to ensure that they are production-ready. We also provide search engine optimization on all of our plans and we can also set up Google Analytics for a small fee should you need it.</p>
					</Col>

					<Col sm={6} md={3}>
						<div className="d-flex align-items-center mb-3">
							<div className="text-primary">
								<HiSun size={30} />
							</div>
							<p className="fw-bold mb-0 ms-2">Eco Friendly</p>
						</div>
						<p>As an eco-friendly company, we always make sure that everything we do is energy-efficient. This ranges from optimizing images to reduce file size to improving site navigation to make it easy to find information.</p>
					</Col>

					<Col sm={6} md={3}>
						<div className="d-flex align-items-center mb-3">
							<div className="text-primary">
								<MdOutlineMobileFriendly size={30} />
							</div>
							<p className="fw-bold mb-0 ms-2">Responsive</p>
						</div>
						<p>When we create a website, we make sure that every devices are supported for the ease of use of our users. Doesn't matter if you are young, old or have disability, we always provide ways to make the site comfortable for everyone to use.</p>
					</Col>
				</Row>

				<div className="text-center">
					<Button variant="secondary">Learn More</Button>
				</div>
			</Container>
		</section>
	);
};
export default Services;
