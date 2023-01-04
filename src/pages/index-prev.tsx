import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { Aboutus, Allindustry, FAQ, FullFinancial, Income, Logos, OurClientSay, Eligibility } from "views/Main";
const Home: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is home page" />
      <Income />
      <Logos />
      <FullFinancial />
      <Allindustry />
      <Aboutus />
      <OurClientSay />
      <FAQ />
    </>
  );
};

export default Home;
