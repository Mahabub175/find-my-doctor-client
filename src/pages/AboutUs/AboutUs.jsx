import { aboutUsBannerData } from "../../assets/data/bannerData";
import { aboutReviewData } from "../../assets/data/reviewData";
import { aboutSliderData } from "../../assets/data/sliderData";
import { aboutWhyUsData } from "../../assets/data/whyUsData";
import { AboutUsBanner } from "../../components/AllSection/AboutUs/AboutBanner/AboutUsBanner";
import { ReviewCard } from "../../components/AllSection/AboutUs/ReviewCard/ReviewCard";
import { WhyUs } from "../../components/AllSection/AboutUs/WhyUs/WhyUs";
import { CenterSlider } from "../../components/Reusable/DoctorGallery/CenterSlider";

const AboutUs = () => {
  return (
    <div className="pt-32">
      <AboutUsBanner sectionData={aboutUsBannerData} />
      <CenterSlider sectionData={aboutSliderData} bgColor={"bg-[#f5f8fa]"} />
      <ReviewCard sectionData={aboutReviewData} />
      <WhyUs sectionData={aboutWhyUsData} />
    </div>
  );
};

export default AboutUs;
