// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// css and assets
import "./CenterSlider.css";
import { sliderData } from "../../../../assets/data/sliderData";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";

export const CenterSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative px-5 md:px-0 container mx-auto py-10 mt-10">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold mb-3">MOST VIEWED DOCTORS</p>
        <p>
          Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat
          cu pri.
        </p>
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        centeredSlides={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {sliderData?.map((data, i) => (
          <SwiperSlide
            key={data?.id}
            className={`relative flex items-center justify-center h-[500px] mx-auto ${
              i !== activeIndex ? "opacity-60" : ""
            }`}
          >
            <img
              className="object-cover center-img"
              src={data?.imgurl}
              alt="slider"
            />

            {i === activeIndex && (
              <div>
                <p className="absolute top-6 right-6 bg-[#3f4079] text-white px-3 rounded-md flex items-center gap-2">
                  <span>
                    <IoMdEye />
                  </span>
                  <span> {data?.views}</span>
                </p>
                <p className="absolute bottom-0 px-6 py-3 text-white left-[35%] flex flex-col text-center bg-[#3f4079] rounded-t-md">
                  <span className="text-bold">{data?.title}</span>
                  <span>{data?.subTitle}</span>
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
