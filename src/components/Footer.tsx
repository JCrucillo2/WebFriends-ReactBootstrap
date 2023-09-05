import Container from "react-bootstrap/Container";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-dark text-light">
			<Container className="py-4 text-secondary">
				<p>&copy; {currentYear} WebFriends Company</p>
				<div>
					<a href="#" className="text-light">
						Terms and Conditions
					</a>{" "}
					|{" "}
					<a href="#" className="text-light">
						Privacy Policy
					</a>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;
