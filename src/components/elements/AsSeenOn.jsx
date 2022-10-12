import { Container, Row } from "react-bootstrap";

function AsSeenOn() {
  return (
    <div className="as-seen-on my-5">
      <Container>
        <h3 className="text-center mb-4">As seen on</h3>
        <Row className="align-items-center">
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
        <Row>
          <section className="col-md-4 mb-3"></section>
          <section className="col-md-4 mb-3"></section>
          <section className="col-md-4 mb-3"></section>
          <section className="col-md-4 mb-3"></section>
          <section className="col-md-4 mb-3"></section>
          <section className="col-md-4 mb-3"></section>
        </Row>
      </Container>
    </div>
  );
}
export default AsSeenOn;
