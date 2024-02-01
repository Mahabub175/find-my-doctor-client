import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { base_url } from "../../../../utils/config";
import toast from "react-hot-toast";

const AddDoctors = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const doctorData = {
      name: data?.doctorName,
      location: data?.doctorLocation,
      specialty: data?.doctorSpecialty,
      image: data?.doctorImage,
      address: data?.doctorAddress,
      details: data?.doctorDescription,
    };
    const res = await axios.post(`${base_url}/doctor`, doctorData);
    if (res.statusText === "OK") {
      toast.success("Doctor has been added successfully!");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="lg:w-[400px] flex flex-col gap-6">
        <Input {...register("doctorName")} label="Doctor Name" color="pink" />
        <Input
          {...register("doctorLocation")}
          label="Doctor Location"
          color="pink"
        />
        <Input
          {...register("doctorSpecialty")}
          label="Doctor Specialty"
          color="pink"
        />
        <Input
          {...register("doctorDescription")}
          label="Doctor Description"
          color="pink"
        />
        <Input {...register("doctorImage")} label="Doctor Image" color="pink" />
        <Input {...register("doctorEmail")} label="Doctor Email" color="pink" />

        <button type="submit" className="bg-pink-500 text-white p-2 rounded-md">
          Submit
        </button>
      </section>
    </form>
  );
};

export default AddDoctors;
