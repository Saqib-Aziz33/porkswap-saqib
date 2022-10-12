import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <Navbar expand="lg" className="header py-4 px-2">
      <Container>
        <Navbar.Brand>
          <img src="assets/logo.png" height={30} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Features
            </Link>
            <Link className="nav-link" to="/">
              Litepaper
            </Link>
            <Link className="nav-link" to="/">
              Platform
            </Link>
            <Link className="nav-link" to="/">
              Roadmap
            </Link>
            <Link className="nav-link" to="/">
              FAQs
            </Link>
            <Link className="nav-link" to="/">
              Audit Report
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
