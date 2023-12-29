import { LocationSearch } from "../../components/AllSection/Doctor/LocationSearch/LocationSearch";
import { SpecialtySearch } from "../../components/AllSection/Doctor/SpecialtySearch/SpecialtySearch";

const Doctors = () => {
  return (
    <div className="py-[300px] container mx-auto px-5 lg:px-0">
      <div className="text-center text-4xl my-10 mb-20 font-bold">
        Search Doctors Based On Location Or Specialty
      </div>
      <form>
        <div className="lg:flex items-start justify-center gap-20 lg:w-5/6 mx-auto">
          <SpecialtySearch />
          <LocationSearch />
        </div>
      </form>
    </div>
  );
};

export default Doctors;
