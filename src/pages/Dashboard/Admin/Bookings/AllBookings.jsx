import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { base_url } from "../../../../utils/config";
import axios from "axios";

const TABLE_HEAD = ["Doctor Name", "Date", "Status"];

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${base_url}/appointments`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);
  return (
    <section>
      <Card className="lg:w-[700px]">
        <table className="table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-hidden">
            {bookings?.map(({ doctor, selectedDate, status }, index) => {
              const isLast = index === bookings[0].length - 1;
              const classes = isLast
                ? "p-4 overflow-hidden"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {doctor?.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {selectedDate?.day}/{selectedDate?.month}/
                      {selectedDate?.year}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {status}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </section>
  );
};

export default AllBookings;
