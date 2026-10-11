import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

import { asset } from "../assets/asset";
import Buttons from "./Buttons";
import Amingping from "./Amingping";
import { IoIosCall  } from "react-icons/io";
import logo from "../assets/logo-ontop.png";
import logoBlack from "../assets/logo-black.png"


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  // Mobile dropdown
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar background
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down
      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100
      ) {
        setShowNavbar(false);
      } else {
        // Show navbar when scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileDropdown(null);
  };

  // mobile dropdown
  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(
      mobileDropdown === menu ? null : menu
    );
  };

  const toggleDesktopDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500 ease-in-out

        ${showNavbar ? "translate-y-0" : "-translate-y-full"}

        ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }
      `}
      
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="relative flex h-20 sm:h-24 items-center justify-between">

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="shrink-0"
          >
            <img
              src={scrolled ? logoBlack :logo}
              alt="Sekure" className=" w-24 sm:w-28 lg:w-32 object-contain"
              />
          </NavLink>


          <nav className={` hidden lg:flex items-center gap-4 xl:gap-6 font-bold
              text-sm transition-colors duration-300

              ${
                scrolled
                  ? "text-gray-900"
                  : "text-white"
              }
            `}
          >


            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("home")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` relative flex items-center py-3
                    after:absolute after:left-0 after:-bottom-6 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300

                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `
                }
              >
                Home
                <RiArrowDropDownLine className="text-2xl" />
              </NavLink>

              <div
                className={`absolute top-18 left-0 w-60 bg-white px-8 py-6 shadow-lg transition-all  duration-300

                  ${
                    openMenu === "home"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }
                `}
              >
                <DropdownItem
                  to="/home-modern"
                  text="Home Modern"
                />

                <DropdownItem
                  to="/home-classic"
                  text="Home Classic"
                />

                <DropdownItem
                  to="/home-products"
                  text="Home Products"
                />
              </div>
            </div>


            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("company")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink
                to="/company"
                className={({ isActive }) =>
                  ` relative flex items-center py-3
                  after:absolute after:left-0 after:-bottom-6 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300

                  ${
                    isActive
                      ? "text-green-500 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `
                }
              >
                Company
                <RiArrowDropDownLine className="text-2xl" />
              </NavLink>

              <div
                className={` absolute top-18 left-0 w-60  bg-white px-8 py-6 shadow-lg transition-all duration-300

                  ${
                    openMenu === "company"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }
                `}
              >
                <DropdownItem
                  to="/About"
                  text="About Us"
                />

                <DropdownItem
                  to="/How"
                  text="How It Works"
                />

                <DropdownItem
                  to="/leader"
                  text="Leadership Team"
                />

                <DropdownItem
                  to="/Customers"
                  text="Customers' Reviews"
                />

                <DropdownItem
                  to="/location"
                  text="Our Location"
                />
              </div>
            </div>


            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `
                  relative flex items-center py-3 after:absolute after:left-0 after:-bottom-6 after:h-0.5
                  after:bg-green-500 after:transition-all after:duration-300

                  ${
                    isActive
                      ? "text-green-500 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `
                }
              >
                Services & Industries
                <RiArrowDropDownLine className="text-2xl" />
              </NavLink>

              {/* Mega menu */}

              <div
                className={` absolute top-18   left-0 w-120 bg-white shadow-lg transition-all duration-300

                  ${
                    openMenu === "services"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }
                `}
              >
                <div className="grid grid-cols-2 gap-10 px-8 py-6">


                  <div>
                    <h3 className="mb-2 pl-6 text-xl font-bold text-gray-900">
                      Services
                    </h3>

                    <DropdownItem
                      to="/business"
                      text="Business Security"
                    />

                    <DropdownItem
                      to="/fire"
                      text="Fire Detection"
                    />

                    <DropdownItem
                      to="/acess"
                      text="Access Control"
                    />

                    <DropdownItem
                      to="/alarm"
                      text="Alarm Systems"
                    />

                    <DropdownItem
                      to="/cctv"
                      text="CCTV & Video"
                    />

                    <DropdownItem
                      to="/smart"
                      text="Smart Home"
                    />
                  </div>


                  <div>
                    <h3 className="mb-2 pl-6 text-xl font-bold text-gray-900">
                      Industries
                    </h3>

                    <DropdownItem
                      to="/Biotech"
                      text="Pharmaceutic & Biotech"
                    />

                    <DropdownItem
                      to="/Logistics"
                      text="Manufacturing & Logistics"
                    />

                    <DropdownItem
                      to="/Buildings"
                      text="Healthcare Buildings"
                    />

                    <DropdownItem
                      to="/Commercial"
                      text="Commercial Buildings"
                    />

                    <DropdownItem
                      to="/Finance"
                      text="Finance & Banking"
                    />

                    <DropdownItem
                      to="/Office"
                      text="Office Buildings"
                    />
                  </div>

                </div>
              </div>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("news")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  ` relative flex items-center py-3 after:absolute after:left-0 after:-bottom-6 after:h-0.5
                  after:bg-green-500 after:transition-all after:duration-300

                  ${
                    isActive
                      ? "text-green-500 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `
                }
              >
                News & Media
                <RiArrowDropDownLine className="text-2xl" />
              </NavLink>

              <div
                className={` absolute top-18 left-0 w-60 bg-white px-8 py-6 shadow-lg transition-all duration-300

                  ${
                    openMenu === "news"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }
                `}
              >
                <DropdownItem
                  to="/blog"
                  text="Blog Grid"
                />

                <DropdownItem
                  to="/Standard"
                  text="Blog Standard"
                />

                <DropdownItem
                  to="/single"
                  text="Single Post"
                />

                <DropdownItem
                  to="/Case"
                  text="Case Studies Modern"
                />
              </div>
            </div>


            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("products")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `
                  relative flex items-center py-3 after:absolute  after:left-0 after:-bottom-6
                  after:h-0.5 after:bg-green-500 after:transition-all after:duration-300

                  ${
                    isActive
                      ? "text-green-500 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `
                }
              >
                Products
                <RiArrowDropDownLine className="text-2xl" />
              </NavLink>

              <div
                className={` absolute top-18 left-0 w-60 bg-white px-8 py-6 shadow-lg transition-all  duration-300

                  ${
                    openMenu === "products"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }
                `}>
                <DropdownItem
                  to="/shop"
                  text="Shop Products"
                />

                <DropdownItem
                  to="/single"
                  text="Single Products"
                />

                <DropdownItem
                  to="/cart"
                  text="Cart"
                />
              </div>
            </div>


            <FaSearch className="cursor-pointer text-xl xl:text-2xl" />


            <FaShoppingCart className="cursor-pointer text-xl xl:text-2xl" />


            <Buttons
              text="Get A Quote"
              size="medium"
              variant="primary"
            />


            <Amingping
            icon={<IoIosCall  />}
            iconColor="text-white"
            bgColor="bg-green-500"
            borderColor="border-green-500"
            iconSize="text-2xl"
            circleSize="h-10 w-10"
          />

          </nav>


          <div className="flex items-center gap-4 lg:hidden">


            <FaSearch
              className={`
                cursor-pointer
                text-xl
                ${
                  scrolled
                    ? "text-gray-900"
                    : "text-white"
                }
              `}
            />


            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`
                text-2xl
                ${
                  scrolled
                    ? "text-gray-900"
                    : "text-white"
                }
              `}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>

          </div>

                  {/* line */}
          <div
            className={` absolute left-0 right-0  bottom-0 h-px
              ${
                scrolled
                  ? "bg-gray-200"
                  : "bg-white/30"
              }
            `}
          />

        </div>
      </div>

    {/* mobel */}

      <div
        className={` lg:hidden overflow-y-auto transition-all duration-300 bg-white shadow-xl

          ${
            mobileMenu
              ? "max-h-[calc(100vh-5rem)] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="px-6 py-6">


          <MobileMenuItem
            title="Home"
            dropdown="home"
            mobileDropdown={mobileDropdown}
            toggleMobileDropdown={toggleMobileDropdown}/>

          {mobileDropdown === "home" && (
            <MobileSubMenu>
              <MobileLink
                to="/home-modern"
                text="Home Modern"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/home-classic"
                text="Home Classic"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/home-products"
                text="Home Products"
                closeMobileMenu={closeMobileMenu} />
            </MobileSubMenu>
          )}


          <MobileMenuItem
            title="Company"
            dropdown="company"
            mobileDropdown={mobileDropdown}
            toggleMobileDropdown={toggleMobileDropdown}
          />

          {mobileDropdown === "company" && (
            <MobileSubMenu>

              <MobileLink
                to="/About"
                text="About Us"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/How"
                text="How It Works"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/leader"
                text="Leadership Team"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Customers"
                text="Customers' Reviews"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/location"
                text="Our Location"
                closeMobileMenu={closeMobileMenu}
              />

            </MobileSubMenu>
          )}


          <MobileMenuItem
            title="Services & Industries"
            dropdown="services"
            mobileDropdown={mobileDropdown}
            toggleMobileDropdown={toggleMobileDropdown}
          />

          {mobileDropdown === "services" && (
            <MobileSubMenu>

              <p className="px-3 pt-2 pb-2 font-bold text-gray-900">
                Services
              </p>

              <MobileLink
                to="/business"
                text="Business Security"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/fire"
                text="Fire Detection"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/acess"
                text="Access Control"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/alarm"
                text="Alarm Systems"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/cctv"
                text="CCTV & Video"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/smart"
                text="Smart Home"
                closeMobileMenu={closeMobileMenu}
              />

              <p className="px-3 pt-5 pb-2 font-bold text-gray-900">
                Industries
              </p>

              <MobileLink
                to="/Biotech"
                text="Pharmaceutic & Biotech"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Logistics"
                text="Manufacturing & Logistics"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Buildings"
                text="Healthcare Buildings"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Commercial"
                text="Commercial Buildings"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Finance"
                text="Finance & Banking"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Office"
                text="Office Buildings"
                closeMobileMenu={closeMobileMenu}
              />

            </MobileSubMenu>
          )}


          <MobileMenuItem
            title="News & Media"
            dropdown="news"
            mobileDropdown={mobileDropdown}
            toggleMobileDropdown={toggleMobileDropdown}
          />

          {mobileDropdown === "news" && (
            <MobileSubMenu>

              <MobileLink
                to="/blog"
                text="Blog Grid"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Standard"
                text="Blog Standard"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/single"
                text="Single Post"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/Case"
                text="Case Studies Modern"
                closeMobileMenu={closeMobileMenu}
              />

            </MobileSubMenu>
          )}


          <MobileMenuItem
            title="Products"
            dropdown="products"
            mobileDropdown={mobileDropdown}
            toggleMobileDropdown={toggleMobileDropdown}
          />

          {mobileDropdown === "products" && (
            <MobileSubMenu>

              <MobileLink
                to="/shop"
                text="Shop Products"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/single"
                text="Single Products"
                closeMobileMenu={closeMobileMenu}
              />

              <MobileLink
                to="/cart"
                text="Cart"
                closeMobileMenu={closeMobileMenu}
              />

            </MobileSubMenu>
          )}

          {/* MOBILE ACTIONS */}

          <div className="mt-6 flex flex-col gap-4 border-t border-gray-200 pt-6">

            <div className="flex items-center gap-5">

              <FaShoppingCart className="text-xl text-gray-900" />

              <Amingping 
              icon={<IoIosCall  />}
              iconColor="text-white"
              bgColor="bg-green-500"
              borderColor="border-green-500"
              iconSize="text-2xl"
              circleSize="h-10 w-10"
            />

            </div>

            <Buttons
              text="Get A Quote"
              size="medium"
              variant="primary"
            />

          </div>

        </div>
      </div>

    </header>
  );
};


const DropdownItem = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className="
        group/item
        flex
        items-center
        border-b
        border-gray-200
        py-3
        text-gray-400
        transition-colors
        hover:border-green-500
        hover:text-green-500
      "
    >
      <FaArrowRight
        className="
          mr-2
          invisible
          -translate-x-2
          opacity-0
          transition-all
          duration-200

          group-hover/item:visible
          group-hover/item:translate-x-0
          group-hover/item:opacity-100
        "
      />

      {text}
    </NavLink>
  );
};



const MobileMenuItem = ({
  title,
  dropdown,
  mobileDropdown,
  toggleMobileDropdown,
}) => {
  const isOpen = mobileDropdown === dropdown;

  return (
    <button
      onClick={() => toggleMobileDropdown(dropdown)}
      className="
        flex
        w-full
        items-center
        justify-between
        border-b
        border-gray-200
        py-4
        text-left
        font-bold
        text-gray-900
      "
    >
      <span>{title}</span>

      <RiArrowDropDownLine
        className={`
          text-2xl
          transition-transform
          duration-300

          ${isOpen ? "rotate-180" : ""}
        `}
      />
    </button>
  );
};




const MobileSubMenu = ({ children }) => {
  return (
    <div className="border-b border-gray-200 bg-gray-50 px-3 py-2">
      {children}
    </div>
  );
};




const MobileLink = ({to,text,closeMobileMenu,
}) => {
  return (
    <NavLink
      to={to}
      onClick={closeMobileMenu}
      className=" flex items-center gap-2 border-b border-gray-200 py-3 text-sm text-gray-500 transition-colors hover:text-green-500">
      <FaArrowRight className="text-xs" />
      {text}
    </NavLink>
  );
};

export default Navbar;