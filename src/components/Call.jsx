import { IoIosCall } from "react-icons/io";

function Call() {
  return (
    <div className="group relative flex items-center">
      <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-md">

        <div className="absolute -inset-2 rounded-full border-2 border-green-500"></div>

        <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-30"></span>

        {/* Icon */}
        <IoIosCall className="relative z-10 text-2xl" />
      </div>

      <div className="ml-3">
        <h1>252:83792</h1>
        <p>aniiiza@gmail.com</p>
      </div>
    </div>
  );
}

export default Call;
