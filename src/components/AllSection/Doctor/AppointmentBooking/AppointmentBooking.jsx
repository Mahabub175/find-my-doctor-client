import { useState } from "react";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { base_url } from "../../../../utils/config";
import toast from "react-hot-toast";
import { Checkbox, Radio } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const AppointmentBooking = ({ doctor }) => {
  const { user } = useAuth();
  const [date, setDate] = useState(null);
  const [selectedVisits, setSelectedVisits] = useState([]);
  const [selectedTime, setSelectedTime] = useState({});
  const navigate = useNavigate();

  const handleVisitRadioChange = (label, value) => {
    const isAlreadySelected = selectedVisits.some(
      (visit) => visit.label === label
    );

    if (isAlreadySelected) {
      setSelectedVisits((prevVisits) =>
        prevVisits.filter((visit) => visit.label !== label)
      );
    } else {
      setSelectedVisits((prevVisits) => [...prevVisits, { label, value }]);
    }
  };

  const handleBookNow = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await axios.post(`${base_url}/appointments`, {
          doctor,
          selectedDate: date,
          selectedVisits,
          selectedTime,
          email: user?.email,
          status: "booked",
          isCancelled: false,
        });
        toast.success("Your booking has been added successfully!");
        navigate("/payments");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      toast.error("Please log in first!");
    }
    e.target.reset();
  };

  return (
    <section className="mb-[500px]">
      <div className="bg-primary py-3 rounded-md text-center font-bold text-xl text-white">
        Select your appointment date
      </div>
      <form onSubmit={handleBookNow}>
        <div className="w-4/6 mx-auto mt-10">
          <DtPicker
            onChange={setDate}
            disabledDates
            clearBtn
            yearListStyle
            isRequired={true}
          />
        </div>
        <div className="bg-primary my-20 py-3 rounded-md text-center font-bold text-xl text-white">
          Select your appointment time
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10">
          {doctor?.timeSlots?.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-2 text-black bg-white mb-2 mx-auto px-4 rounded-md`}
            >
              <Radio
                name="type"
                label={item?.time}
                color="pink"
                required
                onChange={() => setSelectedTime({ item })}
              />
              <p className="">{item?.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary py-3 rounded-md text-center font-bold text-xl text-white my-20">
          Select your visit
        </div>

        <div className="grid lg:grid-cols-2 gap-x-10">
          {doctor?.prices?.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between text-black`}
            >
              <Checkbox
                name="type"
                label={item?.name}
                color="pink"
                onChange={() => handleVisitRadioChange(item?.name, item?.value)}
              />
              <p className="font-bold">$ {item?.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <button
            className="bg-transparent outline outline-primary rounded-full px-6 py-2 text-bold hover:text-white text-primary hover:bg-primary duration-300"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentBooking;
