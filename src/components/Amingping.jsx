import React from "react";

const  Amingping = ({
  type = "button",
  icon,
  text,
  href = "#",
  iconColor = "text-green-500",
  bgColor = "bg-white",
  borderColor = "border-green-500",
  textColor = "text-white",
  iconSize = "text-xl",
  circleSize = "h-11 w-11",
  ping = true,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`relative flex flex-col items-center justify-center ${className}`}
    >
      {/* Icon Circle */}
      <div
        className={`relative flex ${circleSize} items-center justify-center rounded-full ${bgColor} shadow-md`}
      >
        {/* Outer Border */}
        {borderColor && (
          <div
            className={`absolute -inset-3 rounded-full border-2 ${borderColor}`}
          >
          </div>
        )}

        {/* Ping Animation */}
        {ping && (
          <span
            className={`absolute inset-0 rounded-full ${bgColor} animate-ping opacity-100`}
            
          ><span className={`absolute inset-0 rounded-full ${bgColor} animate-ping opacity-100`}/></span>
        )}

        {/* Icon */}
        <span className={`relative z-10 ${iconColor} ${iconSize}`}>
          {icon}
        </span>
      </div>

      {/* Text */}
      {text && (
        <p
          className={`relative z-10 mt-4 whitespace-nowrap text-sm font-bold tracking-wide ${textColor}`}
        >
          {text}
        </p>
      )}
    </a>
  );
};

export default Amingping;