import { Container } from "react-bootstrap";
import {
  AiOutlineMedium,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer pt-5">
      <Container className="d-block d-md-flex justify-content-between align-items-center">
        <section style={{ width: "250px" }}>
          <img src="assets/logo.png" alt="" className="img-fluid" />
          <p className="mt-3">
            Decentralized Spot and Futures Trading on Binance Smart Chain
          </p>
        </section>
        <section>
          <div className="icons d-flex align-items-center gap-2 mt-4 mt-md-0">
            <AiOutlineMedium size={30} />
            <FaFacebookF size={30} />
            <AiOutlineTwitter size={30} />
            <AiFillYoutube size={30} />
            <FaTelegram size={30} />
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
