import {
  cityCategories,
  typeCategories,
} from "../../../../assets/data/categories";
import { Categories } from "../../../Reusable/Categories/Categories";

export const DoctorCategories = () => {
  return (
    <section className="bg-[#f5f8fa] py-20">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="text-center mb-10">
          <p className="text-4xl font-bold mb-3">FIND YOUR DOCTOR OR CLINIC</p>
          <p className="lg:w-3/6 mx-auto">
            Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur.
            Nonumy ponderum oporteat cu mel, pro movet cetero at.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          <Categories sectionData={cityCategories} />
          <Categories sectionData={typeCategories} />
        </div>
      </div>
    </section>
  );
};
