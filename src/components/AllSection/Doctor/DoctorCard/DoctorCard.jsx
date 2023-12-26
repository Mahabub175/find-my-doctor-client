import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const DoctorCard = ({ doctor }) => {
  return (
    <div>
      {doctor?.map((item) => (
        <div
          key={item?._id}
          className="flex items-center justify-center gap-5 mb-10 mx-auto bg-gray-200 p-4 rounded-md"
        >
          {" "}
          <img src={item?.image} alt="" className="rounded-md" />
          <div className="flex flex-col gap-2">
            <p>
              <span className="text-bold">Name:</span> {item?.name}
            </p>{" "}
            <p>
              {" "}
              <span className="text-bold">Specialty:</span> {item?.specialty}
            </p>{" "}
            <p>
              <span className="text-bold">Location:</span> {item?.location}
            </p>
            <div className="flex justify-between mt-10 gap-2">
              <Link to={`/doctorDetails/${item?._id}`}>
                <button className="bg-transparent text-black border border-primary hover:bg-primary hover:text-white duration-300 px-5 text-sm py-2 text-bold rounded-lg">
                  View Profile
                </button>
              </Link>
              <button className="bg-transparent text-black border border-primary hover:bg-primary hover:text-white duration-300 px-5 text-sm py-2 text-bold rounded-lg">
                Get Appointment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
