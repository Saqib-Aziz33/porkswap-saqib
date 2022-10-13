import { Container, Row } from "react-bootstrap";
import Par from "./Par";

function Hero() {
  return (
    <div className="hero pt-5">
      <Container>
        <Row className="pt-5">
          <div className="col-md-6 pt-5 mt-5">
            <h1 className="fw-bold">
              Decentralized Spot and Futures Trading on BSC
            </h1>
            <p>
              Automated market maker powered, taking De-Fi game to the next
              level. Make instant spot exchange, leveraged trades, provide
              liquidity to earn returns and rewards.
            </p>
            <button
              className="btn fw-bold text-center w-100"
              style={{ backgroundColor: "#ffc107FF" }}
            >
              Spot Trading Platform Launched 🚀
            </button>
            <hr className="my-3" style={{ borderColor: "#ffc107FF" }} />
            <div
              className="btns"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                columnGap: "0.5rem",
              }}
            >
              <button
                className="btn"
                style={{ backgroundColor: "#dc3545FF", color: "#fff" }}
              >
                Earn PSWAP
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "#dc3545FF", color: "#fff" }}
              >
                Trade on PCS
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "#dc3545FF", color: "#fff" }}
              >
                Governance
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src="assets/porkswap-pink.png" className="img-fluid" alt="" />
          </div>
        </Row>
      </Container>
      <Par />
    </div>
  );
}
export default Hero;
