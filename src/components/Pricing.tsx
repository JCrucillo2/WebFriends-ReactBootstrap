import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Pricing = () => {
	return (
		<section className="bg-light" id="pricing">
			<Container className="py-5">
				<h2 className="text-uppercase text-primary text-center mb-5">
					<u>Pricing</u>
				</h2>

				<p className="text-center mb-4">Here in WebFriends, we provide plans that are affordable and packed full of features. Don't be fooled by our low prices as we provide the best of our abilities to fulfill your needs in any plans available.</p>

				<Row>
					<Col md={4} className="mb-4 md-mb-0">
						<Card className="text-center shadow-sm">
							<Card.Header className="py-3">
								<h3>Starter Plan</h3>
							</Card.Header>
							<Card.Body>
								<Card.Title>$7/mo</Card.Title>
								<p>Basic customer support for small business. Best for those who are just starting out.</p>
								<ul className="list-unstyled my-4">
									<li>10 Projects</li>
									<li>20 Pages</li>
									<li>20 Emails</li>
									<li>100 Images</li>
								</ul>
								<Button variant="outline-primary">Get Started</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4} className="mb-4 md-mb-0">
						<Card className="text-center shadow-sm border-primary">
							<Card.Header className="text-bg-primary py-3">
								<h3>Regular Plan</h3>
							</Card.Header>
							<Card.Body>
								<Card.Title>$19/mo</Card.Title>
								<p>24/7 priority support with more flexible options for your regular business.</p>
								<ul className="list-unstyled my-4">
									<li>14 Projects</li>
									<li>40 Pages</li>
									<li>40 Emails</li>
									<li>200 Images</li>
								</ul>
								<Button variant="outline-primary">Get Started</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4} className="mb-4 md-mb-0">
						<Card className="text-center shadow-sm">
							<Card.Header className="py-3">
								<h3>Plus Plan</h3>
							</Card.Header>
							<Card.Body>
								<Card.Title>$79/mo</Card.Title>
								<p>Contains everything that other plans feature plus more options that you can use for large scale projects.</p>
								<ul className="list-unstyled my-4">
									<li>Unlimited Projects</li>
									<li>100 Pages</li>
									<li>100 Emails</li>
									<li>700 Images</li>
								</ul>
								<Button variant="primary" href="#contact">
									Contact Us
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default Pricing;
