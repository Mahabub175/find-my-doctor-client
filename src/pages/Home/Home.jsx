import { homeBannerData } from "../../assets/data/bannerData";
import { homeServiceCard } from "../../assets/data/serviceCard";
import { Banner } from "../../components/AllSection/Home/Banner/Banner";
import { DoctorCategories } from "../../components/AllSection/Home/DoctorCategories/DoctorCategories";
import { CenterSlider } from "../../components/Reusable/DoctorGallery/CenterSlider";
import { GetApp } from "../../components/AllSection/Home/GetApp/GetApp";
import { ServiceCard } from "../../components/AllSection/Home/ServiceCard/ServiceCard";
import { homeSliderData } from "../../assets/data/sliderData";

const Home = () => {
  return (
    <>
      <Banner sectionData={homeBannerData} />
      <ServiceCard sectionData={homeServiceCard} />
      <CenterSlider sectionData={homeSliderData} />
      <DoctorCategories />
      <GetApp />
    </>
  );
};

export default Home;
