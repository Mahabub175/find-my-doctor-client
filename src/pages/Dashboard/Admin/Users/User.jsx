import React, { useEffect, useState } from "react";
import { base_url } from "../../../../utils/config";

import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";

const TABLE_HEAD = ["Name", "Email", "Role", "Edit"];

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${base_url}/users`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (userData) => userData.role === "user"
        );
        setUser(filteredData);
      });
  }, []);

  const handleUserBlock = (id) => {
    axios
      .put(`${base_url}/user/${id}`)
      .then((response) => {
        const updatedUser = response.data;

        setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));

        toast.success("User has been blocked successfully!");
      })
      .catch((error) => {
        console.error("Error blocking user:", error);
        toast.error("Error blocking user!");
      });
  };

  return (
    <section>
      <Card className="lg:w-[600px]">
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
                    className="font-bold leading-none text-center"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-hidden">
            {user?.map(({ _id, name, email, role }, index) => {
              const isLast = index === user[0].length - 1;
              const classes = isLast
                ? "p-4 overflow-hidden"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name} className="text-center">
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {role}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button
                      className="bg-red-400"
                      onClick={() => handleUserBlock(_id)}
                    >
                      Block
                    </Button>
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

export default User;
