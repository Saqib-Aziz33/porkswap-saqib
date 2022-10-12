import { Container, Row } from "react-bootstrap";

function ProductRoadmap() {
  return (
    <div className="product-roadmap my-5 py-5">
      <h1 className="text-center pb-5">
        Product <span className="txt-red">Roadmap</span>
      </h1>
      <Container>
        <img src="assets/porkswap-timeline.png" className="img-fluid" alt="" />
        <hr />
      </Container>

      <Container>
        <Row className="my-5 align-items-center py-5">
          <section className="col-md-8 mb-3">
            <img src="assets/gov.png" className="img-fluid" alt="" />
          </section>
          <section className="col-md-4 mb-3">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Governance Platform</h2>
              <button
                className="btn fw-bold text-center shadow"
                style={{ backgroundColor: "#ffc107FF" }}
              >
                Launched, start voting now
              </button>
            </div>
            <p className="mb-0">
              <b>You'll be able to vote for:</b>
            </p>
            <ul className="opacity-75">
              <li>Change in underlying protocol</li>
              <li>Change in pricing oracle</li>
              <li>Change in futures funding rate</li>
              <li>Change in platform fees</li>
              <li>Change inlist/de-list tokens</li>
            </ul>
          </section>
        </Row>
      </Container>
    </div>
  );
}
export default ProductRoadmap;
