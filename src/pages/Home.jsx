// componenets
import Hero from "../components/elements/Hero";
import AsSeenOn from "../components/elements/AsSeenOn";
import HowItWorks from "../components/elements/HowItWorks";
import PlatformInterface from "../components/elements/PlatformInterface";
import Pswap from "../components/elements/Pswap";
import ComparisonTable from "../components/elements/ComparisonTable";
import ProductRoadmap from "../components/elements/ProductRoadmap";
import Faqs from "../components/elements/Faqs";
import TokenDist from "../components/elements/TokenDist";

function Home() {
  return (
    <>
      <Hero />
      <div className="other-than-particles">
        <AsSeenOn />
        <HowItWorks />
        <TokenDist />
        <PlatformInterface />
        <Pswap />
        <ComparisonTable />
        <ProductRoadmap />
        <Faqs />
      </div>
    </>
  );
}
export default Home;
