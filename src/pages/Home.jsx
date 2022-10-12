// componenets
import Hero from "../components/elements/Hero";
import AsSeenOn from "../components/elements/AsSeenOn";
import HowItWorks from "../components/elements/HowItWorks";
import PlatformInterface from "../components/elements/PlatformInterface";
import Pswap from "../components/elements/Pswap";
import ComparisonTable from "../components/elements/ComparisonTable";
import ProductRoadmap from "../components/elements/ProductRoadmap";
import Faqs from "../components/elements/Faqs";

function Home() {
  return (
    <>
      <Hero />
      <AsSeenOn />
      <HowItWorks />
      <PlatformInterface />
      <Pswap />
      <ComparisonTable />
      <ProductRoadmap />
      <Faqs />
    </>
  );
}
export default Home;
