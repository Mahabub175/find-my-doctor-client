import { homeBannerData } from "../../assets/data/bannerData";
import { homeServiceCard } from "../../assets/data/serviceCard";
import { Banner } from "../../components/AllSection/Home/Banner/Banner";
import { ServiceCard } from "../../components/AllSection/Home/ServiceCard/ServiceCard";

const Home = () => {
  return (
    <>
      <Banner sectionData={homeBannerData} />
      <ServiceCard sectionData={homeServiceCard} />
    </>
  );
};

export default Home;
