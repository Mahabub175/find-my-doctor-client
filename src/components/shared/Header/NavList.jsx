import { List, ListItem, Typography } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { navLists } from "../../../assets/data/navData";
import NavListMenu from "./NavListMenu";
import useAuth from "../../../hooks/useAuth";

export const NavList = () => {
  const { user } = useAuth();
  return (
    <List className="mb-4 p-0 lg:mb-0 lg:flex-row justify-center items-center mt-10 lg:mt-0">
      {navLists?.map((item, key) => (
        <React.Fragment key={key}>
          {item?.href && (
            <NavLink
              to={item?.href}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <Typography variant="h6" className="font-semibold font-sans">
                <ListItem className="flex items-center gap-2 px-4 hover:bg-transparent hover:text-primary duration-200">
                  {item?.title}
                </ListItem>
              </Typography>
            </NavLink>
          )}
          {user && item?.to && (
            <NavLink
              to={item?.to}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <Typography variant="h6" className="font-semibold font-sans">
                <ListItem className="flex items-center gap-2 px-4 hover:bg-transparent hover:text-primary duration-200">
                  {item?.title}
                </ListItem>
              </Typography>
            </NavLink>
          )}
          {item?.subItems && (
            <NavListMenu
              title={item?.title}
              to={item?.to}
              subItems={item?.subItems}
              key={item}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
