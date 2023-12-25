import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { DoctorCard } from "../../components/AllSection/Doctor/DoctorCard/DoctorCard";

const Doctors = () => {
  const { control, handleSubmit } = useForm();
  const [doctors, setDoctors] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:5000/doctors", {
        params: data,
      });

      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors", error);
    }
  };

  return (
    <div className="py-[300px] container mx-auto ">
      <div className="text-center text-4xl my-10 mb-20 font-bold">
        Search Doctors Based On Location Or Specialty
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center gap-20 lg:w-5/6 mx-auto">
          <Controller
            name="specialty"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input label="Doctor Specialty" color="pink" {...field} />
            )}
          />
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input label="Doctor Location" color="pink" {...field} />
            )}
          />
          <div>
            <Button
              type="submit"
              color="pink"
              className="bg-transparent text-black border border-primary hover:bg-primary hover:text-white duration-300"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
      {/* Display the list of doctors */}
      <div className="mt-20 mx-auto text-start grid grid-cols-2">
        {doctors?.map((doctor) => (
          <DoctorCard key={doctor?._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
