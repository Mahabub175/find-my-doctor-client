/* eslint-disable react/prop-types */
export const GeneralInfo = ({ doctor }) => {
  return (
    <div className="bg-white px-10 py-2 rounded-md border-2">
      <div className="mt-10 lg:w-4/6 flex flex-col gap-2 text-black">
        <p className="text-xl font-bold">{doctor?.name}</p>
        <p>
          <span className="text-bold">Specialty:</span> {doctor?.specialty}
        </p>
        <p>
          <span className="text-bold">Degree:</span> {doctor?.degree}
        </p>
      </div>
      <div className="mt-10">
        {doctor?.details?.map((item, i) => (
          <div key={i} className="leading-loose mb-6">
            {item?.text}
          </div>
        ))}
      </div>
    </div>
  );
};
