/* eslint-disable react/prop-types */
export const DoctorCard = ({ doctor }) => {
  return (
    <div
      key={doctor._id}
      className="flex items-center justify-center gap-10 mb-10 w-5/6 mx-auto bg-gray-200 p-4 rounded-md"
    >
      <img src={doctor.image} alt="" className="rounded-md" />
      <div className="flex flex-col gap-2">
        <p>
          <span className="text-bold">Name:</span> {doctor.name}
        </p>{" "}
        <p>
          {" "}
          <span className="text-bold">Specialty:</span> {doctor.specialty}
        </p>{" "}
        <p>
          <span className="text-bold">Location:</span> {doctor.location}
        </p>
      </div>
    </div>
  );
};
