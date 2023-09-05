import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
	return (
		<section id="contact">
			<Container className="py-5 d-flex justify-content-center">
				<Form className="w-75">
					<h2 className="text-center text-uppercase text-primary mb-5">
						<u>Contact Us</u>
					</h2>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control as="textarea" rows={3} placeholder="Enter message" />
					</Form.Group>

					<div className="d-flex justify-content-end">
						<Button variant="primary">Submit</Button>
					</div>
				</Form>
			</Container>
		</section>
	);
};
export default Contact;
