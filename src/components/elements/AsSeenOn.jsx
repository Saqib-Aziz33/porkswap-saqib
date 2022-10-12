import { Container, Row } from "react-bootstrap";

function AsSeenOn() {
  return (
    <div className="as-seen-on my-5" id="features">
      <Container>
        <h3 className="text-center mb-4">As seen on</h3>
        <Row className="align-items-center mb-5">
          <section className="col-sm-3">
            <img src="assets/yahoo.png" alt="" className="img-fluid" />
          </section>
          <section className="col-sm-3">
            <img src="assets/logo-benzinga.webp" alt="" className="img-fluid" />
          </section>
          <section className="col-sm-3">
            <img src="assets/logo-bloomberg.svg" alt="" className="img-fluid" />
          </section>
          <section className="col-sm-3">
            <img src="assets/news-btc.png" alt="" className="img-fluid" />
          </section>
        </Row>
        <hr />
      </Container>

      <Container>
        <Row className="text-center my-5 shadow-cols pt-5">
          <section className="col-md-4 py-4">
            <img src="assets/f1.svg" height={80} alt="" />
            <h5 className="text-center mt-3">Deflationary</h5>
            <p className="text-muted px-2" style={{ fontSize: "0.9rem" }}>
              While other spot platform tokens mint 750,000 tokens per day,
              we're aiming to burn 10% everyday through the revenue generated
              from the platform. Increasing the value of token over 30X within a
              year.
            </p>
          </section>
          <section className="col-md-4 py-4">
            <img src="assets/f2.svg" height={80} alt="" />
            <h5 className="text-center mt-3">Community Governance</h5>
            <p className="text-muted px-2" style={{ fontSize: "0.9rem" }}>
              We believe in democratizing access to finance, what else can be a
              better way to give entire power to the community. Create custom
              polls, vote for good ones, bring new ideas to the table, change
              the world for better.
            </p>
          </section>
          <section className="col-md-4 py-4">
            <img src="assets/f3.svg" height={80} alt="" />
            <h5 className="text-center mt-3">Future Trading</h5>
            <p className="text-muted px-2" style={{ fontSize: "0.9rem" }}>
              Bringing forward the true meaning of De-Fi that's decentralizing
              current financial products, bringing derivatives through futures
              trading so you can increase your returns on profit. Buy long or
              sell short, it's on you.
            </p>
          </section>
          <section className="col-md-4 py-4">
            <img src="assets/f4.svg" height={80} alt="" />
            <h5 className="text-center mt-3">Spot Trading</h5>
            <p className="text-muted px-2" style={{ fontSize: "0.9rem" }}>
              Improved automated market maker to provide instant fulfillment of
              orders with less slippage, exchange your favourite tokens with 10
              times less gas than Ethereum.
            </p>
          </section>
          <section className="col-md-4 py-4">
            <img src="assets/f5.svg" height={80} alt="" />
            <h5 className="text-center mt-3">Lottery</h5>
            <p className="text-muted px-2" style={{ fontSize: "0.9rem" }}>
              Try your luck by gambling the extra tokens that you made by
              providing liquidity, with a chance to 100X your investment.
            </p>
          </section>
          <section className="col-md-4 py-4">
            <img src="assets/f6.svg" height={80} alt="" />
            <h5 className="text-center mt-3">Security</h5>
            <p className="text-muted px-2" style={{ fontSize: "0.9rem" }}>
              While other projects are getting DNS hijacked, we ensure the
              security of our platform from DNS all the way to Smart Contract
              are state-of-the-art secured.
            </p>
          </section>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center my-5 py-5">
          <section className="col-sm-3">
            <img src="assets/cb-logo.png" alt="" className="img-fluid" />
          </section>
          <section className="col-sm-3">
            <img src="assets/hb-logo.png" alt="" className="img-fluid" />
          </section>
          <section className="col-sm-3">
            <img src="assets/cg-logo.webp" alt="" className="img-fluid" />
          </section>
          <section className="col-sm-3">
            <img src="assets/cmc-logo.png" alt="" className="img-fluid" />
          </section>
        </Row>
      </Container>
    </div>
  );
}
export default AsSeenOn;
