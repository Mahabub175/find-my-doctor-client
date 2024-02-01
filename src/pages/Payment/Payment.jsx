import React from "react";
import useBooking from "../../hooks/useBooking";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { base_url } from "../../utils/config";
import { useForm } from "react-hook-form";

const Payment = () => {
  const { register, handleSubmit, reset } = useForm();
  const bookings = useBooking();
  const { user } = useAuth();

  let totalValue = 0;

  const bookedBooking = bookings[0]
    .filter((booking) => booking.status === "booked")
    .forEach((item) => {
      const bookingTotalValue = item?.selectedVisits
        ?.map((visit) => visit?.value)
        .reduce((acc, value) => acc + (value || 0), 0);
      totalValue += bookingTotalValue || 0;
    });
  const bookedBookings = bookings[0].filter(
    (booking) => booking.status === "booked"
  );

  const handlePayment = async (data) => {
    const paymentData = {
      price: totalValue,
      email: user?.email,
      id: data?.id,
    };
    const res = await axios.post(`${base_url}/payment`, paymentData);
    window.location.replace(res?.data?.url);
  };

  return (
    <section className="bg-grey py-20 flex items-center justify-center -mb-20">
      <div className="mt-32 bg-white outline outline-1 rounded-md outline-grey">
        <p className="bg-primary text-white text-2xl font-bold px-32 py-4 rounded-md">
          Your Booking
        </p>

        {bookedBookings?.length > 0 ? (
          bookedBookings.map((item) => (
            <form
              onSubmit={handleSubmit(handlePayment)}
              key={item?._id}
              className="p-10 text-xl flex flex-col gap-2"
            >
              <input value={item?._id} {...register("id")} className="hidden" />
              <p>
                Doctor Name:{" "}
                <span className="text-bold">{item?.doctor?.name}</span>
              </p>
              <p>
                Date:{" "}
                <span className="text-bold">
                  {item?.selectedDate?.day}/{item?.selectedDate?.month}/
                  {item?.selectedDate?.year}
                </span>
              </p>
              <p>
                Time:{" "}
                <span className="text-bold">
                  {item?.selectedTime?.item?.time}
                  {item?.selectedTime?.item?.text}
                </span>
              </p>
              <hr className="mt-5" />
              <div className="flex flex-col gap-4">
                {item?.selectedVisits?.map((visit, i) => (
                  <div key={i} className="flex gap-5 items-center text-bold">
                    <p>{visit?.label}</p>
                    <p>${visit?.value}</p>
                  </div>
                ))}
                <hr />
                <p className="text-3xl text-primary font-bold">
                  Total: ${totalValue}
                </p>
              </div>
              <button
                type="submit"
                className="bg-primary outline outline-primary rounded-full px-6 py-2 text-bold hover:text-primary text-white hover:bg-transparent duration-300 mt-6"
              >
                Confirm and Pay
              </button>
            </form>
          ))
        ) : (
          <p className="text-xl mt-10 text-center mb-10">
            No bookings available.
          </p>
        )}
      </div>
    </section>
  );
};

export default Payment;
