import React, { useState } from "react";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const NavListMenu = ({ subItems, title, to }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = subItems?.map(
    ({ title = "Default title", href }, key) => (
      <NavLink
        to={href}
        key={key}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        <MenuItem className="flex items-center gap-3 p-2">
          <div>
            <Typography
              variant="h6"
              color="black"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </NavLink>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 15 }}
        placement="bottom"
        allowHover={true}
      >
        <div className="group">
          <MenuHandler>
            <Typography as="div" variant="h6" className="font-medium">
              <navLink
                to={to}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                <ListItem
                  className="flex items-center gap-2 px-2 font-semibold rounded-none font-sans hover:bg-transparent hover:text-primary duration-200"
                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                >
                  {title}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`hidden h-3 w-3 transition-transform lg:block ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`block h-3 w-3 transition-transform lg:hidden ${
                      isMobileMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </ListItem>
              </navLink>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl min-w-1/2 rounded-md lg:block">
            <ul className="grid grid-cols-1 gap-5 outline-none outline-0 hover:text-primary hover:bg-transparent duration-200 w-[800px] mx-auto justify-start">
              {renderItems}
            </ul>
          </MenuList>
        </div>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
};

export default NavListMenu;
