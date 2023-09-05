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
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid iusto adipisci excepturi dolore necessitatibus? Deleniti sed optio earum cum corrupti id, sunt vitae, et quia quas, obcaecati vero ratione.</p>
					</Col>

					<Col sm={6} md={3}>
						<div className="d-flex align-items-center mb-3">
							<div className="text-primary">
								<PiClockCountdown size={30} />
							</div>
							<p className="fw-bold mb-0 ms-2">Lightweight</p>
						</div>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid iusto adipisci excepturi dolore necessitatibus? Deleniti sed optio earum cum corrupti id, sunt vitae, et quia quas, obcaecati vero ratione.</p>
					</Col>

					<Col sm={6} md={3}>
						<div className="d-flex align-items-center mb-3">
							<div className="text-primary">
								<HiSun size={30} />
							</div>
							<p className="fw-bold mb-0 ms-2">Eco Friendly</p>
						</div>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid iusto adipisci excepturi dolore necessitatibus? Deleniti sed optio earum cum corrupti id, sunt vitae, et quia quas, obcaecati vero ratione.</p>
					</Col>

					<Col sm={6} md={3}>
						<div className="d-flex align-items-center mb-3">
							<div className="text-primary">
								<MdOutlineMobileFriendly size={30} />
							</div>
							<p className="fw-bold mb-0 ms-2">Responsive</p>
						</div>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid iusto adipisci excepturi dolore necessitatibus? Deleniti sed optio earum cum corrupti id, sunt vitae, et quia quas, obcaecati vero ratione.</p>
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
