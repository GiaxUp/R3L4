import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = () => (
  <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand>Spaceflight</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopNavbar;
