import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Header = () => {

  return (
    <div className="bg-white w-full h-12 p-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="text-gray-400 font-medium">Home</p>
        <p className="text-gray-400"><MdOutlineKeyboardArrowRight /></p>
        <p className="text-black font-medium">Dashboard V2</p>
      </div>
      <div className="flex justify-center items-center hover:border-2 hover:rounded-md hover:border-neutral-700">
        <p className="px-2 bg-slate-200 h-8 flex justify-center items-center rounded-l-md">
          <CiSearch/>
        </p>
        <input
          type="text"
          className="p-1 w-80 bg-slate-200 active:border-0 rounded-r-md focus:outline-none"
          placeholder="Search anything"
        />
      </div>
    </div>
  );
}

export default Header;
