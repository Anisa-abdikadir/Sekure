import React from "react";
const Buttons = ({
  text,
  variant = "primary",
  size = "medium",
  onClick,
  
}) => {
  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-5 text-base",
    large: "px-18 py-5 text-lg",
  };

  const variants = {
    primary:
      "bg-[#FBFBFB] text-black hover:text-white hover:bg-[#65B530]",

    secondary:
      "bg-[#65B530] text-white hover:bg-[#1B1A1A]",

    outline:
      "border border-[#3770A8] text-white hover:bg-[#3770A8] hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        font-semibold
        transition-colors
        duration-200
      `}
    >
      {text}
    </button>
  );
};

export default Buttons;