import { Container } from "react-bootstrap";

function HowItWorks() {
  return (
    <div className="how-it-works py-5">
      <Container>
        <h1 className="text-center mb-5">
          How it <span style={{ color: "#dc3545FF" }}>Works</span>
        </h1>
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/-V5QjGogoig"
          title="PorkSwap is Decentralised spot and futures trading platform - Explainer Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </div>
  );
}
export default HowItWorks;
