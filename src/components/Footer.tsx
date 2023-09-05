import Container from "react-bootstrap/Container";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-dark text-light">
			<Container className="py-4">
				<p>Copyright &copy; {currentYear}</p>
				<p>For project use only.</p>
			</Container>
		</footer>
	);
};
export default Footer;
