import React from "react";

const Buttons = ({
  text,
  variant = "primary",
  size = "medium",
  onClick,
  icon,
  rounded = false,
}) => {
  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-5 text-base",
    large: "px-10 py-5 text-lg",
  };

  const variants = {
    primary:
      "bg-[#FBFBFB] text-black hover:text-white hover:bg-[#65B530]",

    secondary:
      "bg-[#65B530] text-white hover:bg-[#1B1A1A]",

    third:
      "bg-[#010808] text-white hover:bg-[#65B530]",

    bgWhite:
      "bg-[#FBFBFB] text-black hover:text-white hover:bg-[#000000]",

    green:
      "bg-[#65B530] text-white hover:text-[#65B530] hover:bg-[#FBFBFB]",
  };

return (
  <button
    onClick={onClick}
    className={`
      group
      ${variants[variant]}
      ${sizes[size]}
      ${rounded ? "rounded-full" : ""}
      font-semibold
      transition-colors duration-200
      flex items-center justify-center gap-3
      whitespace-nowrap cursor-pointer
    `}
  >
    <span>{text}</span>

    {icon && (
      <span className="flex items-center">
        <span className="transition-transform duration-100 group-hover:translate-x-1">
          {icon}
        </span>
      </span>
    )}
  </button>
);
};

export default Buttons;