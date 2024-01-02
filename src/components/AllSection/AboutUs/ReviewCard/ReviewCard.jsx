import { Rating } from "@material-tailwind/react";

export const ReviewCard = ({ sectionData }) => {
  return (
    <section className="container mx-auto mt-20 px-5 lg:px-0">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold mb-3">{sectionData?.title}</p>
        <p>{sectionData?.description}</p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-10">
        {sectionData?.reviews?.map((item, i) => (
          <div
            key={i}
            className="mx-auto outline outline-1 outline-gray-400 px-10 py-6"
          >
            <div className="flex gap-2">
              {" "}
              <Rating value={item?.rating} readonly />
              <p className="text-bold">{item?.title}</p>
            </div>
            <p className="text-sm my-6">&quot;{item?.description}&quot;</p>
            <div className="flex gap-4 items-center">
              <div>
                <img
                  src={item?.image}
                  alt=""
                  className="rounded-full w-[50px] h-[50px]"
                />
              </div>
              <div className="text-sm">
                <p className="text-bold mb-1">{item?.name}</p>
                <p className="">{item?.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
