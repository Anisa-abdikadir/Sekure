import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { asset } from "../assets/asset";
import Buttons from "./Buttons";
import Call from "./Call";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className="relative w-full">


      <img
        src={asset.logo}alt="Logo" className="absolute left-8 top-6 z-20 w-32 object-contain" />
      <nav className="absolute right-8 font-bold text-sm top-6 z-20 flex items-center gap-6 text-white">

         <div className="relative group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-2 flex items-center gap-0.5 after:absolute after:left-0 after:-bottom-8 after:h-0.5 after:bg-green-500
              ${
                isActive
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`
            }
          >
            Home
            <RiArrowDropDownLine className="text-2xl" />
          </NavLink>

          <div className=" absolute top-10 left-0 w-60 bg-white px-8 py-6 shadow-lg opacity-0 invisible translate-y-2
              transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
            <NavLink to="/home-modern"
              className=" group/home-modern flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/home-modern:opacity-100
                  group-hover/home-modern:translate-x-0"/>
              Home Modern
            </NavLink>

            <NavLink to="/home-classic"
                className=" group/home-classic flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/home-classic:opacity-100
                  group-hover/home-classic:translate-x-0"/>
              Home Classic
            </NavLink>

            <NavLink to="/home-products"
                 className=" group/home-products flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/home-products:opacity-100
                  group-hover/home-products:translate-x-0"/>
              Home Products
            </NavLink>
          </div>
        </div>

       <div className="relative group">
         <NavLink  to="/company" className={({ isActive }) => 
            `relative py-2 transition-colors flex  items-center  duration-300 after:absolute 
            after:left-0 after:-bottom-8 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300
            ${
              isActive
                ? "text-green-500 after:w-full"
                : "after:w-0  hover:after:w-full"
            }`
          }>
            Company
            <span><RiArrowDropDownLine className="text-xl " /></span>

          </NavLink>

          <div className="
              absolute top-full left-0 w-60 bg-white px-8 py-6 shadow-lg
              opacity-0 invisible translate-y-2
              transition-all duration-300
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0">

            <NavLink to="/About"
                 className=" group/About flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/About:opacity-100
                  group-hover/About:translate-x-0"/>
              About Us
            </NavLink>
             <NavLink to="/How"
                 className=" group/How flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/How:opacity-100
                  group-hover/How:translate-x-0"/>
              How It Works
            </NavLink>
             <NavLink to="/leader"
                 className=" group/leader flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/leader:opacity-100
                  group-hover/leader:translate-x-0"/>
            Leadership Team
            </NavLink>
             <NavLink to="/Customers"
                 className=" group/Customers flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Customers:opacity-100
                  group-hover/Customers:translate-x-0"/>
              Customers' Reviews
            </NavLink>
             
            <NavLink to="/location"
                 className=" group/location flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/location:opacity-100
                  group-hover/location:translate-x-0"/>
            Out Location
            </NavLink>
          </div>

       </div>
       


           <div className="relative group">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative py-2 transition-colors flex items-center duration-300
                after:absolute after:left-0 after:-bottom-8 after:h-0.5
                after:bg-green-500 after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-green-500 after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Services & Industries
              <RiArrowDropDownLine className="text-2xl" />
            </NavLink>
             

            

         <div className="
            absolute right-0 top-full left-0 z-50 w-140  bg-white  shadow-lg opacity-0 invisible
            translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0" >
    
            <div className="grid grid-cols-2 gap-10 px-8 py-6">

              <div className="bg-white">
                <h3 className="mb-1 text-xl font-bold hover:text-green-500 text-gray-900">
                  Services
                </h3>

                <NavLink to="/business"
                 className=" group/business flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/business:opacity-100
                  group-hover/business:translate-x-0"/>
                  Business Security
            </NavLink>

               <NavLink to="/fire"
                 className=" group/fire flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/fire:opacity-100
                  group-hover/fire:translate-x-0"/>
                  Fire Detection
            </NavLink>

              <NavLink to="/acess"
                 className=" group/acess flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/acess:opacity-100
                  group-hover/acess:translate-x-0"/>
                  Access Control
            </NavLink>

              <NavLink to="/alarm"
                 className=" group/About flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/alarm:opacity-100
                  group-hover/alarm:translate-x-0"/>
                  Alarm Systems
            </NavLink>

            <NavLink to="/cctv"
                 className=" group/cctv flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/cctv:opacity-100
                  group-hover/cctv:translate-x-0"/>
                  CCTV & Video
            </NavLink>
            <NavLink to="/About"
                 className=" group/smart flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/smart:opacity-100
                  group-hover/smart:translate-x-0"/>
                  Smart Home
            </NavLink>
       
              </div>

              <div className="  w-full">
                <h3 className="mb-1 text-xl font-bold hover:text-green-500  text-gray-900">
                  Industries
                </h3>

                <NavLink to="/Biotech"
                 className=" group/Biotech flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Biotech:opacity-100
                  group-hover/Biotech:translate-x-0"/>
                  Pharmaceutic & Biotech
            </NavLink>
             <NavLink to="/Logistics"
                 className=" group/Logistics flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Logistics:opacity-100
                  group-hover/Logistics:translate-x-0"/>
                  Manufacturing & Logistics
            </NavLink>

             <NavLink to="/Buildings"
                 className=" group/Buildings flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Buildings:opacity-100
                  group-hover/Buildings:translate-x-0"/>
                  Healthcare Buildings
            </NavLink>

             <NavLink to="/Commercial"
                 className=" group/Commercial flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Commercial:opacity-100
                  group-hover/Commercial:translate-x-0"/>
                  Commercial Buildings
            </NavLink>

             <NavLink to="/Finance"
                 className=" group/Finance flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Finance:opacity-100
                  group-hover/Finance:translate-x-0"/>
                  Finance & Banking
            </NavLink>

             <NavLink to="/Office"
                 className=" group/Office flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
              <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Office:opacity-100
                  group-hover/Office:translate-x-0"/>
                  Office Buildings
            </NavLink>

          
               
              </div>

            </div>
  </div>
      </div> 





      <div className="relative group">
                <NavLink  to="/news" className={({ isActive }) => 
                `relative py-2 transition-colors duration-300 after:absolute
                    after:left-0 after:-bottom-8 flex text-center after:h-0.5 after:bg-green-500 after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-green-500 after:w-full"
                        : "after:w-0  hover:after:w-full"
                    }`
                  }
                >
                  News & Media<RiArrowDropDownLine className="text-2xl" />
                </NavLink>
                <div className=" absolute top-full left-0 w-60 bg-white px-8 py-6 shadow-lg opacity-0 invisible translate-y-2
                    transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <NavLink to="/blog"
                    className=" group/blog flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/blog:opacity-100
                        group-hover/blog:translate-x-0"/>
                        Blog Grid
                  </NavLink>

                  <NavLink to="/Standard"
                    className=" group/Standard flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Standard:opacity-100
                        group-hover/Standard:translate-x-0"/>
                        Blog Standard
                  </NavLink>

                  <NavLink to="/single"
                    className=" group/single flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/single:opacity-100
                        group-hover/single:translate-x-0"/>
                        Sing post
                  </NavLink>

                  <NavLink to="/Case"
                    className=" group/Case flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Case:opacity-100
                        group-hover/Case:translate-x-0"/>
                        Case studies  Modern
                  </NavLink>

                  <NavLink to="/home-modern"
                    className=" group/home-modern flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/home-modern:opacity-100
                        group-hover/home-modern:translate-x-0"/>
                        Blog Grid
                  </NavLink>
                  </div>

                
              </div>

                <div className="relative group">
                <NavLink  to="/news" className={({ isActive }) => 
                `relative py-2 transition-colors duration-300 after:absolute
                    after:left-0 after:-bottom-8 flex text-center after:h-0.5 after:bg-green-500 after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-green-500 after:w-full"
                        : "after:w-0  hover:after:w-full"
                    }`
                  }
                >
                  Products<RiArrowDropDownLine className="text-2xl" />
                </NavLink>
                <div className=" absolute top-full left-0 w-60 bg-white px-8 py-6 shadow-lg opacity-0 invisible translate-y-2
                    transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <NavLink to="/blog"
                    className=" group/blog flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/blog:opacity-100
                        group-hover/blog:translate-x-0"/>
                        Shop Products
                  </NavLink>

                  <NavLink to="/Standard"
                    className=" group/Standard flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Standard:opacity-100
                        group-hover/Standard:translate-x-0"/>
                         Single Products
                  </NavLink>

                  <NavLink to="/cart"
                    className=" group/single flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/single:opacity-100
                        group-hover/single:translate-x-0"/>
                        Cart
                  </NavLink>

                  <NavLink to="/Case"
                    className=" group/Case flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/Case:opacity-100
                        group-hover/Case:translate-x-0"/>
                        Case studies  Modern
                  </NavLink>

                  <NavLink to="/home-modern"
                    className=" group/home-modern flex items-center border-b border-gray-200 py-3  text-gray-400 hover:text-green-500 hover:border-green-500" >
                    <FaArrowRight className=" mr-2 invisible opacity-0 -translate-x-2 transition-all duration-200 group-hover:visible group-hover/home-modern:opacity-100
                        group-hover/home-modern:translate-x-0"/>
                        Blog Grid
                  </NavLink>
                  </div>

                
              </div>

        <FaSearch className="cursor-pointer transition " />

        <FaShoppingCart className="cursor-pointer transition " />

        <Buttons
          text="Get A Quote"
          color="red"
          size="medium"
          variant="primary"
          />

        <Call />

      </nav>
      <div className="w-full h-px absolute top-25 bg-[#2E2E2E]"></div>

    </div>
  );
};

export default Navbar;