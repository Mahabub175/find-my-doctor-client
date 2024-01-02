import React from "react";

export const WhyUs = ({ sectionData }) => {
  return (
    <section className="bg-grey mt-20 py-20 -mb-20">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="text-center mb-10">
          <p className="text-4xl font-bold mb-3">{sectionData?.title}</p>
          <p>{sectionData?.description}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center justify-center items-center mt-10 lg:mt-20 gap-10">
          {sectionData?.data?.map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 relative shadow-lg rounded-md hover:-translate-y-2 duration-500"
            >
              {item?.icon && (
                <div className="">
                  {React.createElement(item?.icon, {
                    className: "text-violet w-16 h-auto mb-4 mx-auto",
                  })}
                </div>
              )}

              <p className="text-primary mt-6 text-xl text-bold mb-2">
                {item?.title}
              </p>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
