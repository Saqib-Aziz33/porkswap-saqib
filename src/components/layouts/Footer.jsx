import { Container } from "react-bootstrap";
import {
  AiOutlineMedium,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer pt-5 px-4">
      <Container className="d-block d-md-flex justify-content-between align-items-center">
        <section style={{ width: "250px" }}>
          <img src="assets/logo.png" alt="" className="img-fluid" />
          <p className="mt-3">
            Decentralized Spot and Futures Trading on Binance Smart Chain
          </p>
        </section>
        <section>
          <div className="icons d-flex align-items-center gap-2 mt-4 mt-md-0">
            <a href="#link">
              <AiOutlineMedium size={30} />
            </a>
            <a href="#link">
              <FaFacebookF size={30} />
            </a>
            <a href="#link">
              <AiOutlineTwitter size={30} />
            </a>
            <a href="#link">
              <AiFillYoutube size={30} />
            </a>
            <a href="#link">
              <FaTelegram size={30} />
            </a>
          </div>
          <a
            href="mailto:exchange@porkswap.finance"
            className="text-white mt-4 d-block text-decoration-none"
          >
            exchange@porkswap.finance
          </a>
        </section>
      </Container>
      <Container>
        <hr />
        <p className="text-center">Copyright © 2022 PorkSwap.finance</p>
      </Container>
    </footer>
  );
}
export default Footer;
