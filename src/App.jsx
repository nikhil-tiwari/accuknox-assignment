import Header from "./components/Header";
import { FaPlus, FaClock } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import CategoryModal from "./components/CategoryModal";
import { useState } from "react";
import CSPMDashboard from "./components/CSPMDashboard";
import CWPPDashboard from "./components/CWPPDashboard";
import ImageDashboard from "./components/ImageDashBoard";
import TicketDashboard from "./components/TicketDashboard";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleMaintainCategory = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header/>
      <div className="flex items-center justify-between p-8">
        <div className="font-semibold text-2xl">CNAPP Dashboard</div>
        <div className="flex items-center justify-between gap-4">
          <button className="h-10 p-2 bg-white border-2 border-neutral-400 flex items-center gap-4 w-44 rounded-md" onClick={handleMaintainCategory}>
            <p>Maintain Widget</p>
            <FaPlus />
          </button>
          <button className="bg-white border-2 border-neutral-400 w-8 h-10 flex items-center justify-center rounded-md">
            <TfiReload />
          </button>
          <button className="bg-white border-2 border-neutral-400 w-8 h-10 flex items-center justify-center rounded-md">
            <CiMenuKebab />
          </button>
          <button className="h-10 p-1 bg-white border-2 border-blue-600 text-blue-900 flex items-center justify-around w-40 rounded-md">
            <FaClock />
            <p className="font-bold">Last 2 days</p>
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      {isOpen && <CategoryModal onClose={handleCloseModal} />}
      <CSPMDashboard />
      <CWPPDashboard />
      <ImageDashboard />
      <TicketDashboard />
    </>
  );
}

export default App;
