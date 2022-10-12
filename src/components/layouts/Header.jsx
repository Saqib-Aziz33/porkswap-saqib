import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Header() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    function changeNav(e) {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`header py-4 px-2 ${scroll > 600 && "active"}`}
    >
      <Container>
        <Navbar.Brand>
          <img src="assets/logo.png" height={30} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="features">
              Features
            </Link>
            <Link className="nav-link" to="/">
              Litepaper
            </Link>
            <Link className="nav-link" to="platform">
              Platform
            </Link>
            <Link className="nav-link" to="roadmap">
              Roadmap
            </Link>
            <Link className="nav-link" to="faqs">
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
