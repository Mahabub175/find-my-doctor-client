import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Input,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, HomeIcon } from "@heroicons/react/24/outline";
import { MobileSideBar } from "./MobileSideBar";
import { Link, NavLink } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import AdminSide from "./AdminSide";
import UserSide from "./UserSide";

const DashboardSideBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(0);

  const [users] = useUsers();

  const handleOpen = (value) => {
    setMenuOpen(menuOpen === value ? 0 : value);
  };

  return (
    <div>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 hidden lg:flex items-center justify-center">
        <Link to={"/"} className="mb-2 flex flex-col items-center gap-4 p-4">
          <img
            src="https://www.ansonika.com/findoctor/menu_2/img/logo.png"
            alt="brand"
            className="w-20"
          />
          <Typography variant="h5" color="blue-gray">
            Find My Doctor
          </Typography>
        </Link>
        <div className="p-2">
          <Input
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            label="Search"
          />
        </div>
        <List>
          {users[0]?.role === "admin" ? (
            <AdminSide menuOpen={menuOpen} handleOpen={handleOpen} />
          ) : (
            <UserSide menuOpen={menuOpen} handleOpen={handleOpen} />
          )}

          <hr className="my-2 border-blue-gray-50" />

          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      <MobileSideBar />
    </div>
  );
};

export default DashboardSideBar;
