/* eslint-disable react/prop-types */

import { Rating } from "@material-tailwind/react";
import { MdLocationOn } from "react-icons/md";

export const DetailsSide = ({ doctor }) => {
  return (
    <div className="bg-white border-2 rounded-md">
      <img src={doctor?.image} alt="" className="w-full lg:h-[450px]" />
      <div className="flex flex-col justify-center items-center p-5 gap-2">
        <p className="text-xl font-bold">{doctor?.name}</p>
        <p className="text-bold">Specialty: {doctor?.specialty}</p>
        <Rating value={5} />
        <div className="flex gap-2">
          <button className="bg-primary px-4 py-1 text-sm text-white">
            854 Views
          </button>
          <button className="bg-primary px-2 py-1 text-sm text-white">
            124 Patients
          </button>
        </div>
      </div>
      <div className="py-4 border-y-2">
        <div className="flex flex-col justify-center items-center p-5 gap-2">
          <p className="text-bold">Location: {doctor?.location}</p>
          <p className="text-bold">Phone: {doctor?.phone}</p>
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <button className="bg-transparent outline outline-primary rounded-full px-6 py-2 text-bold hover:text-white text-primary hover:bg-primary duration-300 flex items-center gap-2">
          <MdLocationOn />
          View On Map
        </button>
      </div>
    </div>
  );
};
