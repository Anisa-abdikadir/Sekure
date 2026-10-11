
import React from "react";
import {Phone, } from "lucide-react";
import { FaEnvelope} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Buttons from "../components/Buttons";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import BackUp from "../components/BackUp";

const Footer = () => {

  const companyLinks = [
    "About Us",
    "Leadership",
    "News & Media",
    "Our Products",
    "Reviews",
  ];

  const serviceLinks = [
    "Business Security",
    "Fire Detection",
    "Access Control",
    "Alarm Systems",
    "CCTV & Video",
    "Smart Home",
  ];

  const helpLinks = [
    "Knowledge base",
    "Security resources",
    "Terms & Conditions",
    "Shipping Policy",
    "Contact us",
  ];

  const LinkList = ({ title, links }) => (
    <div >
      <h3 className="mb-14 text-xl font-bold text-white">
        {title}
      </h3>

      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-lg text-gray-400 transition-colors duration-300 hover:text-[#63b32e]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
      <div className="relative">
            <footer className="relative h-full mt-10 bg-[#151515] px-6 pb-24 pt-16 text-white md:px-10 lg:px-14 lg:pt-20">
      <div id="footer" className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

        <div className="lg:col-span-3">
          <h3 className="mb-14 text-xl font-bold">
            Quick Contact
          </h3>

          <p className="mb-6 max-w-sm text-lg leading-8 text-gray-400">
            If you have any questions or need help,
            feel free to contact with our team.
          </p>

          <a
            href="mailto:Support@cms.com"
            className="mb-5 flex items-center gap-5 text-sm font-bold text-[#63b32e] sm:text-xl">
            <FaEnvelope />
            <span>Support@cms.com</span>
          </a>

          <a
            href="tel:0201061245741"
            className="mb-8 flex items-center gap-5 text-xl font-bold text-[#63b32e] sm:text-xl"
          >
            <Phone size={25} fill="currentColor" />
            <span>02 01061245741</span>
          </a>

          <p className="mb-7 text-lg leading-8 text-gray-400">
            2307 Beverley Rd Brooklyn, New York
            <br />
            11226 United States
          </p>

          <a
            href="https://maps.google.com/?q=2307+Beverley+Rd+Brooklyn+New+York+11226"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-bold text-white transition-colors hover:text-[#63b32e]"
          >
            <FaLocationDot />
            Get Directions
          </a>
        </div>

        <div className="lg:col-span-2">
          <LinkList title="Company" links={companyLinks} />
        </div>

        <div className="lg:col-span-2">
          <LinkList title="Services" links={serviceLinks} />
        </div>

        <div className="lg:col-span-2">
          <LinkList title="Help" links={helpLinks} />
        </div>

       <div className="lg:col-span-3">
        <h3 className="mb-10 text-xl font-bold lg:text-right">
            Have A Project?
        </h3>

  <div className="flex w-full   ml-20">
    <div className="w-full lg:w-67.5">
      <Buttons
        text="Get A Quote"
        size="large"
        variant="green"
      />
    </div>
  </div>

  {/* Social Media */}
  <div className="mt-10 flex  justify-start gap-4 lg:justify-end">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#454545] text-[#63b32e] transition-all hover:border-[#63b32e]"
    >
      <FaFacebook size={27} />
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#454545] text-[#63b32e] transition-all hover:border-[#63b32e]"
    >
      <AiFillTwitterCircle size={25} />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#454545] text-[#63b32e] transition-all hover:border-[#63b32e]"
    >
      <TbBrandLinkedinFilled size={26} />
    </a>
  </div>

</div>
      </div>


         </footer>

      <BackUp />

     

      </div>
    


  );
};

export default Footer;