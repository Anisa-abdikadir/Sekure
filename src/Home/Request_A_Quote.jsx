import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import Buttons from "../components/Buttons"
import SecurityPromotion from "../Home/SecurityPromotion"
import {motion} from "motion/react"

const Request_A_Quote = () => {
// drop
  const [homeBusiness, setHomeBusiness] = useState("");
  const [industry, setIndustry] = useState("");
  const [systemSize, setSystemSize] = useState("");
  const [ownRent, setOwnRent] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedSystems, setSelectedSystems] = useState([]);

  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (item) => {
    setSelectedSystems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((system) => system !== item);
      }

      return [...prev, item];
    });

    // Remove checkbox error when user selects one
    setErrors((prev) => ({
      ...prev,
      systems: "",
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!homeBusiness) {
      newErrors.homeBusiness = "Please select Home or Business";
    }

    if (!industry) {
      newErrors.industry = "Please select an industry";
    }

    if (!systemSize) {
      newErrors.systemSize = "Please select system size";
    }

    if (!ownRent) {
      newErrors.ownRent = "Please select an option";
    }

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9+\-\s()]{7,}$/.test(phone)) {
    newErrors.phone = "Please enter a valid phone number";
  }

    // System of interest
    if (selectedSystems.length === 0) {
      newErrors.systems = "Please select at least one system";
    }

    // Save errors
    setErrors(newErrors);

    // Stop submit if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

   

    console.log("Form submitted successfully");

    console.log({
      homeBusiness,
      industry,
      systemSize,
      ownRent,
      firstName,
      lastName,
      email,
      phone,
      selectedSystems,
    });
  };

  return (
    <div className="flex ">
      <motion.div
       initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
       className="w-full lg:h-200  bg-white    md:px-10 relative md:py-20  lg:w-2/3 shadow-black/30 shadow-2xl">

      <div className="mb-9">
        <h2 className="inline-block   text-2xl font-bold text-black">
          Request A Quote
        </h2>

        <p className="mt-1  text-sm text-gray-500">
          Please complete the form below, to request a quote, and we'll be in
          touch. Or you can call us
          <span className="font-bold text-gray-700">
            01061245741
          </span>and our specialists will provide the necessary help!
        </p>
      </div>

   
      <form onSubmit={handleSubmit} className="space-y-7">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


          <div>
            <Dropdown
              label="Home Or Business?"
              value={homeBusiness || "Select an option"}
              onChange={(value) => {
                setHomeBusiness(value);

                setErrors((prev) => ({
                  ...prev,
                  homeBusiness: "",
                }));
              }}
              options={[
                "For Home",
                "For Business",
              ]}/>

            {errors.homeBusiness && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.homeBusiness}
              </p>
            )}
          </div>

          {/* Industry */}

          <div>
            <Dropdown
              label="Industry:"
              value={industry || "Select an industry"}
              onChange={(value) => {
                setIndustry(value);

                setErrors((prev) => ({
                  ...prev,
                  industry: "",
                }));
              }}
              options={[
                "Commercial Buildings",
                "Residential",
                "Industrial",
              ]}
            />

            {errors.industry && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.industry}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


          <div>
            <Dropdown
              label="System Size:"
              value={systemSize || "Select system size"}
              onChange={(value) => {
                setSystemSize(value);

                setErrors((prev) => ({
                  ...prev,
                  systemSize: "",
                }));
              }}
              options={[
                "Small (1-5 locations)",
                "Medium (6-20 locations)",
                "Large (20+ locations)",
              ]}
            />

            {errors.systemSize && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.systemSize}
              </p>
            )}
          </div>


          <div>
            <Dropdown
              label="Own Or Rent?"
              value={ownRent || "Select an option"}
              onChange={(value) => {
                setOwnRent(value);

                setErrors((prev) => ({
                  ...prev,
                  ownRent: "",
                }));
              }}
              options={[
                "I'm representing occupant",
                "I own the property",
                "I rent the property",
              ]}
            />

            {errors.ownRent && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.ownRent}
              </p>
            )}
          </div>
        </div>


        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  firstName: "",
                }));
              }}
              className={`h-11 w-full border px-4 text-[11px] text-gray-600 outline-none placeholder:text-gray-500 focus:border-[#3478e5] ${
                errors.firstName
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
            />

            {errors.firstName && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}

          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  lastName: "",
                }));
              }}
              className={`h-11 w-full border px-4 text-[11px] text-gray-600 outline-none placeholder:text-gray-500 focus:border-[#3478e5] ${
                errors.lastName
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
            />

            {errors.lastName && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

      

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
              className={`h-11 w-full border px-4 text-[11px] text-gray-600 outline-none placeholder:text-gray-500 focus:border-[#3478e5] ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
            />

            {errors.email && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.email}
              </p>
            )}
          </div>


          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  phone: "",
                }));
              }}
              className={`h-11 w-full border px-4 text-[11px] text-gray-600 outline-none placeholder:text-gray-500 focus:border-[#3478e5] ${
                errors.phone
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
            />

            {errors.phone && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

      

        <div>

          <h3 className="mb-3 text-[11px] font-semibold text-black">
            System Of Interest:
          </h3>

          <div className="flex flex-wrap gap-x-6 gap-y-4 text-[11px] text-gray-600">

            {[
              "Intrusion Detection",
              "Video Surveillance",
              "System Integration",
              "Monitoring",
              "Fire Detection",
              "Access Control",
              "Other",
            ].map((item) => (

              <label
                key={item}
                className="flex cursor-pointer items-center gap-2"
              >

               <div className="relative h-3 w-3">
              <input
                type="checkbox"
                value={item}
                checked={selectedSystems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
                className="peer h-3 w-3 appearance-none rounded-xs border border-gray-300"
              />

              <span className="pointer-events-none absolute left-0.75 top-0.75 hidden h-1.5 w-1.5 rounded-[1px] bg-red-500 peer-checked:block"></span>
            </div>

                <span>
                  {item}
                </span>

              </label>

            ))}

          </div>

          {/* Checkbox Error */}

          {errors.systems && (
            <p className="mt-2 text-[10px] text-red-500">
              {errors.systems}
            </p>
          )}
        </div>

            
            {/* <Buttons
              icon={<FaArrowRight size={9} className=" h-5 w-5 items-start rounded-full bg-white text-[#1c1c1c]"/>}

              text="Submit Request"
              size="medium"
              variant="third"
            /> */}
   
        <button
          type="submit"
          className="flex h-14.5 items-center gap-3 bg-[#1c1c1c] px-7 text-[11px] font-bold text-white transition hover:bg-[#63bd28]"
        >

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#1c1c1c]">
            <FaArrowRight size={9} />
          </span>

          Submit Request

        </button>

      </form>
    </motion.div>
          <SecurityPromotion/>

    </div>
    
  );
};

export default Request_A_Quote;