import { Container, Row } from "react-bootstrap";

function Pswap() {
  return (
    <div className="pswap py-4" style={{ backgroundColor: "#f3f7faFF" }}>
      <h1 className="text-center">
        $PSWAP <span className="txt-red">Utilities</span>
      </h1>
      <Container>
        <Row className="my-5">
          <section className="col-md-4 mb-3">
            <div className="box">
              <img src="assets/u1.png" height={60} alt="" />
              <h6>Governance</h6>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                Vote to modify underlying protocol, change in pricing oracle,
                futures funding rate, platform fees, list/de-list tokens, new
                features
              </p>
            </div>
          </section>
          <section className="col-md-4 mb-3">
            <div className="box">
              <img src="assets/u2.png" height={60} alt="" />
              <h6>Incentives</h6>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                Liquidity providers will be incentivized in $PSWAP for their
                participation in spot and leverage liquidity pools, and LP
                tokens can be staked for ARR of around 125%.
              </p>
            </div>
          </section>
          <section className="col-md-4 mb-3">
            <div className="box">
              <img src="assets/u3.png" height={60} alt="" />
              <h6>Deflation</h6>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                With a fixed supply of 1 million tokens, and only 200,000 in
                circulation, $PSWAP token will increase in value overtime since
                it'll be scarce and the team will buy back and burn tokens from
                platform revenue generated through spot and futures trading.
              </p>
            </div>
          </section>
        </Row>
      </Container>
    </div>
  );
}
export default Pswap;
