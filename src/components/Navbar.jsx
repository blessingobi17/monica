import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import iconClose from "../assets/images/icons/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClass = ({ isActive }) => (isActive ? "text-Creamm" : "text-Ash");

  return (
    <>
      <div
        className="relative lg:container lg:px-20 px-8 md:py-10 py-6 bg-Background
      flex items-center justify-between w-full"
      >
        <div className="flex items-baseline justify-between w-full gap-10">
          <div className="font-dmSerif text-Creamm text-3xl">
            <NavLink to="/" onClick={closeMenu}>
              Monica.
            </NavLink>
          </div>
          <div
            className="lg:hidden block cursor-pointer"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            {isOpen ? (
              <img src={iconClose} alt="" />
            ) : (
              <FaBars className="reactIcons" />
            )}
          </div>
          {isOpen ? (
            <nav
              className="flex flex-col items-start justify-between
            w-full bg-Background  absolute left-0 lg:top-0 md:top-24 top-14 z-10  px-8
          "
            >
              <ul
                className="flex flex-col items-center justify-between gap-10
             text-Ash  pt-16 "
              >
                <li>
                  <NavLink
                    to="/about"
                    className={linkClass}
                    onClick={closeMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={linkClass}
                    onClick={closeMenu}
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/journal"
                    className={linkClass}
                    onClick={closeMenu}
                  >
                    Journal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={linkClass}
                    onClick={closeMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="w-full">
                <NavLink to="/contact">
                  <button
                    className="bg-Orangee hover:bg-LightOrange transition duration-500 ease-in-out 
                    text-Blackk px-8 py-4 rounded-md font-roboto font-medium my-14 w-full"
                    onClick={closeMenu}
                  >
                    Let's Work Together
                  </button>
                </NavLink>
              </div>
            </nav>
          ) : (
            <nav
              className="hidden lg:flex flex-row lg:items-center justify-between w-full lg:relative 
        "
            >
              <ul className="flex flex-row  items-center justify-between gap-10 text-Ash ">
                <li>
                  <NavLink to="/about" className={linkClass}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="service" className={linkClass}>
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/journal" className={linkClass}>
                    Journal
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={linkClass}>
                    Contact
                  </NavLink>
                </li>
              </ul>
              <NavLink to="/contact">
                <button
                  className="bg-Orangee hover:bg-LightOrange  transition duration-500 ease-in-out  
                  text-Blackk px-8 py-4 rounded-md font-roboto font-medium"
                >
                  Let's Work Together
                </button>
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
