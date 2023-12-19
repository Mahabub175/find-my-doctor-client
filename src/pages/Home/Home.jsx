import { homeBannerData } from "../../assets/data/bannerData";
import { homeServiceCard } from "../../assets/data/serviceCard";
import { Banner } from "../../components/AllSection/Home/Banner/Banner";
import { CenterSlider } from "../../components/AllSection/Home/DoctorGallery/CenterSlider";
import { ServiceCard } from "../../components/AllSection/Home/ServiceCard/ServiceCard";

const Home = () => {
  return (
    <>
      <Banner sectionData={homeBannerData} />
      <ServiceCard sectionData={homeServiceCard} />
      <CenterSlider />
    </>
  );
};

export default Home;
