/* eslint-disable react/prop-types */

import React from "react";

export const ServiceCard = ({ sectionData }) => {
  return (
    <section className="bg-[#f5f8fa] py-20 -mt-10">
      <div className="container mx-auto px-5 lg:px-0 text-center">
        <div>
          <p className="text-2xl lg:text-4xl mb-4 text-bold">
            {sectionData?.name}
          </p>
          <p className="lg:w-3/6 mx-auto">{sectionData?.description}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 gap-10">
          {sectionData?.data?.map((item, i) => (
            <div key={i} className="bg-white p-10 relative shadow-xl">
              <img src={item?.image} alt="" className="mx-auto" />
              <p className="text-primary mt-6 text-xl text-bold mb-2">
                {item?.name}
              </p>
              <p>{item?.description}</p>
              <div className="hidden lg:block">
                {item?.icon1 && i !== sectionData?.data?.length - 1 && (
                  <div className="">
                    {React.createElement(item?.icon1, {
                      className:
                        "text-primary w-10 h-auto mb-4 absolute top-[45%] -right-10 bg-white rounded-full z-10",
                    })}
                  </div>
                )}
              </div>
              <div className="lg:hidden">
                {item?.icon2 && i !== sectionData?.data?.length - 1 && (
                  <div className="">
                    {React.createElement(item?.icon2, {
                      className:
                        "text-primary w-10 h-auto mb-4 absolute left-[45%] -bottom-[17%] bg-white rounded-full",
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <button className="bg-primary text-bold text-white px-10 py-3 rounded-full hover:bg-[#0dcaf0] duration-300">
            Find Doctor
          </button>
        </div>
      </div>
    </section>
  );
};
