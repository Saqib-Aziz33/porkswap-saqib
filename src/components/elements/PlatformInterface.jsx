import { Container } from "react-bootstrap";

function PlatformInterface() {
  return (
    <div className="platfrom-interface">
      <Container className="text-center">
        <h1 className="mb-3">
          Platform <span className="txt-red">Interface</span>
        </h1>
        <h4 className="fw-normal">
          De-Fi doesn't need to be boring, bringing UX focused interface
        </h4>
        <img
          style={{ maxWidth: "600px", width: "100%" }}
          src="assets/porkswap-product.png"
          className="d-block mx-auto my-5"
          alt=""
        />
      </Container>
    </div>
  );
}
export default PlatformInterface;
