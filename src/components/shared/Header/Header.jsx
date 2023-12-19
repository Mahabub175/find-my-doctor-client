import React from "react";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavList } from "./NavList";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const lastScrollTop = React.useRef(0);

  React.useEffect(() => {
    const checkScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setIsScrolled(st > 100);
      } else {
        setIsScrolled(false);
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav
      className={`fixed bg-white top-0 left-0 w-full z-50 ${
        isScrolled
          ? "transition-all duration-200 ease-linear opacity-0 -z-50"
          : "transition-all duration-200 ease-linear opacity-100 z-50"
      }`}
    >
      <Navbar className="mx-auto container shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <img
              src="https://www.ansonika.com/findoctor/menu_2/img/logo.png"
              alt=""
              className="w-[130px] h-auto"
            />
          </Link>
          <div className="hidden lg:flex gap-10">
            <NavList />
            <div className="lg:flex items-center gap-2 hidden">
              <Button className="bg-transparent text-black outline outline-1">
                Log In
              </Button>
              <Button className="bg-primary">Sign In</Button>
            </div>
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex flex-col w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button>
            <Button size="sm" fullWidth className="bg-primary mt-2">
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
};

export default Header;
