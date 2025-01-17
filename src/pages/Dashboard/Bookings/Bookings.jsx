import { Link } from "react-router-dom";
import useBooking from "../../../hooks/useBooking";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Doctor Name", "Date", "Status", ""];

const Bookings = () => {
  const bookings = useBooking();

  return (
    <section className="container mx-auto">
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
            {bookings[0].map(({ doctor, selectedDate, status }, index) => {
              const isLast = index === bookings[0].length - 1;
              const classes = isLast
                ? "p-4 overflow-hidden"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
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
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {status === "booked" ? (
                        <Link to={"/payment"}>
                          <button className="bg-transparent outline outline-primary rounded-full px-6 py-2 text-bold hover:text-white text-primary hover:bg-primary duration-300">
                            Pay
                          </button>
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="bg-primary outline outline-primary rounded-full px-6 py-2 text-bold text-white hover:bg-primary duration-300"
                        >
                          Paid
                        </button>
                      )}
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

export default Bookings;
