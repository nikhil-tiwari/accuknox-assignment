import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleWidget as toggleCSPM, deleteWidget as deleteCSPM } from "../redux/slices/cspm";
import { toggleWidget as toggleCWPP, deleteWidget as deleteCWPP } from "../redux/slices/cwpp";
import { toggleWidget as toggleImage, deleteWidget as deleteImage } from "../redux/slices/image";
import { toggleWidget as toggleTicket, deleteWidget as deleteTicket } from "../redux/slices/ticket";
import { MdDeleteForever } from "react-icons/md";


const CategoryModal = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("CSPM");
  const dispatch = useDispatch();

  const cspmWidget = useSelector((store) => store.cspmWidgets);
  const cwppWidget = useSelector((store) => store.cwppWidgets);
  const imageWidget = useSelector((store) => store.imageWidgets);
  const ticketWidget = useSelector((store) => store.ticketWidgets);
  const categories = ["CSPM", "CWPP", "Image", "Ticket"];

  const getActiveWidgetList = () => {
    switch (activeCategory) {
      case "CSPM":
        return cspmWidget;
      case "CWPP":
        return cwppWidget;
      case "Image":
        return imageWidget;
      case "Ticket":
        return ticketWidget;
      default:
        return [];
    }
  };

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  // Handle checkbox toggle
  const handleToggleCheck = (index) => {
    switch (activeCategory) {
        case "CSPM":
          return dispatch(toggleCSPM(index));
        case "CWPP":
          return dispatch(toggleCWPP(index));
        case "Image":
          return dispatch(toggleImage(index));
        case "Ticket":
          return dispatch(toggleTicket(index));
        default:
          return [];
    }
  };

  const handleDeleteWidget = (index) => {
    switch (activeCategory) {
        case "CSPM":
          return dispatch(deleteCSPM(index));
        case "CWPP":
          return dispatch(deleteCWPP(index));
        case "Image":
          return dispatch(deleteImage(index));
        case "Ticket":
          return dispatch(deleteTicket(index));
        default:
          return [];
    }
  };

  const activeWidgetList = getActiveWidgetList();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-[35rem] h-full shadow-lg transform transition-transform duration-500 translate-x-0">
        <div className="bg-blue-900 h-12 flex justify-between items-center p-4">
          <h1 className="text-white font-bold">Maintain Widget</h1>
          <button onClick={onClose} className="text-white">
            <RiCloseLargeFill />
          </button>
        </div>
        <h1 className="p-2 font-medium">
          Personalize your dashboard by adding the following widget
        </h1>
        <div className="flex border-b">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleChangeCategory(category)}
              className={`p-2 cursor-pointer font-medium ${
                activeCategory === category ? "text-blue-900" : "text-gray-500"
              }`}
            >
              {category}
              {activeCategory === category && (
                <div className="h-0.5 bg-blue-900 mt-1 rounded"></div>
              )}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeWidgetList.length > 0 ? (
            activeWidgetList.map((widget, index) => (
              <div key={index+1} className="flex items-center justify-between p-2 border-b">
                <input
                  type="checkbox"
                  checked={widget.checked}
                  onChange={() => handleToggleCheck(index)}
                />
                <span>{widget.title}</span>
                <MdDeleteForever onClick={() => handleDeleteWidget(index)}/>
              </div>
            ))
          ) : (
            <p>No widgets available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
