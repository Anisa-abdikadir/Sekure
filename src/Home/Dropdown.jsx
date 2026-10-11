import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ label, value, options, onChange }) => {
  const detailsRef = useRef(null);

  const [hoveredOption, setHoveredOption] = useState(null);

  const handleSelect = (option) => {
    onChange(option);
    setHoveredOption(null);

    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <div className="relative">

      {/* Label */}
      <label className="relative z-10 ml-5 block w-fit -mb-1.75 bg-white px-2 text-[11px] font-semibold text-black">
        {label}
      </label>

      <details
        ref={detailsRef}
        className="group relative"
      >

        {/* Selected value */}
        <summary
          className="flex h-11.25 cursor-pointer list-none items-center justify-between border border-gray-200 bg-white px-4 text-[11px] text-gray-500 outline-none"
        >
          <span>{value}</span>

          <MdOutlineKeyboardArrowDown
            size={18}
            className="transition-transform duration-200 group-open:rotate-180"
          />
        </summary>

        {/* Options */}
        <div className="absolute left-0 top-full z-30 w-full border border-gray-200 bg-white shadow-md">

          {options.map((option) => {
            const isSelected = value === option;
            const isHovered = hoveredOption === option;

            return (
              <div
                key={option}
                onMouseEnter={() => setHoveredOption(option)}
                onMouseLeave={() => setHoveredOption(null)}
                onClick={() => handleSelect(option)}
                className={`cursor-pointer px-4 py-3 text-[11px] transition-colors duration-100 ${
                  isHovered
                    ? "bg-[#3478e5] text-white"
                    : isSelected && hoveredOption === null
                    ? "bg-[#3478e5] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {option}
              </div>
            );
          })}

        </div>
      </details>
    </div>
  );
};

export default Dropdown;