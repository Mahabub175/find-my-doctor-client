import { Rating } from "@material-tailwind/react";
import { doctorReviewData } from "../../../../assets/data/doctorReviewData";

export const DoctorReview = () => {
  const data = doctorReviewData;
  return (
    <div className="bg-white px-10 py-6 rounded-md border-2 mt-10">
      <div>
        {data?.map((item, i) => (
          <div key={i} className="lg:flex gap-6 mb-10">
            <img
              src={item?.image}
              alt=""
              className="w-[80px] h-[80px] rounded-md mb-4 lg:mb-0"
            />
            <div className="outline outline-1 px-8 py-2 rounded-md outline-black/20">
              <Rating value={item?.rating} readonly />
              <div className="flex gap-2">
                <p>{item?.name}</p>-<p>{item?.date}</p>
              </div>
              <p>{item?.review}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="mt-10 flex justify-end">
        <button className="bg-transparent outline outline-primary rounded-full px-6 py-2 text-bold hover:text-white text-primary hover:bg-primary duration-300">
          Submit Review
        </button>
      </div>
    </div>
  );
};
