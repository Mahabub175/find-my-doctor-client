import { homeBannerData } from "../../assets/data/bannerData";
import { homeServiceCard } from "../../assets/data/serviceCard";
import { Banner } from "../../components/AllSection/Home/Banner/Banner";
import { DoctorCategories } from "../../components/AllSection/Home/DoctorCategories/DoctorCategories";
import { CenterSlider } from "../../components/AllSection/Home/DoctorGallery/CenterSlider";
import { GetApp } from "../../components/AllSection/Home/GetApp/GetApp";
import { ServiceCard } from "../../components/AllSection/Home/ServiceCard/ServiceCard";

const Home = () => {
  return (
    <>
      <Banner sectionData={homeBannerData} />
      <ServiceCard sectionData={homeServiceCard} />
      <CenterSlider />
      <DoctorCategories />
      <GetApp />
    </>
  );
};

export default Home;
