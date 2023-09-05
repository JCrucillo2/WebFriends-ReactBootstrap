import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Appbar = () => {
	return (
		<section>
			<Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
				<Container>
					<Navbar.Brand href="#home">WebFriends</Navbar.Brand>
					<Navbar.Toggle aria-controls="nav-options" />

					<Navbar.Collapse id="nav-options">
						<Nav className="ms-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#aboutUs">About</Nav.Link>
							<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</section>
	);
};
export default Appbar;
