import { Typography } from "@material-tailwind/react";
import FooterLinks from "./FooterLinks";
import { footerData } from "../../../assets/data/footerData";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full mt-20">
      <div className="w-full px-8">
        <div className="bg-[#fafafa]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between container mx-auto py-10">
            <div className="">
              <img
                src="https://www.ansonika.com/findoctor/menu_2/img/logo.png"
                className="w-[156px] h-auto"
                alt=""
              />
              <div className="flex flex-col gap-4 mt-10 text-sm"></div>
            </div>

            <FooterLinks sectionData={footerData?.about} />
            <FooterLinks sectionData={footerData?.useful} />
            <div className="">
              <p className="text-xl text-bold mb-6 text-black/70">
                Contact With Us
              </p>
              <p className="mb-4 hover:text-primary duration-200">
                <span>+ 61 23 8093 3400</span>
              </p>

              <p className="mb-4 hover:text-primary duration-200">
                <span>help@findoctor.com</span>
              </p>
              <div>
                <p className="text-base text-black/70 text-bold mb-6">
                  Follow Us
                </p>
                <div className="flex gap-8 items-center mt-6">
                  <FaFacebookF className="hover:text-primary duration-200" />
                  <FaTwitter className="hover:text-primary duration-200" />
                  <FaInstagram className="hover:text-primary duration-200" />
                  <FaTiktok className="hover:text-primary duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between container mx-auto">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-black/70 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="#" className="hover:text-primary duration-200 text-bold">
              Find My Doctor
            </a>{" "}
            All Right reserved!
          </Typography>
          <div className="flex gap-4 text-black/70 text-sm sm:justify-center">
            <p className="hover:text-primary duration-200">
              Terms and conditions
            </p>
            <span>|</span>
            <p className="hover:text-primary duration-200">Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
