import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { DoctorCard } from "../DoctorCard/DoctorCard";

export const LocationSearch = () => {
  const [locationInput, setLocationInput] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);

  const fetchLocationData = async (value) => {
    try {
      const response = await axios.get("http://localhost:5000/doctors", {
        params: { location: value },
      });

      setDoctorList(response?.data);

      const locations = Array.from(
        new Set(response?.data?.map((doctor) => doctor.location))
      );
      setUniqueLocations(locations);
    } catch (error) {
      console.error("Error fetching doctors", error);
    }
  };

  const handleLocationChange = (value) => {
    setLocationInput(value);
    fetchLocationData(value);
  };

  const handleDoctorClick = (selectedLocation) => {
    const filteredDoctors = doctorList?.filter(
      (doctor) => doctor?.location === selectedLocation
    );
    setDoctorList(filteredDoctors);
  };

  return (
    <div>
      <Input
        label="Doctor Location"
        name="location"
        color="pink"
        value={locationInput}
        onChange={(e) => handleLocationChange(e.target.value)}
      />
      {uniqueLocations?.length !== 0 && (
        <ul className="mt-4 flex flex-col gap-2 py-2 bg-blue-gray-100 rounded-lg text-center">
          {uniqueLocations?.map((location, i) => (
            <li
              key={i}
              onClick={() => handleDoctorClick(location)}
              className="hover:bg-primary hover:text-white text-bold rounded-lg duration-200 cursor-pointer py-2"
            >
              {location}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-20">
        {doctorList?.length >= 1 && <DoctorCard doctor={doctorList} />}
      </div>
    </div>
  );
};
