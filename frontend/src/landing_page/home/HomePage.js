import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./pricing";
import Stats from "./Stats";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
