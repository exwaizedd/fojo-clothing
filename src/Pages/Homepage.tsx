// import Banner from "../Features/Banner/Banner";

import Contact from "../ui/Contact/Contact";
import Services from "../ui/Services/Services";
import AboutUs from "../ui/aboutUs/AboutUs";
import Outfits from "../ui/outfits/Outfits";

const Homepage = () => {
  // return <Banner />;
  return (
    <>
      <Outfits />
      <Services />
      <AboutUs />
      <Contact />
    </>
  );
};

export default Homepage;
