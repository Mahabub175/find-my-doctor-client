import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { DoctorCard } from "../DoctorCard/DoctorCard";
import { base_url } from "../../../../utils/config";

export const SpecialtySearch = () => {
  const [specialInput, setSpecialInput] = useState("");
  const [doctorList, setDoctorList] = useState([]);
  const [uniqueSpecialties, setUniqueSpecialties] = useState([]);

  const fetchSpecialData = async (value) => {
    try {
      const response = await axios.get(`${base_url}/doctors`, {
        params: { specialty: value },
      });

      setDoctorList(response?.data);

      const specialties = Array.from(
        new Set(response.data.map((doctor) => doctor.specialty))
      );
      setUniqueSpecialties(specialties);
    } catch (error) {
      console.error("Error fetching doctors", error);
    }
  };

  const handleSpecialChange = (value) => {
    setSpecialInput(value);
    fetchSpecialData(value);
  };

  const handleDoctorClick = (selectedSpecialty) => {
    const filteredDoctors = doctorList.filter(
      (doctor) => doctor.specialty === selectedSpecialty
    );
    setDoctorList(filteredDoctors);
  };

  return (
    <div>
      <Input
        label="Doctor Specialty"
        name="specialty"
        color="pink"
        value={specialInput || ""}
        onChange={(e) => handleSpecialChange(e.target.value)}
      />
      {uniqueSpecialties?.length !== 0 && (
        <ul className="mt-4 flex flex-col gap-2 py-2 bg-blue-gray-100 rounded-lg text-center">
          {uniqueSpecialties?.map((specialty, i) => (
            <li
              key={i}
              onClick={() => handleDoctorClick(specialty)}
              className="hover:bg-primary hover:text-white text-bold rounded-lg duration-200 cursor-pointer py-2"
            >
              {specialty}
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
