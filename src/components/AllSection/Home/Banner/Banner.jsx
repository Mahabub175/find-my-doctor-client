/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Banner = ({ sectionData }) => {
  const swiperRef = useRef();
  return (
    <section className="relative">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        {sectionData?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img
                src={item?.image}
                alt=""
                className="w-screen h-auto lg:h-[900px]"
              />
              <h2 className="absolute top-[50%] left-[15%] lg:left-[20%] text-2xl text-[#3f4177] lg:text-6xl w-1/2 lg:w-3/12 font-extrabold">
                {item?.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-between gap-5 mt-10">
        <button
          className="z-50 w-12 shadow-xl h-12 flex items-center justify-center rounded-full bg-white text-primary hover:bg-primary hover:text-white duration-300 absolute top-1/2 left-0"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <FaAngleLeft className="text-xl" />
        </button>
        <button
          className="z-50 w-12 shadow-xl h-12 flex items-center justify-center rounded-full bg-white text-primary hover:bg-primary hover:text-white duration-300 absolute top-1/2 right-0"
          onClick={() => swiperRef.current.slideNext()}
        >
          <FaAngleRight className="text-xl" />
        </button>
      </div>
    </section>
  );
};
