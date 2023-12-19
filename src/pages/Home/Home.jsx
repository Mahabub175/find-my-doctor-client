import { homeBannerData } from "../../assets/data/bannerData";
import { Banner } from "../../components/AllSection/Home/Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner sectionData={homeBannerData} />
    </>
  );
};

export default Home;
