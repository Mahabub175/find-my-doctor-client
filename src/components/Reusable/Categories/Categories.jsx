import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
/* eslint-disable react/prop-types */
export const Categories = ({ sectionData }) => {
  return (
    <div>
      <div className="bg-[#3f4079] flex flex-col-reverse justify-center items-center w-[350px] lg:w-[440px] py-6">
        <h2 className="text-[#74d1ce] text-xl text-bold mt-4 uppercase">
          {sectionData?.name}
        </h2>
        {sectionData?.icon && (
          <div className="text-white">
            {React.createElement(sectionData?.icon, {
              className: "text-5xl",
            })}
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {sectionData?.data?.map((item) => (
          <div
            key={item?.id}
            className="flex justify-between px-2 bg-white py-2 group hover:bg-primary hover:scale-105 duration-500 rounded-md cursor-pointer"
          >
            <div className="flex gap-4">
              <p className="bg-[#f5f8fa] px-2 text-bold text-gray-500">
                {item?.id}
              </p>
              <p className="text-bold text-gray-700 group-hover:text-white duration-300">
                {item?.category}
              </p>
            </div>
            <div className="text-primary group-hover:text-white duration-300">
              <FaLongArrowAltRight />
            </div>
          </div>
        ))}
        <div className="flex justify-between px-2 bg-white py-2 text-bold text-gray-700 rounded-md group hover:bg-primary hover:scale-105 duration-500 cursor-pointer">
          <p className="px-2 group-hover:text-white duration-300"> More...</p>
          <div className="text-primary group-hover:text-white duration-300">
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};
